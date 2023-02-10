import axios from 'axios';

// =========== Typization ==========

type RickMortyData = {
  id: number;
  name: string;
};

type ArrayOfChars = {
  data: {
    name: string;
    gender: string;
    species: string;
    image: string;
    location: {
      name: string;
    };
    origin: {
      name: string;
    };
  };
};

type SingleChar = {
  name: string;
  gender: string;
  species: string;
  image: string;
  location: {
    name: string;
  };
};

//  =========== DOM manipulations ==========

const search = document.getElementById('search') as HTMLInputElement | null;
const matchList = document.getElementById('match-list') as HTMLUListElement | null;
const apiInfoArticle = document.querySelector('.article-api') as HTMLElement | null;
const articleForChars = document.querySelector('.article-chars') as HTMLElement | null;
const idsToFetch = [1, 2, 3, 4];

const deleteInfo = () => {
  if (matchList.firstChild && matchList.firstChild.textContent === 'no matches') {
    matchList.removeChild(matchList.firstChild);
  } else {
    return;
  }
};

const createLi = (data: RickMortyData) => {
  let li = document.createElement('li');
  li.setAttribute('data-value', data.id.toString());
  li.setAttribute('data-name', data.name);
  li.innerText = data.name;
  if (data.name !== 'no matches') {
    li.addEventListener('click', () => addDataToAtricle(li.dataset.value));
  }
  return li;
};

const outputHtml = (matches: Array<Object>) => {
  if (matches.length > 0) {
    matchList.innerHTML = '';
    matches.map((match) => matchList.append(createLi(match as RickMortyData)));
  } else {
    apiInfoArticle.innerHTML = '';
    matchList.innerHTML = '';
    matchList.append(createLi({ id: -1, name: 'no matches' }));
  }
};

const renderFourChars = (data: ArrayOfChars) => {
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info-div');

  let img = document.createElement('img');
  let name = document.createElement('p');
  let gender = document.createElement('p');
  let species = document.createElement('p');
  let location = document.createElement('p');
  let origin = document.createElement('p');
  img.src = data.data.image;
  name.textContent = `Name: ${data.data.name}`;
  gender.textContent = `Gender: ${data.data.gender}`;
  species.textContent = `Species: ${data.data.species}`;
  origin.textContent = `Origin: ${data.data.origin.name}`;
  location.textContent = `Location: ${data.data.location.name}`;

  infoDiv.append(img, name, gender, species, location, origin);
  articleForChars.append(infoDiv);
};

const renderSingleChar = (fetchedChar: SingleChar) => {
  let imgForChar = document.createElement('img');
  let paragraphName = document.createElement('p');
  let paragraphGender = document.createElement('p');
  let paragraphSpecies = document.createElement('p');
  let paragraphLocation = document.createElement('p');
  imgForChar.src = fetchedChar.image;
  paragraphName.textContent = `Name: ${fetchedChar.name}`;
  paragraphGender.textContent = `Gender: ${fetchedChar.gender}`;
  paragraphSpecies.textContent = `Species: ${fetchedChar.species}`;
  paragraphLocation.textContent = `Location: ${fetchedChar.location.name}`;
  apiInfoArticle.append(imgForChar, paragraphName, paragraphSpecies, paragraphLocation);
};

// =========== Async functions to fetch and work with data ==========

axios.interceptors.response.use((response) => {
  console.log('Response status:', JSON.stringify(response.status, null, 2));
  return response;
});

const getData = async (text: string) => {
  try {
    const result = await axios.get(`https://rickandmortyapi.com/api/character/?name=${text}`);
    return result.data.results;
  } catch (e) {
    return [];
  }
};

const fetchFourChars = async (ids: Array<number>) => {
  const fetchedArray = ids.map((id) =>
    axios.get(`https://rickandmortyapi.com/api/character/${id}`),
  );

  const finalFetchedArray = await Promise.all(fetchedArray);

  finalFetchedArray.forEach((elem) => {
    renderFourChars(elem);
  });
};

const searchValues = async (searchText: string) => {
  let dataToSearch = await getData(searchText);
  let matches = dataToSearch.filter(async (data: SingleChar) => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return data.name.match(regex);
  });

  if (searchText.length === 0) {
    matchList.innerHTML = 'no matches';
    matches = [];
  }

  outputHtml(matches.slice(0, 10));
};

const getChar = async (id: number | string) => {
  const result = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  return result.data;
};

const addDataToAtricle = async (id: string) => {
  apiInfoArticle.innerHTML = '';
  let fetchedChar = await getChar(id);
  renderSingleChar(fetchedChar);
};

// =========== Add listeners, call function  ==========

search.addEventListener('input', () => searchValues(search.value));
search.addEventListener('blur', () => deleteInfo());
fetchFourChars(idsToFetch);

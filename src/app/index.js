import './styles/main.scss';
import axios from 'axios';
// === дано
// скорость
// фреймрейт
// timestamp
// ширина артикла
// ширина квадрата

window.onload = () => {
  const container = document.querySelector('.square__container-js');
  const maxXPosition = parseInt(getComputedStyle(container).width);
  const timeBlock = document.querySelector('.running__square-js');
  const frameBlock = document.querySelector('.running__square-frame');
  timeoutAnimate(maxXPosition, timeBlock);
  frameAnimate(maxXPosition, frameBlock);
};

function timeoutAnimate(maxXPosition, block) {
  const refreshRate = 10;

  let speedX = 6;
  let positionX = 0;

  window.setInterval(() => {
    positionX = positionX + speedX;
    if (positionX > maxXPosition - 40) {
      positionX = maxXPosition - 40;
      speedX = speedX * -1;
    } else if (positionX < 0) {
      speedX = speedX * -1;
      positionX = 0;
    }
    block.style.transform = `translateX(${positionX}px)`;
  }, refreshRate);
}

function frameAnimate(maxXPosition, block) {
  let positionX = 0;
  let speedX = 600;
  let prevTime = 0;

  function step(time) {
    if (!prevTime) {
      prevTime = time;
    }

    let timestamp = time - prevTime;
    prevTime = time;
    positionX += speedX * (timestamp / 1000);

    if (positionX > maxXPosition - 40) {
      positionX = maxXPosition - 40;
      speedX = speedX * -1;
    } else if (positionX < 0) {
      speedX = speedX * -1;
      positionX = 0;
    }

    block.style.transform = `translateX(${positionX}px)`;

    window.requestAnimationFrame(step);
  }
  let ss = window.requestAnimationFrame(step);
  window.blur(() => cancelAnimationFrame(ss));
}

// =========== Fetch-axios Rick and Morty ==========

const getData = async (text) => {
  try {
    const result = await axios.get(`https://rickandmortyapi.com/api/character/?name=${text}`);
    return result.data.results;
  } catch (e) {
    return [];
  }
};

// =========== Render fetched data ==========

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const searchValues = async (searchText) => {
  let dataToSearch = await getData(searchText);
  let matches = dataToSearch.filter(async (data) => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return data.name.match(regex);
  });
  console.log(matches);

  if (searchText.length === 0) {
    matchList.innerHTML = '';
    matches = [];
  }

  outputHtml(matches.slice(0, 10));
};

const deleteInfo = () => {
  if (matchList.firstChild && matchList.firstChild.textContent === 'no matches') {
    matchList.removeChild(matchList.firstChild);
  } else {
    return;
  }
};

const createLi = (data) => {
  let li = document.createElement('li');
  li.setAttribute('data-value', data.id);
  li.setAttribute('data-name', data.name);
  li.innerText = data.name;
  if (data.name !== 'no matches') {
    li.addEventListener('click', () => addDataToAtricle(li.dataset.value));
  }
  return li;
};

const outputHtml = (matches) => {
  if (matches.length > 0) {
    matchList.innerHTML = '';
    matches.map((match) => matchList.append(createLi(match)));
  } else {
    apiInfoArticle.innerHTML = 'Choose a character';
    matchList.append(createLi({ id: 'no matches', name: 'no matches' }));
    matchList.innerHTML = '';
  }
};

search.addEventListener('input', () => searchValues(search.value));
search.addEventListener('blur', () => deleteInfo());

// =========== Insert info about single char ==========
const apiInfoArticle = document.querySelector('.article-api');

const getChar = async (id) => {
  const result = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
  return result.data;
};

const addDataToAtricle = async (id) => {
  apiInfoArticle.innerHTML = '';
  let fetchedChar = await getChar(id);
  console.log(fetchedChar.image);
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

// =========== Insert info about four chars ==========
const idsToFetch = [1, 2, 3, 4];
const articleForChars = document.querySelector('.article-chars');

const fetchFourChars = async (ids) => {
  const fetchedArray = ids.map((id) =>
    axios.get(`https://rickandmortyapi.com/api/character/${id}`),
  );

  const finalFetchedArray = await Promise.all(fetchedArray);
  finalFetchedArray.forEach((elem) => {
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info-div');

    let img = document.createElement('img');
    let name = document.createElement('p');
    let gender = document.createElement('p');
    let species = document.createElement('p');
    let location = document.createElement('p');
    let origin = document.createElement('p');
    img.src = elem.data.image;
    name.textContent = `Name: ${elem.data.name}`;
    gender.textContent = `Gender: ${elem.data.gender}`;
    species.textContent = `Species: ${elem.data.species}`;
    origin.textContent = `Origin: ${elem.data.origin.name}`;
    location.textContent = `Location: ${elem.data.location.name}`;

    infoDiv.append(img, name, gender, species, location, origin);
    articleForChars.append(infoDiv);
  });
  finalFetchedArray.forEach((e) => console.log(e.status));
};

fetchFourChars(idsToFetch);

import './styles/main.scss';

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

// =========== SELECT virtualized list ==========

const dataToSearch = [
  'erlv',
  'nszmovdos',
  'tryx',
  'eyg',
  'fmobclpwb',
  'yyghxvm',
  'kgeqdfsmm',
  'cdjyqwhnzum',
  'cwkvltnuv',
  'lhpczzclkzir',
  'plqbarnpj',
  'lgqsj',
  'lnczthfr',
  'qyoqeuisq',
  'oadaaad',
  'gnfrkxeufzob',
  'kadmmze',
  'amwmk',
  'acbzyrwr',
  'jkim',
  'dfxeorwjrs',
  'rikwtfyg',
  'donjpsq',
  'mwxdxurgjdja',
  'xux',
  'lkp',
  'hxafsnteik',
  'ldcuhwoofgs',
  'xhtk',
  'tmz',
  'szghtmyxc',
  'uwftlchgyatm',
  'bjxsykgc',
  'qwdnofr',
  'nsxige',
  'rzxrzptpg',
  'rwn',
  'fkjoy',
  'gwwimhjwwn',
  'vvlrhms',
  'mpdpieqey',
  'srimvzziaup',
  'dprvgisqnz',
  'ssc',
  'skhmeoto',
  'wdaphbi',
  'zfa',
  'vfxwprelr',
  'spgpbnyomt',
  'dhhzdmopi',
  'znpoe',
  'lrtwsydtnfg',
  'zpcdeusbinho',
  'iklj',
  'rwntzcqpxiiz',
  'dneggq',
  'pokqvnk',
  'vaygn',
  'lcmqxw',
  'xebquevuaw',
  'ciztrwo',
  'xibt',
  'bxdarvwnzs',
  'dpqq',
  'xcvvg',
  'hemwxlyk',
  'gxqm',
  'szmoxrtnh',
  'ngtoaswvl',
  'pycqgbhdpjq',
  'rrzso',
  'upgzjdgcqbc',
  'vhnroxbypd',
  'sjqjgkclbko',
  'chzir',
  'qozuakwq',
  'tdu',
  'ckgntrexbo',
  'zteii',
  'znh',
  'zyrfbyrekkke',
  'kbaisgobrq',
  'xam',
  'obeqxj',
  'ovddxte',
  'lzxssakbbna',
  'gqsdqhj',
  'jdqqkd',
  'vjqqhw',
  'hne',
  'rivvxst',
  'kaekfghhdmd',
  'lkeyzof',
  'lulwvfwhmd',
  'bcpdikkose',
  'ddzxe',
  'epbffhhp',
  'zffkdbqr',
  'zmfojgov',
  'law',
  'aqwfz',
  'qwe',
  'qwer',
  'qweqwr',
  'qwedc',
  'qwedcq',
  'qwedcqx',
  'qwedxga',
  'qwertxga',
  'qwertaxga',
  'qwertaasdxga',
  'qwehhzzxga',
  'qwehh',
  'qwehhalla',
  'qwehhalas',
  'qwehhalasasda',
];

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const searchValues = (searchText) => {
  let matches = dataToSearch.filter((data) => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return data.match(regex);
  });

  if (searchText.length === 0) {
    matchList.innerHTML = '';
    matches = [];
  }

  outputHtml(matches.slice(0, 10));
};

const deleteInfo = (searchText) => {
  if (matchList.firstChild && matchList.firstChild.textContent === 'no matches') {
    matchList.removeChild(matchList.firstChild);
  } else {
    return;
  }
};

const createLi = (text) => {
  let li = document.createElement('li');
  li.innerText = text;
  return li;
};

const outputHtml = (matches) => {
  if (matches.length > 0) {
    matchList.innerHTML = '';
    matches.map((match) => matchList.append(createLi(match)));
  } else {
    matchList.innerHTML = '';
    matchList.append(createLi('no matches'));
  }
};

search.addEventListener('input', () => searchValues(search.value));
search.addEventListener('blur', () => deleteInfo(search.value));

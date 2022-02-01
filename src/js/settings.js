export const select = {
  templateOf: {
    homePage: '#template-home',
    song: '#template-song'
  },
  containerOf: {
    home: '.home-wrapper',
    homeAudio: '#home .audio-wrapper',
    discoverAudio: '#discover .audio-wrapper',
    searchAudio: '#search .audio-wrapper',
    pages: '#pages',
    audioPlayer: '.song .audio-player',
  },
  nav: {
    links: '.main-nav a',
  },
  search: {
    button: '.search-container button',
    input: '.search-container input',
  }
};

export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  },
  search: {
    notFound: 'not-found',
  },
};

export const settings = {
  db: {
    url: '//localhost:3131',
    songs: 'songs',
  },
};

export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  song: Handlebars.compile(document.querySelector(select.templateOf.song).innerHTML)
};

export const select = {
  templateOf: {
    homePage: '#template-home',
    song: '#template-song'
  },
  containerOf: {
    home: '.home-wrapper',
    homeAudio: '#home .audio-wrapper',
    discoverAudio: '#discover .audio-wrapper',
    pages: '#pages',
    audioPlayer: '.song .audio-player',
  },
  nav: {
    links: '.main-nav a',
  }
};

export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  }
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

export const select = {
  templateOf: {
    homePage: '#template-home',
  },
  containerOf: {
    home: '.home-wrapper',
    pages: '#pages',
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

export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
};

import {select, classNames, settings} from './settings.js';
import Home from './components/Home.js';
import Song from './components/Song.js';
import Discover from './components/Discover.js';
import Search from './components/Search.js';

const app = {
  initHome: function() {
    const thisApp = this;

    thisApp.homeWrapper = document.querySelector(select.containerOf.home);

    new Home(thisApp.homeWrapper);
  },

  initPages: function() {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');

    // domyslnie wlaczana jest strona pierwsza strona z listy (index 0), dodatkowo sprawdzane jest id z przegladarki i jesli nie pasuje do niczego, znowu wyswietlana jest strona 1

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.openPage(pageMatchingHash);

    // listener dla kazdego linka wywolujacy funkcje openPage dla kliknietego Id linka
    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function(event) {
        event.preventDefault();

        const clickedElement = this;

        const linkId = clickedElement.getAttribute('href').replace('#', '');

        thisApp.openPage(linkId);

        window.location.hash = '#/' + linkId; // ta zmiana powoduje, ze strona po przeladowaniu nie przewija sie do elementu o id 'linkId' tylko zostaje na gorze
        // wspomniane przewijanie sie strony jest domyslnym zachowaniem strony, ktore mozna nadpisac zmianiajac link
      });
    }


  },

  openPage: function(pageId) {
    // otwieranie stron i zaznaczanie linkow wykorzystujac klase 'active'
    const thisApp = this;

    for (let page of thisApp.pages) {
      page.classList.toggle(
        classNames.pages.active, // klasa do dodania
        page.id == pageId // warunek
      );
    }

    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active, // klasa do dodania
        link.getAttribute('href') == '#' + pageId // warunek
      );
    }
  },

  initData: function() {
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.songs;

    fetch(url)
      .then(function(rawResponse) {
        return rawResponse.json();
      })
      .then(function(parsedResponse) {
        thisApp.data.songs = parsedResponse;

        thisApp.initHomeSongs();
        thisApp.initDiscover();
        thisApp.initSearch();
        thisApp.initAudioPlayer();
      });
  },

  initHomeSongs: function() {
    const thisApp = this;

    const homeAudioWrapper = document.querySelector(select.containerOf.homeAudio);

    for (let songData in thisApp.data.songs) {
      new Song(thisApp.data.songs[songData], homeAudioWrapper);
    }
  },

  initAudioPlayer: function() {
    /* drugie rozwiazanie pozwala na wprowadzanie dodatkowych opcji np. zatrzymanie przy odtworzeniu innego */

    // const thisApp = this;
    //
    // thisApp.audioPlayers = document.querySelectorAll(select.containerOf.audioPlayer);
    //
    // for (let audioPlayer of thisApp.audioPlayers) {
    //   // eslint-disable-next-line no-undef
    //   new GreenAudioPlayer(audioPlayer);
    // }

    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: select.containerOf.audioPlayer, // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true
    });
  },

  initDiscover: function() {
    const thisApp = this;

    const discoverAudioWrapper = document.querySelector(select.containerOf.discoverAudio);

    // random song selector
    let dataLength = Object.keys(thisApp.data.songs).length;
    let randomIndex = Math.floor(Math.random() * dataLength);
    let randomSong = thisApp.data.songs[Object.keys(thisApp.data.songs)[randomIndex]];

    new Discover(randomSong, discoverAudioWrapper);
  },

  initSearch: function() {
    const thisApp = this;

    const searchAudioWrapper = document.querySelector(select.containerOf.searchAudio);

    new Search(thisApp.data.songs, searchAudioWrapper);
  },

  init: function() {
    const thisApp = this;

    thisApp.initData();
    thisApp.initHome();
    thisApp.initPages();
  }
};

app.init();

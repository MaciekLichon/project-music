import {select, classNames} from '../settings.js';
import Song from './Song.js';

class Search {
  constructor(data, element) {
    const thisSearch = this;

    thisSearch.data = data;
    thisSearch.wrapper = element;

    thisSearch.renderSongs();
    thisSearch.readInput();
  }

  renderSongs() {
    const thisSearch = this;

    for (let songData of thisSearch.data) {
      new Song(songData, thisSearch.wrapper);
    }

    thisSearch.hideSongs();
  }

  hideSongs() {
    const thisSearch = this;

    for (let song of thisSearch.wrapper.children) {
      song.classList.add(classNames.search.notFound);
    }
  }

  readInput() {
    const thisSearch = this;

    thisSearch.button = document.querySelector(select.search.button);
    thisSearch.input = document.querySelector(select.search.input);

    thisSearch.button.addEventListener('click', function(event){
      event.preventDefault();
      
      thisSearch.hideSongs();
      thisSearch.matchData();
    });
  }

  matchData() {
    const thisSearch = this;

    for (let songData of thisSearch.data) {
      let songAuthorTitle = (songData['author'] + ' ' + songData['title']);
      let ask = thisSearch.input.value;

      if (songAuthorTitle.toLowerCase().includes(ask.toLowerCase()) && ask != '') {
        let songIdSelector = '#'+songData.filename.replace('.', '\\.');
        let songSelected = thisSearch.wrapper.querySelector(songIdSelector);
        // console.log(songSelected);
        // console.log('match');
        songSelected.classList.remove(classNames.search.notFound);
      }
    }
  }
}

export default Search;

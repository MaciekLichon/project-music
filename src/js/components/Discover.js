import Song from './Song.js';

class Discover {
  constructor(data, element) {
    const thisDiscover = this;

    thisDiscover.data = data;
    thisDiscover.wrapper = element;

    thisDiscover.renderAudio(element);
  }

  renderAudio() {
    const thisDiscover = this;

    thisDiscover.randomSong = new Song(thisDiscover.data, thisDiscover.wrapper);
  }
}

export default Discover;

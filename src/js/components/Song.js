import {templates} from '../settings.js';

class Song {
  constructor(data, wrapper) {
    const thisSong = this;

    thisSong.data = data;
    thisSong.wrapper = wrapper;

    thisSong.renderSong();

    // GreenAudioPlayer.init({
    //   selector: select.containerOf.audioPlayer, // inits Green Audio Player on each audio container that has class "player"
    //   stopOthersOnPlay: true
    // });
  }

  renderSong() {
    const thisSong = this;

    const generatedHTML = templates.song(thisSong.data);

    // thisSong.wrapper = document.querySelector(select.containerOf.homeAudio);
    thisSong.wrapper.innerHTML += generatedHTML;
  }
}

export default Song;

import {observable, action} from 'mobx';
import ReactDOM from 'react-dom';

class MusicPlayerControllerStore {
  audioComponent = null;
  @observable position = 0;

  @action rollCheckPosition = () => {
    setTimeout(this.rollCheckPosition, 1000);
    if (this.audioComponent){
      this.position = this.audioComponent.state.currentPlaylistPos;
    }
  };

  @action nextSong = () => {
    if(this.audioComponent) {
      ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-skip-to-next'));
    }
  };

  @action previousSong = () => {
    if(this.audioComponent) {
      ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-skip-to-previous'));
    }
  };

  @action play = () => {
    if(this.audioComponent) {
      ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-play'));
    }
  };

  @action pause = () => {
    if(this.audioComponent) {
      ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-pause'));
    }
  };
}

export default new MusicPlayerControllerStore();
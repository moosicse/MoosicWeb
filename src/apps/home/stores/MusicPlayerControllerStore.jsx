import {observable, action} from 'mobx';
import ReactDOM from 'react-dom';

class MusicPlayerControllerStore {
  @observable audioComponent = null;

  @action nextSong = () => {
    if(this.audioComponent) {
      ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-skip-to-next'));
    }
  }
}

export default new MusicPlayerControllerStore();
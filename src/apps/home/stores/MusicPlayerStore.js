import {observable, action} from 'mobx';
import FetchProvider from '../../../shared/RequestProvider';
import MusicPlayerControllerStore from './MusicPlayerControllerStore';


class MusicPlayerStore {
  @observable loading = true;
  @observable currentPlayList = [];

  resolveList = (li) => {
    const res = [];
    for (const i of li) {
      i.src = i.file;
      i.img = i.cover;
      res.push(i)
    }
    return res;
  };

  @action fetchLuckySong = () => {
    this.loading = false;
    return FetchProvider.get('/api/song/lucky/')
      .then(res => {
        this.currentPlayList = this.resolveList(res.data);
        this.loading = true;
      })
  };

  @action playSpecificSong = (song) => {
    MusicPlayerControllerStore.pause();
    this.currentPlayList = this.resolveList([song]);
    setTimeout(() => {
      MusicPlayerControllerStore.nextSong();
    }, 500);
    setTimeout(() => {
      MusicPlayerControllerStore.play();
    }, 800);

  }
}

export default new MusicPlayerStore();

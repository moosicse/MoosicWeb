import {message} from 'antd';
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

  @action loadPlaylist = (playlist) => {
    if (playlist && playlist.length === 0){
      message.warning('歌单中无歌曲');
      return
    }
    MusicPlayerControllerStore.pause();
    this.currentPlayList = this.resolveList(playlist);
    setTimeout(() => {
      MusicPlayerControllerStore.nextSong();
    }, 150);
    setTimeout(() => {
      MusicPlayerControllerStore.play();
    }, 300);
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

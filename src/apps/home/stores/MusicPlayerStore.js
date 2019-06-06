import {message} from 'antd';
import {observable, action} from 'mobx';
import FetchProvider from '../../../shared/RequestProvider';
import MusicPlayerControllerStore from './MusicPlayerControllerStore';


class MusicPlayerStore {
  @observable loading = true;
  @observable currentPlayList = [];
  @observable currentSong = this.currentPlayList[MusicPlayerControllerStore.position];

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
    this.startNewSong();
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
    this.startNewSong();
  };

  @action startNewSong = () => {
    setTimeout(() => {
      MusicPlayerControllerStore.nextSong();
    }, 100);
    setTimeout(() => {
      MusicPlayerControllerStore.previousSong();
    }, 110);
    setTimeout(() => {
      MusicPlayerControllerStore.play();
    }, 200);
  }
}

export default new MusicPlayerStore();

import {observable, action} from 'mobx';
import FetchProvider from '../../../shared/RequestProvider';


class MusicPlayerStore{
  @observable loading = true;
  @observable currentSong = {};

  @action fetchLuckySong = () => {
    this.loading = false;
    return FetchProvider.get('/api/song/lucky/')
      .then(res => {
        this.currentSong = res.data;
        this.loading = true;
      })
  }
}

export default new MusicPlayerStore();

import {observable, action} from 'mobx';
import FetchProvider from '../../../shared/RequestProvider';


class MusicPlayerStore{
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
  }
}

export default new MusicPlayerStore();

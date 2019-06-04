import {action, observable} from 'mobx';
import FetchProvider from '../../../shared/RequestProvider';

class SearchMusicStore {
  @observable visible = false;
  @observable loading = false;

  @observable searchResult = [];

  @action open = () => {
    this.visible = true;
  };

  @action close = () => {
    this.visible = false;
  };

  @action searchMusic = (query) => {
    this.loading = true;
    const params = {query};
    return FetchProvider.get('/api/song/search/', {params})
      .then(res => {
        this.searchResult = res.data;
        this.loading = false;
      })
  };
}

export default new SearchMusicStore();
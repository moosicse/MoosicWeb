import {action, observable} from 'mobx';
import FetchProvider from '../../../shared/RequestProvider';
import React from 'react';

class AlbumStore {
  @observable visible = false;
  @observable loading = false;

  @observable playlists = [];

  @action open = () => {
    this.close();
    setTimeout(() => {
      this.visible = true;
    }, 10);
  };

  @action close = () => {
    this.visible = false;
  };

  @action showPlaylist = () => {
    this.open();
    this.fetchPlaylist();
  };

  @action fetchPlaylist = () => {
    this.loading = true;
    return FetchProvider.get('/api/playlist/')
      .then(res => {
        this.playlists = res.data;
        this.loading = false;
      });
  };

  @action createPlaylist = (name) => {
    this.loading = true;
    return FetchProvider.post('/api/playlist/', {name})
      .then(res => {
        this.fetchPlaylist();
      });
  };

  @action removePlaylist = (playlist_id) => {
    this.loading = true;
    return FetchProvider.delete(`/api/playlist/${playlist_id}/`)
      .then(res => {
        this.fetchPlaylist();
      });
  };
}

export default new AlbumStore();
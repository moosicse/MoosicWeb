import {action, observable} from 'mobx';
import FetchProvider from '../../../shared/RequestProvider';
import React from 'react';

class AlbumStore {
  @observable visible = false;
  @observable loading = false;

  @observable singerInfo = {};
  @observable singerSongs = [];

  @action open = () => {
    this.close();
    setTimeout(() => {
      this.visible = true;
    }, 10);
  };

  @action close = () => {
    this.visible = false;
  };

  @action showAlbum = (album_id) => {
    this.open();
    this.fetchAlbum(album_id);
    this.fetchAlbumSong(album_id);
  };

  @action fetchAlbumSong = (album_id) => {
    this.loading = true;
    return FetchProvider.get(`/api/album/${album_id}/songs/`)
      .then(res => {
        this.singerSongs = res.data;
        this.loading = false;
      })
  };

  @action fetchAlbum = (album_id) => {
    this.loading = true;
    return FetchProvider.get(`/api/album/${album_id}/`)
      .then(res => {
        this.singerInfo = res.data;
        this.loading = false;
      })
  };

  @action getAlbumLink = (album) => {
    if (album){
      return (<a href="#" onClick={() => this.showAlbum(album.id)}>{album.name}</a>)
    }
    return <p>暂无信息</p>
  };
}

export default new AlbumStore();
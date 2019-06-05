import {action, observable} from 'mobx';
import FetchProvider from '../../../shared/RequestProvider';
import React from 'react';

class SingerStore {
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

  @action showArtist = (artist_id) => {
    this.open();
    this.fetchArtist(artist_id);
    this.fetchArtistSong(artist_id);
  };

  @action fetchArtistSong = (artist_id) => {
    this.loading = true;
    return FetchProvider.get(`/api/singer/${artist_id}/songs/`)
      .then(res => {
        this.singerSongs = res.data;
        this.loading = false;
      })
  };

  @action fetchArtist = (artist_id) => {
    this.loading = true;
    return FetchProvider.get(`/api/singer/${artist_id}/`)
      .then(res => {
        this.singerInfo = res.data;
        this.loading = false;
      })
  };

  @action getSingerLink = (singer) => {
    if (singer){
      return (<a onClick={() => this.showArtist(singer.id)}>{singer.name}</a>)
    }
    return <a>暂无信息</a>
  };
}

export default new SingerStore();
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

  @action showSinger = (singer_id) => {
    this.open();
    this.fetchSinger(singer_id);
    this.fetchSingerSong(singer_id);
  };

  @action fetchSingerSong = (singer_id) => {
    this.loading = true;
    return FetchProvider.get(`/api/singer/${singer_id}/songs/`)
      .then(res => {
        this.singerSongs = res.data;
        this.loading = false;
      })
  };

  @action fetchSinger = (singer_id) => {
    this.loading = true;
    return FetchProvider.get(`/api/singer/${singer_id}/`)
      .then(res => {
        this.singerInfo = res.data;
        this.loading = false;
      })
  };

  @action getSingerLink = (singer) => {
    if (singer){
      return (<a href="#" onClick={() => this.showSinger(singer.id)}>{singer.name}</a>)
    }
    return <a>暂无信息</a>
  };
}

export default new SingerStore();
import React from 'react';
import {observable, action} from 'mobx';
import FetchProvider from '../../../shared/RequestProvider';
import MusicPlayerStore from '../../home/stores/MusicPlayerStore';

class MotionDetectStore {
  @observable loading = false;

  @action getMotionList = (motion) => {
    this.loading = true;
    return FetchProvider.get(`/api/playlist/motion/?motion=${motion}`)
      .then(res => {
        if (res.data.length > 0)
          MusicPlayerStore.loadPlaylist(res.data);
        this.loading = false;
      });
  }
}

export default new MotionDetectStore();
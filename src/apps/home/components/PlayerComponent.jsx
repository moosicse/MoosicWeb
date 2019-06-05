import React from 'react';
import {Col, Row, Divider, Tag} from 'antd';
import {observer} from 'mobx-react';
import Audio from 'react-audioplayer';

import MusicPlayerStore from '../stores/MusicPlayerStore';

import '../style/Player.less';
import MusicPlayerControllerStore from '../stores/MusicPlayerControllerStore';
import SingerStore from '../../funcs/stores/SingerStore';
import AlbumStore from '../../funcs/stores/AlbumStore';


@observer
class PlayerComponent extends React.Component {
  componentWillMount = () => {
    MusicPlayerStore.fetchLuckySong();
    MusicPlayerControllerStore.rollCheckPosition();
  };

  refreshLucky = () => {
    MusicPlayerStore.fetchLuckySong(this)
      .then(() => {
        MusicPlayerControllerStore.nextSong();
      });
  };

  render() {
    const {currentPlayList} = MusicPlayerStore;
    const {position} = MusicPlayerControllerStore;

    return (
      <Row className='music-player'>
        <Col lg={24}>
          <div className='music-player-main'>
            {
              currentPlayList[0] && document.getElementsByClassName("music-player")[0] &&
              <Audio
                width={document.getElementsByClassName("music-player")[0].offsetWidth}
                height={500}
                autoPlay={false}
                fullPlayer={true}
                playlist={MusicPlayerStore.currentPlayList}
                ref={audioComponent => { MusicPlayerControllerStore.audioComponent = audioComponent; }}
              />
            }
          </div>
        </Col>
        {
          currentPlayList[position] &&
          <Col className='music-info' lg={24}>
            <h1 className='music-player-title'>{currentPlayList[position].name}</h1>
            <Divider />
            歌手：{currentPlayList[position] && SingerStore.getSingerLink(currentPlayList[position].singer)}
            <Divider type='vertical'/>
            专辑：{currentPlayList[position] && AlbumStore.getAlbumLink(currentPlayList[position].album)}
            <Divider type='vertical'/>
            <Tag color='blue' onClick={this.refreshLucky}>Lucky</Tag>
          </Col>
        }
      </Row>
    );
  }
}

export default PlayerComponent;

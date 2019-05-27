import React from 'react';
import {Col, Row, Divider} from 'antd';
import {observer} from 'mobx-react';
import Audio from 'react-audioplayer';

import MusicPlayerStore from '../stores/MusicPlayerStore';

import '../style/Player.less';


@observer
class PlayerComponent extends React.Component {
  componentWillMount = () => {
    MusicPlayerStore.fetchLuckySong();
  };

  render() {
    const {currentPlayList} = MusicPlayerStore;

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
              />
            }
          </div>
        </Col>
        {
          currentPlayList[0] &&
          <Col className='music-info' lg={24}>
            <h1 className='music-player-title'>{currentPlayList[0].name}</h1>
            <Divider />
            歌手：{currentPlayList[0].singer} | 专辑：{currentPlayList[0].album}
          </Col>
        }
      </Row>
    );
  }
}

export default PlayerComponent;

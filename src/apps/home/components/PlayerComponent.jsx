import React from 'react';
import {Col, Row, Divider} from 'antd';
import {observer} from 'mobx-react';

import MusicPlayerStore from '../stores/MusicPlayerStore';

import '../style/Player.less';


@observer
class PlayerComponent extends React.Component {
  componentDidMount = () => {
    MusicPlayerStore.fetchLuckySong();
  };

  render() {
    const {currentSong} = MusicPlayerStore;

    return (
      <Row className='music-player'>
        <Col lg={24}>
          <div className='music-player-cover'>
            <img className='cover-image' src={currentSong.cover} alt=''/>
          </div>
        </Col>
        <Col className='music-info' lg={24}>
          <h1 className='music-player-title'>{currentSong.name}</h1>
          <Divider />
          歌手：{currentSong.singer} | 专辑：{currentSong.album}
        </Col>
      </Row>
    );
  }
}

export default PlayerComponent;

import React from 'react';
import {List} from 'antd';
import {observer} from 'mobx-react';

import PlaylistStore from '../stores/PlaylistStore';
import SingerStore from '../stores/SingerStore';
import AlbumStore from '../stores/AlbumStore';

import '../styles/CurrentSongList.less';
import MusicPlayerStore from '../../home/stores/MusicPlayerStore';
import MusicPlayerControllerStore from '../../home/stores/MusicPlayerControllerStore';


@observer
class CurrentSongListComponent extends React.Component {
  render() {
    const {dataSource} = this.props;
    const currentSong = dataSource[MusicPlayerControllerStore.position];
    return (
      <List
        loading={PlaylistStore.loading}
        itemLayout="horizontal"
        dataSource={dataSource}
        renderItem={song => (
          <List.Item actions={[
            SingerStore.getSingerLink(song.singer),
            AlbumStore.getAlbumLink(song.album),
          ]}>
            <List.Item.Meta
              title={<div className={currentSong && song.id === currentSong.id ? 'current-playing' : ''}>{song.name}</div>}
            />
          </List.Item>
        )}
      />
    );
  }
}

export default CurrentSongListComponent;
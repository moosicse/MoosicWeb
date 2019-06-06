import React from 'react';
import {observer} from 'mobx-react';
import PlaylistStore from '../stores/PlaylistStore';
import {List} from 'antd';


@observer
class MusicResultTablePopover extends React.Component {
  render() {
    const {playlists} = PlaylistStore;
    const {song} = this.props;

    return (
      <List
        dataSource={playlists}
        renderItem={item => {
          return (
            <List.Item>
              <a href="#" onClick={() => PlaylistStore.addSong(item.id, song.id)}>{item.name}</a>
            </List.Item>
          );
        }}
      />
    );
  }
}

export default MusicResultTablePopover;
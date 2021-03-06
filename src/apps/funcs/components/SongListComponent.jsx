import React from 'react';
import PlaylistStore from '../stores/PlaylistStore';
import {List, Tag} from 'antd';
import SingerStore from '../stores/SingerStore';
import AlbumStore from '../stores/AlbumStore';
import {observer} from 'mobx-react';


@observer
class SongListComponent extends React.Component {
  render() {
    const {playlist} = this.props;
    return (
      <List
        loading={PlaylistStore.loading}
        itemLayout="horizontal"
        dataSource={playlist.songs}
        renderItem={song => (
          <List.Item actions={[
            SingerStore.getSingerLink(song.singer),
            AlbumStore.getAlbumLink(song.album),
            <Tag color='red' key='remove' onClick={() => PlaylistStore.removeSong(playlist.id, song.id)}>
              删除
            </Tag>,
          ]}>
            <List.Item.Meta title={song.name} />
          </List.Item>
        )}
      />
    );
  }
}

export default SongListComponent;
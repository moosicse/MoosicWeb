import React from 'react';
import PlaylistStore from '../stores/PlaylistStore';
import {List} from 'antd';
import SingerStore from '../stores/SingerStore';
import AlbumStore from '../stores/AlbumStore';
import {observer} from 'mobx-react';


@observer
class SongListComponent extends React.Component {
  render() {
    const {dataSource} = this.props;
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
            <List.Item.Meta title={song.name} />
          </List.Item>
        )}
      />
    );
  }
}

export default SongListComponent;
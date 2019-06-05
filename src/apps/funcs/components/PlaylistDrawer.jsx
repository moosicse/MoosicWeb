import React from 'react';
import {Drawer, Spin} from 'antd';
import PlaylistStore from '../stores/PlaylistStore';
import {observer} from 'mobx-react';
import PlaylistTable from './PlaylistTable';
import CreatePlaylistPopover from './CreatePlaylistPopover';


@observer
class PlaylistDrawer extends React.Component {
  render() {
    return (
      <Drawer
        title="我的播放列表"
        placement="right"
        width={600}
        closable={false}
        onClose={PlaylistStore.close}
        visible={PlaylistStore.visible}
      >
        <CreatePlaylistPopover />
        <br/><br/>
        <Spin spinning={PlaylistStore.loading}>
          <PlaylistTable dataSource={PlaylistStore.playlists} />
        </Spin>
      </Drawer>
    );
  }
}

export default PlaylistDrawer;
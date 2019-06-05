import React from 'react';
import {observer} from 'mobx-react';
import {Drawer, Spin} from 'antd';
import MusicResultTable from './MusicResultTable';
import AlbumStore from '../stores/AlbumStore';


@observer
class AlbumDrawer extends React.Component {
  render() {
    return (
      <Drawer
        title="专辑详情"
        placement="right"
        width={700}
        closable={false}
        onClose={AlbumStore.close}
        visible={AlbumStore.visible}
      >
        <h1>专辑：{AlbumStore.singerInfo.name}</h1>
        <Spin spinning={AlbumStore.loading}>
          <MusicResultTable dataSource={AlbumStore.singerSongs}/>
        </Spin>
      </Drawer>
    );
  }
}

export default AlbumDrawer;
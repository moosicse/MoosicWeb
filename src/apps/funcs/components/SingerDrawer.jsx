import React from 'react';
import {observer} from 'mobx-react';
import {Drawer, Spin} from 'antd';
import MusicResultTable from './MusicResultTable';
import SingerStore from '../stores/SingerStore';


@observer
class SingerDrawer extends React.Component {
  render() {
    return (
      <Drawer
        title="歌手详情"
        placement="right"
        width={700}
        closable={false}
        onClose={SingerStore.close}
        visible={SingerStore.visible}
      >
        <h1>歌手：{SingerStore.singerInfo.name}</h1>
        <Spin spinning={SingerStore.loading}>
          <MusicResultTable dataSource={SingerStore.singerSongs}/>
        </Spin>
      </Drawer>
    );
  }
}

export default SingerDrawer;
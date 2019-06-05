import React from 'react';
import {Divider, Table, Tag} from 'antd';
import {observer} from 'mobx-react';
import MusicPlayerStore from '../../home/stores/MusicPlayerStore';
import SingerStore from '../stores/SingerStore';

import '../styles/MusicResultTable.less';
import AlbumStore from '../stores/AlbumStore';

const columns = [{
  title: '歌名',
  width: 180,
  dataIndex: 'name',
}, {
  title: '歌手',
  width: 100,
  render: song => {
    const {singer} = song;
    return SingerStore.getSingerLink(singer);
  }
}, {
  title: '专辑',
  width: 100,
  render: song => {
    const {album} = song;
    return AlbumStore.getAlbumLink(album);
  }
}, {
  title: '流派',
  width: 100,
  key: 'tags',
  dataIndex: 'tags',
}, {
  title: '操作',
  key: 'action',
  render: song => {
    return (
      <span>
      <Tag color='green' key='play' onClick={() => {
        MusicPlayerStore.playSpecificSong(song)
      }}>
        播放
      </Tag>
      <Divider type="vertical"/>
      <Tag color='blue' key='add' onClick={() => {
        MusicPlayerStore.playSpecificSong(song)
      }}>
        添加到歌单
      </Tag>
    </span>
    )
  },
}];


@observer
class MusicResultTable extends React.Component {
  render() {
    const {dataSource} = this.props;

    return (
      <Table
        className='search-music-table'
        rowKey={item => item.id}
        size='small'
        footer={null}
        pagination={false}
        columns={columns}
        dataSource={dataSource}
      />
    );
  }
}

export default MusicResultTable;
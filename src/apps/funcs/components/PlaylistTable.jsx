import React from 'react';
import {Divider, Table, Tag} from 'antd';
import {observer} from 'mobx-react';

import '../styles/MusicResultTable.less';
import AlbumStore from '../stores/AlbumStore';
import SongListPopover from './SongListPopover';
import PlaylistStore from '../stores/PlaylistStore';
import MusicPlayerStore from '../../home/stores/MusicPlayerStore';

const columns = [{
  title: '歌单名',
  width: 200,
  dataIndex: 'name',
}, {
  title: '歌曲列表',
  width: 130,
  render: playlist => {
    const {songs} = playlist;
    return (
      <SongListPopover
        buttonLabel='歌单歌曲'
        dataSource={songs}
        loading={PlaylistStore.loading}
      />
    )
  },
}, {
  title: '操作',
  render: playlist => {
    const {songs, id} = playlist;
    return (<div>
      <Tag color='green' key='play' onClick={() => {
        MusicPlayerStore.loadPlaylist(songs)
      }}>
        播放
      </Tag>
      <Divider type='vertical'/>
      <Tag color='red' key='delete' onClick={() => {
        PlaylistStore.removePlaylist(id)
      }}>
        删除
      </Tag>
    </div>);
  },
}];


@observer
class PlaylistTable extends React.Component {
  render() {
    const {dataSource} = this.props;

    return (
      <Table
        className='playlist-table'
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

export default PlaylistTable;
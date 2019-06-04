import React from 'react';
import {Divider, Table, Tag} from 'antd';
import {observer} from 'mobx-react';
import SearchMusicStore from '../stores/SearchMusicStore';
import MusicPlayerStore from '../../home/stores/MusicPlayerStore';

const columns = [
  {
    title: '歌名',
    width: 150,
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '歌手',
    width: 150,
    dataIndex: 'singer',
    key: 'singer',
  },
  {
    title: '专辑名',
    width: 150,
    dataIndex: 'album',
    key: 'album',
  },
  {
    title: '流派',
    width: 300,
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: '操作',
    key: 'action',
    render: (song) => (
      <span>
        <Tag color='green' key='play' onClick={() => {MusicPlayerStore.playSpecificSong(song)}}>
          播放
        </Tag>
        <Divider type="vertical"/>
        <a href="#">添加到歌单</a>
      </span>
    ),
  },
];


@observer
class SearchMusicResultTable extends React.Component {
  render() {
    return (
      <Table
        className='search-music-table'
        rowKey={item => item.id}
        size='small'
        footer={null}
        pagination={false}
        columns={columns}
        dataSource={SearchMusicStore.searchResult}
      />
    );
  }
}

export default SearchMusicResultTable;
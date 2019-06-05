import React from 'react';
import {Drawer, Input, Spin} from 'antd';
import {observer} from 'mobx-react';
import SearchMusicStore from '../stores/SearchMusicStore';
import MusicResultTable from './MusicResultTable';

import '../styles/SearchMusic.less';

const Search = Input.Search;


@observer
class SearchMusicDrawer extends React.Component {
  render() {
    return (
      <Drawer
        title="搜索歌曲"
        placement="right"
        width={800}
        closable={false}
        onClose={SearchMusicStore.close}
        visible={SearchMusicStore.visible}
      >
        <Search
          placeholder="歌名/歌手名"
          onSearch={value => SearchMusicStore.searchMusic(value)}
          enterButton
        />
        <Spin spinning={SearchMusicStore.loading}>
          <MusicResultTable dataSource={SearchMusicStore.searchResult}/>
        </Spin>
      </Drawer>
    );
  }
}

export default SearchMusicDrawer;
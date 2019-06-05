import React from 'react';
import {Layout} from 'antd';
import AppSider from './Sider';

import './style/Layout.less';
import AppRouter from '../Router/Router';
import SearchMusicDrawer from '../apps/funcs/components/SearchMusicDrawer';
import SingerDrawer from '../apps/funcs/components/SingerDrawer';
import AlbumDrawer from '../apps/funcs/components/AlbumDrawer';
import PlaylistDrawer from '../apps/funcs/components/PlaylistDrawer';

const {Content, Footer} = Layout;

class AppLayout extends React.Component {
  render() {
    return (
      <Layout className="app-layout">
        <Layout>
          <Content className="content">
            <div className="content-div">
              <AppRouter/>
            </div>
            <div className='drawers'>
              <SearchMusicDrawer/>
              <SingerDrawer/>
              <AlbumDrawer/>
              <PlaylistDrawer/>
            </div>
          </Content>
          <AppSider className="sider"/>
        </Layout>
        <Footer className="footer">
          Moosic
        </Footer>
      </Layout>
    );
  }
}

export default AppLayout;

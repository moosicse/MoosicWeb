import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {Layout, Menu, Icon, Popover} from 'antd';
import {observer} from 'mobx-react';

import AuthStore from '../apps/auth/stores/AuthStore';
import UserInfoComponent from '../apps/funcs/components/UserInfoComponent';
import SearchMusicStore from '../apps/funcs/stores/SearchMusicStore';
import PlaylistStore from '../apps/funcs/stores/PlaylistStore';
import MusicPlayerStore from '../apps/home/stores/MusicPlayerStore';
import CurrentSongListComponent from '../apps/funcs/components/CurrentSongListComponent';

import './style/Sider.less';


@observer
class AppSider extends React.Component {
  getSelectKey = () => {
    const li = this.props.location.pathname.split('/');
    if (li.length > 0) {
      return `/${li[1]}`;
    } else {
      return '/';
    }
  };

  getAdminMenu = () => {
    return (
      <Menu.SubMenu
        key="admin"
        title={<span><Icon type="setting"/><span>管理页面</span></span>}
      >
        <Menu.Item key="news">
          <a href="/admin/news/news/" target="_blank">
            <span><Icon type="news"/><span>新闻</span></span>
          </a>
        </Menu.Item>
        <Menu.Item key="semester">
          <a href="/admin/semesters/semester/" target="_blank">
            <span><Icon type="bars"/><span>学期</span></span>
          </a>
        </Menu.Item>
        <Menu.Item key="major">
          <a href="/admin/majors/major/" target="_blank">
            <span><Icon type="book"/><span>专业</span></span>
          </a>
        </Menu.Item>
      </Menu.SubMenu>
    );
  };

  render() {
    return (
      <Layout.Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        collapsible
        collapsed={false}
        className="sider"
      >
        <div className="logo"/>
        <UserInfoComponent/>
        <Menu
          theme="dark" mode="inline"
          selectedKeys={[this.getSelectKey()]} defaultOpenKeys={['admin']}
        >
          <Menu.Item key="/home">
            <NavLink to="/home">
              <Icon type="play-circle"/>
              <span className="home-text">播放器</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/search" onClick={SearchMusicStore.open}>
            <Icon type="search"/>
            <span className="home-text">搜索歌曲</span>
          </Menu.Item>
          <Menu.Item key="/playlist" onClick={PlaylistStore.open}>
            <Icon type="menu"/>
            <span className="home-text">我的歌单</span>
          </Menu.Item>
          <Menu.Item key="/current-playlist">
            <Icon type="menu-unfold"/>
            <Popover
              content={
                <CurrentSongListComponent dataSource={MusicPlayerStore.currentPlayList}/>
              }
              title='当前播放列表'
              placement="left"
            >
              <span className="home-text">当前播放列表</span>
            </Popover>
          </Menu.Item>
          {
            AuthStore.profile.is_staff &&
            this.getAdminMenu()
          }
        </Menu>
      </Layout.Sider>
    );
  }
}

export default withRouter(AppSider);

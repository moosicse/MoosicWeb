import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
import {observer} from 'mobx-react';

import './style/Sider.less';
import AuthStore from '../apps/auth/stores/AuthStore';


const {Sider} = Layout;


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
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        collapsible
        collapsed={false}
        className="sider"
      >
        <div className="logo"/>
        <Menu
          theme="dark" mode="inline"
          selectedKeys={[this.getSelectKey()]} defaultOpenKeys={['admin']}
        >
          <Menu.Item key="/home">
            <NavLink to="/home">
              <Icon type="user"/>
              <span className="home-text">主页</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/info">
            <NavLink to="/info">
              <Icon type="info"/>
              <span className="home-text">修改信息</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/reservation">
            <NavLink to="/reservation">
              <Icon type="bank"/>
              <span className="home-text">活动室预约</span>
            </NavLink>
          </Menu.Item>
          {
            AuthStore.profile.is_staff &&
            this.getAdminMenu()
          }
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(AppSider);

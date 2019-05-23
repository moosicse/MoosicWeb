import React from 'react';
import {Layout} from 'antd';
import AppSider from './Sider';

import './style/Layout.less';
import AppHeader from './Header';
import AppRouter from '../Router/Router';

const {
  Content, Footer,
} = Layout;

class AppLayout extends React.Component {
  render() {
    return (
      <Layout className="app-layout">
        <AppHeader/>
        <Layout>
          <Content className="content">
            <div className="content-div">
              <AppRouter/>
            </div>
          </Content>
          <AppSider className="sider"/>
        </Layout>
        <Footer className="footer">
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default AppLayout;

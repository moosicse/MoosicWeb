import React from 'react';
import {Layout} from 'antd';
import AppSider from './Sider';

import './style/Layout.less';
import AppRouter from '../Router/Router';

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

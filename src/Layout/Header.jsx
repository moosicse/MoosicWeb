import React from 'react';
import {Button, Col, Divider, Layout, Row} from 'antd';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';

import './style/Header.less';
import AuthStore from '../apps/auth/stores/AuthStore';

const {
  Header
} = Layout;


@observer
class AppHeader extends React.Component {
  renderHeaderPanel = () => {
    if (AuthStore.profile && AuthStore.profile.auth) {
      return (<div>
        <span>欢迎你，{AuthStore.profile.user.username}</span>
        <Divider type="vertical"/>
        <span className="logout" onClick={AuthStore.logout}>Log out</span>
      </div>);
    }
    return (
      <Link to="/login">
        <Button type="primary">Login</Button>
      </Link>
    );
  };

  render() {
    return (
      <Header className="header">
        <Row>
          <Col xs={16}><h2>Moosic Music Player</h2></Col>
          <Col xs={8}>
            <div className="header-panel">
              {this.renderHeaderPanel()}
            </div>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default AppHeader;

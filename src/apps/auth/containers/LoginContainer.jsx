import React from 'react';
import AppLoginForm from '../components/LoginForm';

import '../styles/login.less';
import {Col, Row} from 'antd';

class LoginContainer extends React.Component {
  render() {
    return (
      <Row className="login-container">
        <Col span={8} push={8}>
          <AppLoginForm/>
        </Col>
      </Row>
    );
  }
}

export default LoginContainer;
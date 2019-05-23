import React from 'react';
import {Col, Row} from 'antd';

import '../style/Home.less';

class HomeContainer extends React.Component {
  render() {
    return (
      <Row className="home" gutter={20}>
        Welcome home
      </Row>
    );
  }
}

export default HomeContainer;
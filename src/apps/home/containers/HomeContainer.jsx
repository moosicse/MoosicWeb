import React from 'react';
import {Col, Row} from 'antd';

import '../style/Home.less';
import PlayerComponent from '../components/PlayerComponent';

class HomeContainer extends React.Component {
  render() {
    return (
      <Row className="home" gutter={20}>
        <Col sm={{span: 22, push: 1}}>
          <PlayerComponent />
        </Col>
      </Row>
    );
  }
}

export default HomeContainer;
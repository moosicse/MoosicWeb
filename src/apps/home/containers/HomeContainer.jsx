import React from 'react';
import {Col, Row} from 'antd';

import '../style/Home.less';
import PlayerComponent from '../components/PlayerComponent';

class HomeContainer extends React.Component {
  render() {
    return (
      <Row className="home" gutter={20}>
        <Col sm={{span: 18, push: 3}}>
          <PlayerComponent />
        </Col>
      </Row>
    );
  }
}

export default HomeContainer;
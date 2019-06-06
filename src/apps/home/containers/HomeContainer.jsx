import React from 'react';
import {observer} from 'mobx-react';
import {Col, Row} from 'antd';
import PlayerComponent from '../components/PlayerComponent';
import PlaylistStore from '../../funcs/stores/PlaylistStore';

import '../style/Home.less';


@observer
class HomeContainer extends React.Component {
  componentDidMount = () => {
    PlaylistStore.fetchPlaylist();
  };

  render() {
    return (
      <Row className="home" gutter={20}>
        <Col sm={{span: 24, push: 0}}>
          <PlayerComponent />
        </Col>
      </Row>
    );
  }
}

export default HomeContainer;
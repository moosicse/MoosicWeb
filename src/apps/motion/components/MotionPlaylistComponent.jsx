import React from 'react';
import {observer} from 'mobx-react';
import {Spin, Tag} from 'antd';
import MotionDetectStore from '../stores/MotionDetectStore';


@observer
class MotionPlaylistComponent extends React.Component {
  render() {
    return (
      <Spin spinning={MotionDetectStore.loading}>
        <Tag color='green' onClick={() => MotionDetectStore.getMotionList('joy')}>愉悦</Tag>
        <Tag color='darkblue' onClick={() => MotionDetectStore.getMotionList('sadness')}>悲伤</Tag>
        <Tag color='red' onClick={() => MotionDetectStore.getMotionList('anger')}>愤怒</Tag>
        <Tag color='yellow' onClick={() => MotionDetectStore.getMotionList('surprise')}>兴奋</Tag>
      </Spin>
    );
  }
}

export default MotionPlaylistComponent;
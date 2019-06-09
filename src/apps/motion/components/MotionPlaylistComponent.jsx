import React from 'react';
import Webcam from 'react-webcam';
import {observer} from 'mobx-react';
import {Divider, Icon, Tag} from 'antd';
import MotionDetectStore from '../stores/MotionDetectStore';


const videoConstraints = {
  width: 350,
  height: 350,
  facingMode: 'user',
};

@observer
class MotionPlaylistComponent extends React.Component {
  componentWillMount = async () => {
    await MotionDetectStore.loadModels();
  };

  render() {
    return (
      <div>
        <Tag color='green'>普通</Tag>
        {/*<Divider/>*/}
        {/*<Tag color='blue' onClick={MotionDetectStore.recognitionMotion}><Icon type="camera"/>拍照</Tag>*/}
        {/*<Webcam*/}
          {/*audio={false}*/}
          {/*ref={ref => {MotionDetectStore.webcam = ref}}*/}
          {/*screenshotFormat="image/jpeg"*/}
          {/*videoConstraints={videoConstraints}*/}
        {/*/>*/}
      </div>
    );
  }
}

export default MotionPlaylistComponent;
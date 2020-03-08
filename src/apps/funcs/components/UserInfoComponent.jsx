import React from 'react';
import {observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import AuthStore from '../../auth/stores/AuthStore';

import '../styles/SiderUserInfo.less';


@observer
class UserInfoComponent extends React.Component {
  render() {
    if (AuthStore.auth) {
      return (
        <div className='sider-user-info'>
          <p>欢迎，{AuthStore.profile.user.username} <span onClick={() => {
            AuthStore.logout().then(() => {this.props.history.push('/home')});
          }}>注销</span></p>
        </div>
      );
    }
    return (
      <div className='sider-user-info'>
        <p>您未登录</p>
      </div>
    );
  }
}

export default withRouter(UserInfoComponent);
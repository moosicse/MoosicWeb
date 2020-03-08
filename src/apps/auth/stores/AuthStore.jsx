import {observable, action} from 'mobx';
import {message} from 'antd';
import FetchProvider from '../../../shared/RequestProvider';

const defaultProfile = {};

class AuthStore {
  @observable loading = true;

  @observable auth = false;

  constructor() {
    this.fetchMyUserProfile();
  }

  @observable profile = defaultProfile;

  @action fetchMyUserProfile = () => {
    this.loading = true;
    FetchProvider.get('/api/account/profile/')
      .then(res => {
        this.profile = res.data;
        this.auth = true;
        this.loading = false;
        message.success(`欢迎回来，${this.profile.user.username}`);
      })
      .catch(res => {
        console.log(res);
        this.profile = defaultProfile;
      });
  };

  @action login = (username, password) => {
    this.loading = true;
    return FetchProvider.post('/api/account/login/', {
      username, password
    }).then(res => {
      this.profile = res.data;
      this.auth = true;
      this.loading = false;
      message.success(`登录成功，${this.profile.user.username}`);
    }).catch(res => {
      this.loading = false;
      message.error('学号或密码错误');
    });
  };

  @action logout = () => {
    return FetchProvider.post('/api/account/logout/')
      .then(res => {
        this.auth = false;
        this.profile = defaultProfile;
        message.success('再见');
      });
  };
}

export default new AuthStore();

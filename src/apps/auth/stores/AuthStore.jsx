import {observable, action} from 'mobx';
import {message} from 'antd';
import FetchProvider from '../../../shared/RequestProvider';

const defaultProfile = {
  auth: false,
  user: null,
  major: null,
  dormitary: null,
};

class AuthStore {
  @observable loading = true;

  constructor() {
    this.fetchMyUserProfile();
  }

  @observable profile = defaultProfile;

  @action fetchMyUserProfile = () => {
    this.loading = true;
    FetchProvider.get('/api/account/profile/')
      .then(res => {
        this.profile = res.data;
        this.profile.name = this.profile.user.username;
        this.profile.email = this.profile.user.email;
        this.loading = false;
        message.success(`欢迎回来，${this.profile.name}`);
      })
      .catch(res => {
        console.log(res);
        this.profile = defaultProfile;
      });
  };

  @action login = (username, password) => {
    this.loading = true;
    FetchProvider.post('/api/account/login/', {
      username, password
    }).then(res => {
      this.profile = res.data;
      this.profile.name = this.profile.user.username;
      this.profile.email = this.profile.user.email;
      this.loading = false;
      message.success(`登录成功，${this.profile.name}`);
    }).catch(res => {
      this.loading = false;
      message.error('学号或密码错误');
    });
  };

  @action logout = () => {
    FetchProvider.post('/api/account/logout/')
      .then(res => {
        this.profile = defaultProfile;
        message.success('再见');
      });
  };
}

export default new AuthStore();
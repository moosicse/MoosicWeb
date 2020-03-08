import React from 'react';
import {observer} from 'mobx-react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import AuthStore from '../stores/AuthStore';


@observer
class UnwrappedLoginForm extends React.Component {
  handleLogin = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        AuthStore.login(values.username, values.password)
          .then(() => {
            this.props.history.push('/home');
          });
      }
    });
  };

  render() {
    let {next} = this.props;
    next = next ? next : '/';

    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        {
          AuthStore.profile.auth && <Redirect to={next}/>
        }
        <Form onSubmit={this.handleLogin} className="login-form">
          <p className="title">登录账号</p>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{required: true, message: 'Please input your username!'}],
            })(
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            })(
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                     placeholder="Password"/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="/#">忘记密码</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to="/register">注册</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const AppLoginForm = Form.create({name: 'normal_login'})(UnwrappedLoginForm);
export default withRouter(AppLoginForm);

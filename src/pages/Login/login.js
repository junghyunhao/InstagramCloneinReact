import React, { Component } from 'react';
import './login.scss';
import logo from '../../images/login/logo_text.png';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      IDInput: '',
      passwordInput: '',
      ready: false,
    };
  }

  idChangeHandler = (e) => {
    this.setState({
      IDInput: e.target.value,
    });
  };

  passwordChangeHandler = (e) => {
    this.setState({
      passwordInput: e.target.value,
      ready: e.target.value.length > 5 && this.state.IDInput.includes('@') ? true : false,
    });
  };

  clickHandler = (e) => {
    e.preventDefault();
    fetch('http://10.58.63.94:8001/users/log-in', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        username: this.state.IDInput,
        password: this.state.passwordInput,
      }),
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem('access_token', res.token));
  };

  render() {
    return (
      <div className='Login'>
        <div className='whole-box'>
          <div className='container'>
            <div id='logo-holder'>
              <img src={logo} alt='instgram logo' />
            </div>
            <form id='login-form'>
              <div className='formcontainer'>
                <input
                  onChange={this.idChangeHandler}
                  type='text'
                  id='username-field'
                  className='login-form-field'
                  placeholder='전화번호, 사용자 이름 또는 이메일'
                />
                <input
                  onChange={this.passwordChangeHandler}
                  type='password'
                  id='passwsord-field'
                  className='login-form-field'
                  placeholder='비밀번호'
                />
                <button className={this.state.ready ? 'ready-to-submit' : 'not-ready-to-submit'} onClick={this.clickHandler}>
                  로그인
                </button>
              </div>
            </form>
            <div className='linkContainer'>
              <a className='forgotPW' href>
                비밀번호를 잊으셨나요?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);

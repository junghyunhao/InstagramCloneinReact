import React, { Component } from "react";
import './login.css';
import logo from '../../images/login/logo_text.png';


class Login extends Component {
    render() {
      return (
          <div>
        <div class="whole-box"> 
        <div className="container">
          <div id="logo-holder">
            <img src={logo} alt="instgram logo" />
          </div>
          <form id="login-form">
            <div className="formcontainer">
              <input type="text" id="username-field" className="login-form-field" placeholder="전화번호, 사용자 이름 또는 이메일"/>
              <input type="password" id="passwsord-field" className="login-form-field" placeholder="비밀번호"/>
              <input type="submit" value="로그인" id="login-form-submit" />
            </div>
          </form>
          <div className="linkContainer">
            <a className="forgotPW" href="#">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
      </div>
      ); 
     }
  }
  
  
  export default Login;
  
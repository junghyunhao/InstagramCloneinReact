import React, { Component } from "react";
import './login.scss';
import logo from '../../images/login/logo_text.png';
import { withRouter } from 'react-router-dom';


class Login extends Component {
  constructor() {
    super();

    this.state = {
      IDInput: "",
      passwordInput: "",
      ready: false
    }
  }

  idChangeHandler = e => {
    this.setState({
      IDInput: e.target.value
    })
  }

  passwordChangeHandler = e => {
    this.setState({
      passwordInput: e.target.value,
      ready: e.target.value.length > 5 && this.state.IDInput.includes("@") ? true : false
    })
  }

  clickHandler = e => {
    e.preventDefault();
    console.log("ID", this.state.IDInput)
    console.log("Password", this.state.passwordInput)
    // console.log(this.state.passwordInput.length&&this.state.IDInput.includes("@"))
  }

  goToSignUp () {
    this.props.history.push('/main')
  }

  render() {



    return (
      <div className="Login">
        <div className="whole-box">
          <div className="container">
            <div id="logo-holder">
              <img src={logo} alt="instgram logo" />
            </div>
            <form id="login-form">
              <div className="formcontainer">
                <input onChange={this.idChangeHandler} type="text" id="username-field" className="login-form-field" placeholder="전화번호, 사용자 이름 또는 이메일" />
                <input onChange={this.passwordChangeHandler} type="password" id="passwsord-field" className="login-form-field" placeholder="비밀번호" />
                <button className={this.state.ready ? "ready-to-submit" : "not-ready-to-submit"}  onClick={this.goToSignUp.bind(this)}
>로그인</button>
              </div>
            </form>
            <div className="linkContainer">
              <a className="forgotPW" href>비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Login);


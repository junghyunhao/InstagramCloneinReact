import React, { Component } from "react";
import './login.css';
import logo from '../../images/login/logo_text.png';

class Login extends Component {
  constructor () {
      super ();

      this.state = {
        IDInput : "",
        passwordInput : "",
        ready : false
      }
    }

      idChangeHandler = e => {
        this.setState({
          IDInput : e.target.value,
          ready : this.state.passwordInput.length>5 && e.target.value.includes("@") ? true : false
        })
      }

      passwordChangeHandler = e => {
        this.setState({
          passwordInput : e.target.value,
          ready : e.target.value.length>5 && this.state.IDInput.includes("@") ? true : false
        })
      }

      clickHandler = e => {
        e.preventDefault();
        console.log("ID", this.state.IDInput)
        console.log("Password", this.state.passwordInput)
        // console.log(this.state.passwordInput.length&&this.state.IDInput.includes("@"))
        }

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
              <input onChange = {this.idChangeHandler} type="text"  id="username-field" className="login-form-field" placeholder="전화번호, 사용자 이름 또는 이메일"/>
              <input onChange = {this.passwordChangeHandler} type="password" id="passwsord-field" className="login-form-field" placeholder="비밀번호"/>
              <input className= {this.state.ready ? "ready-to-submit" : "not-ready-to-submit"} onClick = {this.clickHandler} type="submit" value="로그인"/>
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
  
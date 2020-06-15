import React, { Component } from "react";
import '.././pages/Main/main.scss';
import logo from '../images/login/logo_text.png';

class Header extends Component {
    render() {
        return (
            <header className="header-container">
                <div className="nav-container">
                    <div className="left-nav">
                        <ul>
                            <li><a href="https://www.instagram.com/"><img className="insta-icon" src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" /></a></li>
                            <li><a href="https://www.instagram.com/"><img className="insta-logo" src={logo}/></a></li>
                        </ul>
                    </div>

                    <div className="search-bar">
                        <input type="text" id="search-bar-field" placeholder="검색" />
                    </div>

                    <div className="right-nav">
                        <ul>
                            <li><a href><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" /></a></li>
                            <li><a href><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" /></a></li>
                            <li><a href><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" /></a></li>
                        </ul>
                    </div>

                </div>
            </header>
            
        );
    }
}

export default Header;
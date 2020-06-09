import React, { Component } from "react";
import './main.css';
import logo from '../../images/login/logo_text.png';
import Header from "../.././components/Header.js";
import Feed from "../.././components/Feed.js"
// import gyumin from '../../images/'



class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <Feed />
            </>


        );
    }
}


export default Main;
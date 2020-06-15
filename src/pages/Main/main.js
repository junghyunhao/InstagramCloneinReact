import React, { Component } from "react";
import './main.scss';
import Header from "../.././components/Header.js";
import Feed from "../.././components/Feed.js";
import Rightfeed from  "../.././components/Rightfeed.js";




class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <main>
                <Feed />
                <Rightfeed />
                </main>
            </>


        );
    }
}


export default Main;
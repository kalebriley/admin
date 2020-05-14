import React, { Component } from "react";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Footer />
            </div>
        );
    }
}

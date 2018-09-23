import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from "../header/Header";
import Routes from "../routes/Routes";
import Footer from "../footer/Footer";

import {store} from "../../redux/store";

import './App.css'

class App extends Component {
  render() {
      return (
        <Provider store={store}>
            <HashRouter>
                <div>
                    <Header />
                    <Routes />
                    <Footer/>
                </div>
            </HashRouter>
        </Provider>
    );
  }
}

export default App;

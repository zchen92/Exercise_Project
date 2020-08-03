import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                <Nav />
                <h1>Landing Page</h1>
                <Footer />
            </div>
        );
    }
}


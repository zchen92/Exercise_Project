import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Nav extends Component {
    logout = () => {
        localStorage.clear();
    }
    render() {
        if(localStorage.token && localStorage.id) {
            return (
                <nav className='navbar nav navbar-expand-lg navbar-dark bg-light'>
                <Link className='navbar-brand' to='/'>
                    <h1 className='nav-logo'>Exercise</h1>
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/login'>
                                <button className='styled-btn' onClick={this.logout}>
                                    <span className='span'></span>
                                    <span className='span'></span>
                                    <span className='span'></span>
                                    <span className='span'></span>Logout
                                </button>
                            </Link>
                            <Link className='nav-link' to='/home'>
                                <button className='styled-btn'>
                                    <span className='span'></span>
                                    <span className='span'></span>
                                    <span className='span'></span>
                                    <span className='span'></span>Profile
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            )
        } else
        return (
            <nav className='navbar nav navbar-expand-lg navbar-dark bg-light'>
                <Link className='navbar-brand' to='/'>
                    <h1 className='nav-logo'>Kaizen</h1>
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/register'>
                                <button className='styled-btn'>
                                    <span className='span'></span>
                                    <span className='span'></span>
                                    <span className='span'></span>
                                    <span className='span'></span>Register
                                </button>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/login'>
                                <button className='styled-btn'>
                                    <span className='span'></span>
                                    <span className='span'></span>
                                    <span className='span'></span>
                                    <span className='span'></span>Login
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
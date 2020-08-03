import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Url from '../Url';
export default class Login extends Component {
    state = {
        currentUser: {},
        msg: '',
        username: '',
        password: '',
    };
    tryAgain = () => {
        this.setState({
            msg: ''
        })
        this.props.history.push('/login')
    }
    handleInput = event => {
        console.log(event.target.value)
        this.setState({
            [event.target.id]: event.target.value,
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        fetch(`http://localhost:3000/users/login`, {
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password,
                },
            }),
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json, text/plain, */*',
            },
        })
            .then(response => response.json())
            .then(response => {
                // localStorage.clear();
                localStorage.token = response.token;
                localStorage.setItem('id', response.user.id);
                console.log(localStorage, 'from login ')
                return this.setState({
                    currentUser: response.currentUser,
                    username: '',
                    password: '',
                });
            })
            .then(e => this.props.history.push('/home'))
            .catch(err =>
                this.setState({
                    msg: 'Incorrect username or password',
                }),
            );
    };
    render() {
        if (this.state.msg === '') {
            return (
                <div className='login'>
                    <Nav />
                    <div className='login-main'>
                        <h1 className='login-h1'>Login</h1>
                        <form onSubmit={this.handleSubmit} className='form-group login-form'>
                            <label htmlFor='username'>
                                <input
                                    className='form-control mx-sm-3 login-input'
                                    placeholder='Enter Username'
                                    type='text'
                                    name='username'
                                    id='username'
                                    required={true}
                                    onChange={this.handleInput}
                                />
                            </label>
                            <label htmlFor='password'>
                                <input
                                    className='form-control mx-sm-3 login-input'
                                    placeholder='Enter password'
                                    type='password'
                                    name='password'
                                    id='password'
                                    required={true}
                                    onChange={this.handleInput}
                                />
                            </label>
                            <button className='styled-btn login-btn' type='submit'>
                                Login
                                <span className='span'></span>
                                <span className='span'></span>
                                <span className='span'></span>
                                <span className='span'></span>
                            </button>
                        </form>
                    </div>
                    <Footer />
                </div>
            );
        } else {
            return (
                <div className='login'>
                    <Nav />
                    <div className='login-main'>
                        <h2 className='incorrect-h2'>Incorrect username or password</h2>
                        <button className='styled-btn try-again-btn' onClick={this.tryAgain}>Try again?</button>
                    </div>
                    <Footer />
                </div>
            );
        }
    }
}
import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Url from '../Url';
export default class Register extends Component {
    state = {
        username: '',
        password: '',
        err: '',
    };
    handleInput = event => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };
    handleSubmit = e => {
        // if(this.state.err === 'has already been taken'){
        //  this.setState({
        //      err: '',
        //      username: '',
        //      password: ''
        //  })
        // }
        e.preventDefault();
        console.log(this.state.err, 'from handle submit');
        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password,
                },
            }),
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data.username, 'from post req');
                console.log(data);
                if (data.username[0] === 'has already been taken') {
                    this.setState({
                        username: '',
                        password: '',
                        err: data.username[0],
                    });
                } else if (data.username[0] !== 'has already been taken') {
                    // window.location.reload()
                    console.log(data.username[0]);
                    this.setState({
                        err: '',
                    });
                    this.props.history.push('/login');
                }
            })
            .then(console.log(this.state, 'after data resp'))
            .catch(err => console.error(err, 'is error'));
    };
    render() {
        console.log(this.state.err, 'is the err from reg in state');
        console.log(this.state);
        return (
            <div className='login'>
                <Nav />
                <div className='login-main'>
                    <h1 className='login-h1'>Register</h1>
                    {this.state.err !== '' ? (
                        <div>
                            <h6 className='user-taken-h6'>{`Username ${this.state.err}`}</h6>
                            <form onSubmit={this.handleSubmit} className='form-group login-form'>
                                <label htmlFor='username'>
                                    <input
                                        className='form-control mx-sm-3 login-input'
                                        placeholder='Create username'
                                        type='username'
                                        name='username'
                                        id='username'
                                        onChange={this.handleInput}
                                    />
                                </label>
                                <label htmlFor='password'>
                                    <input
                                        className='form-control mx-sm-3 login-input'
                                        placeholder='Create password'
                                        type='password'
                                        name='password'
                                        id='password'
                                        onChange={this.handleInput}
                                    />
                                </label>
                                <button className='styled-btn login-btn' type='submit'>
                                    Register
                                    <span className='span'></span>
                                    <span className='span'></span>
                                    <span className='span'></span>
                                    <span className='span'></span>
                                </button>
                            </form>
                        </div>
                    ) : (
                        <form onSubmit={this.handleSubmit} className='form-group login-form'>
                            <label htmlFor='username'>
                                <input
                                    className='form-control mx-sm-3 login-input'
                                    placeholder='Create username'
                                    type='username'
                                    name='username'
                                    id='username'
                                    onChange={this.handleInput}
                                />
                            </label>
                            <label htmlFor='password'>
                                <input
                                    className='form-control mx-sm-3 login-input'
                                    placeholder='Create password'
                                    type='password'
                                    name='password'
                                    id='password'
                                    onChange={this.handleInput}
                                />
                            </label>
                            <button className='styled-btn login-btn' type='submit'>
                                Register
                                <span className='span'></span>
                                <span className='span'></span>
                                <span className='span'></span>
                                <span className='span'></span>
                            </button>
                        </form>
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}
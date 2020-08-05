import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Nav extends Component {
    logout = () => {
        localStorage.clear();
    }
    render() {
        if(localStorage.token && localStorage.id) {
            return (
                <nav className='container-fluid' className="card-header">
                {/* <img src="https://i.imgur.com/do73SsO.jpg" alt="exercise-image"></img> */}
                <div className='container-fluid'>
                    <ul className='nav justify-content-end'>
                        <li className='nav-item'>
                            <Link className="alert-link" to='/'>
                                <h1 className='display-6'>Swole Goals</h1>
                            </Link>
                            <Link className='nav-link active' to='/login'>
                                <button type="button" className='btn btn-outline-warning' onClick={this.logout}></button>
                            </Link>
                            <Link className='nav-link active' to='/home'>
                                <button type="button" className='btn btn-outline-warning'></button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            )
        } else
        return (
            <nav className="container-fluid" className="card-header">
                {/* <img src="https://i.imgur.com/do73SsO.jpg" alt="exercise-image" className="card-img-top"></img> */}
                {/* <Link className="alert-link" class="alert alert-info" to='/'>
                    <h1 className='display-6'>Swole Goals</h1>
                </Link> */}
                <div className='container-fluid'>
                    <ul className='nav justify-content-end'>
                        <li className='nav-item'>
                            <Link className="alert-link" to='/'>
                                <h1 className='display-6'>Swole Goals</h1>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link active' to='/register'>
                                <button type="button" className='btn btn-outline-warning'>Register</button>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link active' to='/login'>
                                <button type="button" className='btn btn-outline-warning'>Login</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}


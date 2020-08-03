import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer fixed-bottom'>
                <h5 className='footer-h5'>Created by: Zoe(Luting) Chen</h5>
                <div className='footer-icons'>
                <a id='github' href='https://github.com/zchen92' rel='noopener noreferrer' target='_blank'> <span> <i className='fa fa-github-square'></i></span></a>
                <a id='github' href='https://www.linkedin.com/in/luting-chen/' rel='noopener noreferrer' target='_blank'> <span> <i className='fa fa-linkedin'></i> </span></a>
                {/* <a id='github' href='https://www.mikebocon.com/' rel='noopener noreferrer' target='_blank'> <span> <i className='fa fa-globe'></i></span></a> */}
                </div>
            </div>
        );
    }
}
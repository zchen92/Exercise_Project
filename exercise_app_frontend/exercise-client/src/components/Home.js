import React, { Component } from 'react';
import Exercise from './Exercise.js';
import Url from '../Url';
import Nav from './Nav';
import Footer from './Footer'

class Home extends Component {

  render() {
    return (
      <div className="App">
        <Nav/>
        <Exercise/>
        <Footer/>
      </div>
    );
  }
}

export default Home;


//         <Exercise 
//           content={this.state.exercises} 
//           handleDelete={this.handleDelete} 
//           toggleEdit={this.toggleEdit} 
//           handleUpdate={this.handleUpdate} 
//           isEditing={this.state.isEditing} 
//           exerciseToEdit={this.state.exerciseToEdit} 
//           handleChange={this.state.handleChange}/>
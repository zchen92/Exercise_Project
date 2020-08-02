import React, { Component } from 'react';
import Exercise from './components/Exercise.js'
import './App.css';
import Url from './Url.js'

class App extends Component {

  state = {
    exercises: [],
    formInputs: {
      day: '',
      activity: ''
    },
    exerciseToEdit: {},
    isEditing: false
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    fetch(`${Url}`)
    .then(res => res.json())
    .then(jsonExercises => this.setState({exercises :jsonExercises}))
    .catch(error => console.error(error))
  }

  handleChange = (event) => {
    const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
    this.setState(updateInput)
  }

  handleSubmit  = (event) =>{
    console.log("this is my new day")
    event.preventDefault()
    fetch(`${Url}`, {
      body: JSON.stringify(this.state.formInputs),
      method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
    })
    .then(createdExercise => {
      return createdExercise.json()
    })
    .then(jsonedExercise => {
      this.setState({
        formInputs: {
          day: '',
          description: ''
        },
        exercises: [jsonedExercise, ...this.state.exercises]
      })
    })
    .catch(error => console.log(error))
    }

    handleDelete =(id, index) => {
      fetch(`${Url}/${id}`, {
          method: 'DELETE',
      }).then(() => {
          this.setState({
              days: [...this.state.exercises.slice(0, index), ...this.state.exercises.slice(index + 1)],
          });
          this.getData();
      });
    };

    toggleEdit=(diary) =>{
      this.setState({
          exerciseToEdit: exercise,
          isEditing: !this.state.isEditing
      })
    }

    handleUpdate(event, item) {
      event.preventDefault();
      fetch(`${Url}/${id}`, {
          body: JSON.stringify(item),
          method: 'PUT',
          headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
          },
      })
          .then(response => response.json())
          .then(updatedDiary => {
              window.location.reload()
          });
    }


  render() {
    return (
      <div className="App">
        <div>
          <h2>Set Up Tomorrow for Success!</h2>
          <form onSubmit={(event)=>this.handleSubmit()}>
              <label htmlFor="day">Day</label>
              <input type="text" id="day" value={this.state.formInputs.day} onChange={this.handleChange}/>
              <label htmlFor="description">Description</label>
              <input type="text" id="description" value={this.state.formInputs.description} onChange={this.handleChange}/>
              <input type="submit" className="submit" />
          </form>
        </div>
        <Exercise 
          content={this.state.exercises} 
          handleDelete={this.handleDelete} 
          toggleEdit={this.toggleEdit} 
          handleUpdate={this.handleUpdate} 
          isEditing={this.state.isEditing} 
          exerciseToEdit={this.state.exerciseToEdit} 
          handleChange={this.state.handleChange}/>
      </div>
    );
  }
}

export default App;

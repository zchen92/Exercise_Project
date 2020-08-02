import React, { Component } from 'react';
import Modal from './Modal.js'
import Url from '../Url.js'

class Exercise extends Component {

    state = {
        exercises:[],
        current:{},
        show: false,
        formInputs: {
            day: '',
            description: ''
        },
        day: '',
        description: ''
    }

    componentDidMount() {
        this.getExercises()
    }

    getData = () => {
        fetch(`${Url}`)
        .then(res => res.json())
        .then(jsonExercises=> this.setState({exercises :jsonExercises}))
        .catch(error => console.error(error))
    }

    getExercises = () =>{
        fetch(`${Url}`)
            .then(response => response.json())
            .then(json => this.setState({exercises: json}))
        .catch(error => console.error(error))
    }

    showModal = (event, exercise) => {
        localStorage.setItem("reloadPage",false)
        this.setState({
            current: exercise,
            show: !this.state.show
        });
    }

    checkLocalStorage = () => {
        if(localStorage.reloadPage === "true") {
            window.location.reload();
            localStorage.removeItem("reloadPage")
        }
    }

    handleDayChange = (event) => {
        this.props.exerciseToEdit.date =event.target.value
        this.setState({[event.target.id]:event.target.value})
    }

    handleDescriptionChange = (event) => {
        this.props.exerciseToEdit.date =event.target.value
        this.setState({[event.target.id]:event.target.value})
    }

    render() {
        console.log(localStorage)
        return(
            <div>
                {this.state.show === false ? 
                    <div>
                        {this.props.content.map((exercise,index) => {
                        if(this.props.isEditing) {
                            if(this.props.exerciseToEdit.id === exercise.id) {
                            return(
                                <div>
                                    <div>
                                        <h1>Edit My Day</h1>
                                        <form onSubmit={(event)=>this.props.handleUpdate(event, this.props.exerciseToEdit)}>
                                            <label htmlFor="day">Day</label>
                                            <input type="text" id="day" value={this.props.exerciseToEdit.exercise}onChange={this.handleDayChange}/>
                                            <label htmlFor="description">Description</label>
                                            <input type="text" id="description" value={this.props.exerciseToEdit.exercise} onChange={this.handleDescriptionChange}/>
                                            <input type="submit" className="submit" />
                                        </form>
                                    </div>)} else {
                                    <div>
                                        <h1>Let's Get Moving</h1>
                                        {this.state.exercises.length && this.state.exercises.map(exercise=>{
                                            return(
                                                <div key={exercise.id} className="exercise">
                                                    <h2>{exercise.day}</h2>
                                                    <p>{exercise.description}</p>
                                                    <button onClick={()=>this.props.handleDelete}>Delete Day</button>
                                                    <button onClick={()=>this.props.toggleEdit(exercise)}>Update Day</button>
                                                    <button onClick={(event)=>{this.showModal(event, exercise)}}>See This Day</button> 
                                                    {/* {localStorage.reloadPage==="true" ? this.checkLocalStorage(): "null"}  */}
                                                </div>  
                                            )
                                        })} 
                                    </div>
                                </div>
                            )}}}
                    </div> : 
                    <div>
                        {Object.keys(this.state.current).length && <Modal 
                        show={this.state.show} 
                        onClose={this.showModal} 
                        getExercises={this.getExercises}
                        checkLocalStorage={this.checkLocalStorage}
                        current={this.state.current}/>}
                    </div>
                }
            </div>
        )
    }
}

export default Exercise

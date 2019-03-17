import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { id: 'fsdf4', name:"Max" , age: 28},
      { id: 'dsv2', name:"Manu" , age: 29},
      { id: 'ws4', name:"Stephnaie" , age: 26}
    ],
    showPersons: false
  };
  
   nameChangedHandler = ( event, id ) => {
     const personIndex = this.state.persons.findIndex(p =>{
       return p.id === id;
     });
     const person ={  //making the copy of the old person
       ...this.state.persons[personIndex]
     };
     person.name = event.target.value;
     
     const persons = [...this.state.persons];
     persons[personIndex] = person;

     this.setState({persons: persons})
   }
   deletePersonHandler = (personIndex) => {
     const persons = this.state.persons;
     persons.splice(personIndex,1);
     this.setState({persons:persons}); 
   }
   
   togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }
  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor :'lightgreen',
        color:'black'
      }
    }; 
    let persons = null;
    if ( this.state.showPersons){
      persons = (
        <div >
          {this.state.persons.map( (person,index) =>{
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed ={(event) => this.nameChangedHandler(event,person.id)}/>
          })}
        </div>
      );
      style.backgroundColor='red';
     
    }
  //let classes = ['red','bold'].join(' ');//for getting "red bold"
    const classes =[];
    if(this.state.persons.length <=2){
      classes.push('red'); //calsses =['red]
    }
    if(this.state.persons.length<=1){
      classes.push('bold');//classes=['red','bold']
    }
    return (
    
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ' ) }>Hello is this working!</p>
          <button
          style={style}
          onClick={ this.togglePersonsHandler}>Toogle persons</button>
          {persons}
        </div>
    
       
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'I m here'));
  }
}

export default App;

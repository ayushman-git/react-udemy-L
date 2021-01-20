import "./App.css";
import React, { Component } from "react";
import Radium from "radium";

import Person from "./components/Person/Person";

class App extends Component {
  state = {
    person: [
      {
        id: "asdasda",
        name: "Ayushman",
        age: 22,
      },
      {
        id: "ASdwadsd",
        name: "XenOn",
        age: 21,
      },
      {
        id: "gawdsdasd",
        name: "Duoro",
        age: 20,
      },
    ],
    showPerson: false,
  };

  changeNameInput = (e, id) => {
    const personIndex = this.state.person.findIndex((el) => el.id === id);
    const persons = [...this.state.person];
    const person = {
      ...this.state.person[personIndex],
    };
    person.name = e.target.value;
    persons[personIndex] = person;
    console.log(persons);

    this.setState({ person: persons });
  };

  delete = (index) => {
    const person = [...this.state.person];
    person.splice(index, 1);
    this.setState({ person: person });
  };

  togglePerson = () => {
    this.setState({
      showPerson: !this.state.showPerson,
    });
  };

  render() {
    const style = {
      borderRadius: "7px",
      padding: "1em",
      backgroundColor: "green",
      color: "white",
      outline: "none",
      border: "none",
    };

    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.person.map((person, index) => {
            return (
              <Person
                key={person.id}
                title={person.name}
                click={() => this.delete(index)}
                change={(event) => this.changeNameInput(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    return (
      <div className={this.state.showPerson ? "AppPerson" : "App"}>
        <h1>Hello</h1>
        <button style={style} onClick={this.togglePerson}>
          Click
        </button>
        {person}
      </div>
    );
  }
}

export default Radium(App);

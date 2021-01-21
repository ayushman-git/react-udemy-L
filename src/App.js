import "./App.css";
import React, { Component } from "react";
import Radium from "radium";

import Persons from "./components/Person/Persons/Persons";
import Cockpit from "./components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js | Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("App.js | getDerivedStateFromProps");
    return state;
  }
  componentDidMount() {
    console.log("App.js | componentDidMount");
  }
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
    console.log("App.js | render");
    let person = null;
    if (this.state.showPerson) {
      person = (
        <Persons
          person={this.state.person}
          delete={this.delete}
          change={this.changeNameInput}
        />
      );
    }

    return (
      <div className={this.state.showPerson ? "AppPerson" : "App"}>
        <Cockpit
          title="Person List"
          showPerson={this.state.showPerson}
          togglePerson={this.togglePerson}
        />
        {person}
      </div>
    );
  }
}

export default Radium(App);

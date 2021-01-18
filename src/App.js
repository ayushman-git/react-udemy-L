import "./App.css";
import React, { Component } from "react";

import Person from "./components/Person/Person";

class App extends Component {
  state = {
    person: [
      {
        name: "Ayushman",
        age: 22,
      },
      {
        name: "XenOn",
        age: 21,
      },
      {
        name: "Duoro",
        age: 20,
      },
    ],
  };

  nameHandler = () => {
    this.setState({
      person: [
        {
          name: "Isaac",
          age: 22,
        },
        {
          name: "XenOn",
          age: 21,
        },
        {
          name: "Purge",
          age: 24,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <button onClick={this.nameHandler}>Click</button>
        <Person title={this.state.person[0].name} />
        <Person title={this.state.person[1].name} click={this.nameHandler}>
          Children prop
        </Person>
        <Person title={this.state.person[2].name} />
      </div>
    );
  }
}

//non-JSX syntax
// return React.createElement(
//   "div",
//   {
//     className: "App"
//   },
//   React.createElement("h2", null, "Using createElement")
// );

// function App() {
//   return (
//     <div className="App">
//      <h1>Hello</h1>
//     </div>
//   );
// }

export default App;

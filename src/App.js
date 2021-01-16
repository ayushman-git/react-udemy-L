import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "App"
      },
      React.createElement("h2", null, "Using createElement")
    );
    // return (
    //   <div className="App">
    //     <h1>Hello</h1>
    //   </div>
    // );
  }
}

// function App() {
//   return (
//     <div className="App">
//      <h1>Hello</h1>
//     </div>
//   );
// }

export default App;

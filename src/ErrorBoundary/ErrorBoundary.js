import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(err, info) {
    this.setState({ hasError: true });
    console.log(err, info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Error Occured</h1>;
    } else return this.props.children;
  }
}

export default ErrorBoundary;

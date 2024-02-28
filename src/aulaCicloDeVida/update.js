import React, { Component } from "react";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jessica",
    };
    console.log("constructor");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(" getDerivedFromProps");
    return null;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("componentDidCatch");
  }

  changeState = () => {
    this.setState({
      name: "Marcos",
    });
  };

  render() {
    console.log(" render");
    return (
      <div>
        <div> Update</div>
        <button onClick={this.changeState}>Atulizar</button>
      </div>
    );
  }
}

export default Update;

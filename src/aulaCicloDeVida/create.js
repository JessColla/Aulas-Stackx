import React, { Component } from "react";
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jessica",
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" getDerivedFromProps");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log(" render");
    return <div> create </div>;
  }
}
export default Create;

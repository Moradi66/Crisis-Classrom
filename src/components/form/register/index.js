import React, { Component } from "react";
import Form from "./form";

export default class RegisterIndex extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
    console.log(this.state.fields);
  };

  render() {
    return (
      <div className="App">
        <h1>Register</h1>
        <Form onChange={fields => this.onChange(fields)} />
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </div>
    );
  }
}

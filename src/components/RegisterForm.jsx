import React, { Component } from "react";

class RegisterForm extends Component {
  //state = { name: null, socket: this.props.socket };

  handleRegister = event => {
    event.preventDefault();
    let name = event.target.elements.input;
    console.log(name.value);
    this.props.onName({ name: name.value });
    this.props.socket.emit("register", name.value);
    //name.value = "";
  };

  render() {
    return (
      <form onSubmit={this.handleRegister} autoComplete="off">
        {"Поле ввода имени "}
        <input type="text" id="input" />
      </form>
    );
  }
}

export default RegisterForm;

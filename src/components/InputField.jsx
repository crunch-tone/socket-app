import React, { Component } from "react";

class InputField extends Component {
  //state = {
  //  input: "",
  //  socket: this.props.socket
  //};
  handleSubmit = event => {
    event.preventDefault();
    let input = event.target.elements.input;
    const d = new Date();
    let n = d.toLocaleTimeString();
    console.log(input.value);
    this.props.socket.emit("message", input.value);
    this.props.onMessage(input.value, n);
    input.value = "";
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        //value={this.state.input}
        autoComplete="off"
      >
        {"Поле ввода сообщения "}
        <input type="text" id="input" />
      </form>
    );
  }
}

export default InputField;

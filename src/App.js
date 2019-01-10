import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ChatRoom from "./components/ChatRoom";
import RegisterForm from "./components/RegisterForm";

/*import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3001");*/

const io = require("socket.io-client");
const host = window.location.hostname;
const socket = io.connect(`http://${host}:3001`);

/*socket.on("connect", function() {
  console.log("a user connected");
});*/
const name = "";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleName = this.handleName.bind(this);
    this.state = { name: name, socket: this.props.socket };
  }

  handleName(name) {
    this.setState(name);
  }

  render() {
    function ShowChat(props) {
      let name = props.name;
      return name ? (
        <ChatRoom socket={socket} />
      ) : (
        <RegisterForm onName={this.handleName} socket={socket} />
      );
    }

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Совсем скоро здесь будет чат</h1>
        <ShowChat name={this.state.name} />
      </div>
    );
  }
}

export default App;

//<ChatRoom socket={socket} />
//<RegisterForm onName={this.handleName} socket={socket} />

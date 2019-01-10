import React, { Component } from "react";

import InputField from "./InputField";
//import MessagesList from "./MessagesList";

const msgArr = [];

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
    this.state = { msgArr: msgArr, socket: this.props.socket };
  }

  handleMessage(message, time) {
    this.state.msgArr.push({
      key: this.state.msgArr.length + 1,
      message: message,
      time: time
    });
    this.setState({ msgArr });
  }

  render() {
    const messages = this.state.msgArr;
    const listItems = messages.map(({ key, message, time }) => (
      <li key={key}>
        {time}:{message}
      </li>
    ));
    return (
      <div>
        <InputField onMessage={this.handleMessage} socket={this.state.socket} />
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default ChatRoom;

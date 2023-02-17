import React, { useState } from "react";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import axios from "axios";

const ContainerChat = () => {
  const [newMessage, setNewMessage] = useState("");

  const botResponses = [
    { message: "hi", response: "hello" },
    { message: "hello", response: "hi" },
    { message: "good morning", response: "Good Morning! How may I help you?" },
  ];

  const sendMessage = (userMessage) => {
    var chatContainer = document.getElementById("chatContainer");
    var messageElement = document.createElement("div");
    messageElement.innerHTML = "You: " + userMessage;
    messageElement.style.textAlign = "right";
    chatContainer.appendChild(messageElement);
  };

  const botMessage = (userMessage) => {
    var chatContainer = document.getElementById("chatContainer");
    if (userMessage.length > 1) {
      var chatBotResponse = botResponses.filter((val) =>
        val.message.includes(userMessage.toLowerCase())
      );
      if (chatBotResponse.length > 0) {
        var response = chatBotResponse[0].response;
      } else {
        response = "Please send another message";
      }
    } else {
      response = "Please send another message";
    }

    let messageElement = document.createElement("div");
    messageElement.innerHTML = "Bot: " + response;

    setTimeout(() => {
      messageElement.animate(
        [{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }],
        { duration: 1000 }
      );
      chatContainer.appendChild(messageElement);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 500);
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    if (newMessage === "") {
      alert("Please Input A Message");
      return;
    }

    const userMessage = newMessage.trim();
    sendMessage(userMessage);
    botMessage(userMessage);

    try {
      const res = await axios.post(
        "https://simple-chat-bot-application.herokuapp.com/users/postchat",
        { message: userMessage }
      );
      console.log(res.data);

      if (res.data.status === "success!") {
        console.log("chat recorded!");
      }
    } catch (err) {
      console.log(err);
      alert("error");
    }

    setNewMessage("");
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>CHAT</Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{ height: "250px", overflowY: "scroll" }}
          id="chatContainer"
        ></Modal.Body>

        <Modal.Footer>
          <Form onSubmit={handleMessageSubmit}>
            <InputGroup className="mb-0">
              <Button
                variant="outline-secondary"
                id="button-addon1"
                type="submit"
              >
                Send
              </Button>
              <Form.Control
                id="textbox"
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                type="text"
                placeholder="Input text..."
                name="messages"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </InputGroup>
          </Form>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ContainerChat;

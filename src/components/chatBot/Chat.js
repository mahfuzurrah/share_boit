// Chat.js
import React, { useEffect, useRef, useState } from "react";
import Bot_img from "../../assets/img/bot.png";
import User_img from "../../assets/img/user.png";
import Tryangle from "../../assets/svg/tryangle.svg";
import { FaArrowUp } from "react-icons/fa";


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    // Add user message to the chat
    const userMessage = { text: newMessage, sender: "user" };
    const updatedMessages = [...messages, userMessage];

    // Add a bot reply message
    const botReply = "Thank you for messaging";
    const botReplyMessage = { text: botReply, sender: "bot" };

    // Update the chat with user message and bot reply
    setMessages([...updatedMessages, botReplyMessage]);

    // Clear the input field
    setNewMessage("");
  };

  return (
    <div>
      <div className="overflow_area">
        <div className="chat-container" ref={chatContainerRef}>
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.sender === "user" ? (
                <div className="user-message">
                  <img src={User_img} alt="User Avatar" className="avatar" />
                  <div className="text">
                    <img src={Tryangle} className="tryangle" alt="" />
                    {message.text}
                  </div>
                </div>
              ) : message.sender === "bot" ? (
                <div className="bot-message">
                  <img src={Bot_img} alt="Bot Avatar" className="avatar" />
                  <div className="text">
                    <img src={Tryangle} className="tryangle" alt="" />
                    {message.text}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // Prevents the newline character in the input field
              sendMessage();
            }
          }}
          placeholder="Type your message..."
        />
        <button className="btn" onClick={sendMessage}><FaArrowUp /></button>
      </div>
    </div>
  );
};

export default Chat;

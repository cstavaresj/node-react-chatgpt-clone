import React from "react";
import './ChatMessage.css';

export const ChatMessage = ({ message }) => {
    return (
      <div className={`chat-message ${message.user === 'gpt' ? 'chatgpt' : 'user'}`}>
        <div className="chat-message-center"> 
          <div className="message">
            {message.message}
          </div>
        </div>
      </div>
    );
  };
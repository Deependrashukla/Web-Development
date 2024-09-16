import React, { useEffect, useRef } from 'react';
import Message from './Message';

const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="messages">
      {messages.map((message, index) => (
        <Message key={index} text={message.text} sender={message.sender} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
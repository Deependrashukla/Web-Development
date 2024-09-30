import React, { useEffect, useRef } from 'react';
import Message from './Message';

// MessageList component to display the list of messages
const MessageList = ({ messages, botName }) => {
  // Create a reference to the last element of the message list
  const messagesEndRef = useRef(null);

  // useEffect hook to automatically scroll to the bottom of the message list 
  // whenever a new message is added to the "messages" array
  useEffect(() => {
    if (messagesEndRef.current) {
      // Scroll to the last message smoothly when new messages are added
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]); // Runs the effect whenever the "messages" array changes

  return (
    <div className="messages">
      {/* Loop through the messages array and render each message */}
      {messages.map((message, index) => (
        // Render Message component with a key, text, sender, and botName props
        <Message key={index} text={message.text} sender={message.sender} botName={botName} />
      ))}
      {/* This div is used as a reference point to scroll to the end of the messages */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;

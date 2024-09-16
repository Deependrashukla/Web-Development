import React from 'react';
import './Message.css'; // Optional for additional styling if needed

const Message = ({ text, sender }) => {
  return (
    <div className={`message ${sender}`}>
      {text}
    </div>
  );
};

export default Message;

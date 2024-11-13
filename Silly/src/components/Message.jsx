import React, { useState, useEffect } from 'react';
import './Message.css'; // Optional for additional styling if needed

const Message = ({ text, sender, botName }) => {
  const [time, setTime] = useState('');

  // Generate the time only when the message is first rendered
  useEffect(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    setTime(formattedTime); // Set the time once when the message is created
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className={`message ${sender}`}>
      <div className="message-text">
      {sender == 'bot' && (<span className='bot-name'>{botName}</span>)} <br />
        {text} 
      <span className="message-time">{time}</span>
      </div>
    </div>
  );
};

export default Message;

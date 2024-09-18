import React, { useState } from 'react';
import './ChatProfile.css'; // Import the CSS file

const ChatProfile = ({ name, pictureUrl, onClick, lastMessage = "No messages yet" }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected); // Toggle the selected state
    onClick(); // Call the function passed as a prop
  };

  return (
    <div
      className={`chat-profile ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <img src={pictureUrl} alt={`${name}'s profile`} />
      <div>
        <span className="name">{name}</span>
        <div className="last-message">{lastMessage}</div>
      </div>
    </div>
  );
};

export default ChatProfile;

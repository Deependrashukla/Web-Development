import React from 'react';
import './ChatProfile.css'; // Import the CSS file

const ChatProfile = ({ name, pictureUrl, onClick, lastMessage, isSelected }) => {
  return (
    <div
      className={`chat-profile ${isSelected ? 'selected' : ''}`} // Add 'selected' class when profile is active
      onClick={onClick}
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

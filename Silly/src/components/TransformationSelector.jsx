import React, { useState } from 'react';
import ChatProfile from './ChatProfile';
import addUnderscores from '../assets/bot1.jpg';
import reverseText from '../assets/bot2.jpg';
import repeatText from '../assets/bot3.webp';
import capitalizeText from '../assets/bot4.jpg';
import capitalizeFirstLetter from '../assets/bot5.png';
import boat6 from '../assets/boat6.jpeg';

function TransformationSelector({ setActiveProfile, conversations }) {
  const [selectedProfile, setSelectedProfile] = useState(null); // Track the selected profile

  // Handle profile click and set active chatbot
  const handleProfileClick = (name) => {
    setActiveProfile(name);
    setSelectedProfile(name); // Set the clicked profile as selected
  };

  // Get the last message of the specific chatbot profile
  const getLastMessage = (name) => {
    const messages = conversations[name] || [];
    return messages.length > 0 ? messages[messages.length - 1].text : "No messages yet";
  };

  return (
    <div className="transformation-selector">
      <h2 htmlFor="transformation" style={{ color: 'black', fontFamily: '-moz-initial2d', margin: '10px', paddingLeft:'40px' }}>
        Available Chat Bots
      </h2>

      <ChatProfile 
        name="Reverse Text" 
        pictureUrl={reverseText} 
        onClick={() => handleProfileClick("reverseText")} 
        lastMessage={getLastMessage("reverseText")}
        isSelected={selectedProfile === "reverseText"} // Pass selected state
      />
      <ChatProfile 
        name="Add Underscores" 
        pictureUrl={addUnderscores} 
        onClick={() => handleProfileClick("addUnderscores")} 
        lastMessage={getLastMessage("addUnderscores")}
        isSelected={selectedProfile === "addUnderscores"} // Pass selected state
      />
      <ChatProfile 
        name="Repeat Text" 
        pictureUrl={repeatText} 
        onClick={() => handleProfileClick("repeatText")} 
        lastMessage={getLastMessage("repeatText")}
        isSelected={selectedProfile === "repeatText"} // Pass selected state
      />
      <ChatProfile 
        name="Capitalize First Letter" 
        pictureUrl={capitalizeFirstLetter} 
        onClick={() => handleProfileClick("capitalizeFirstLetter")} 
        lastMessage={getLastMessage("capitalizeFirstLetter")}
        isSelected={selectedProfile === "capitalizeFirstLetter"} // Pass selected state
      />
      <ChatProfile 
        name="Capitalize Text" 
        pictureUrl={capitalizeText} 
        onClick={() => handleProfileClick("capitalizeText")} 
        lastMessage={getLastMessage("capitalizeText")}
        isSelected={selectedProfile === "capitalizeText"} // Pass selected state
      />
      <ChatProfile
        name="Random Transformations"
        pictureUrl={boat6}
        onClick={() => handleProfileClick("randomTransformations")}
        lastMessage={getLastMessage("randomTransformations")}
        isSelected={selectedProfile === "randomTransformations"} // Pass selected state
      />
    </div>
  );
}

export default TransformationSelector;

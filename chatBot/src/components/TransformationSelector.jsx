import React from 'react';
import ChatProfile from './ChatProfile';
import deependra from '../assets/deep.jpeg';
import shadab from '../assets/shadab.png';
import ankita from '../assets/ankita.png';
import anmol from '../assets/anmol.png';
import animesh from '../assets/animesh.png';

function TransformationSelector({ setActiveProfile, conversations }) {

  // Function to handle profile click
  const handleProfileClick = (name) => {
    setActiveProfile(name);
  };

  const getLastMessage = (name) => {
    const messages = conversations[name] || [];
    return messages.length > 0 ? messages[messages.length - 1].text : "No messages yet";
  };

  return (
    <div className="transformation-selector">
      <label htmlFor="transformation" style={{ color: 'white', fontFamily: '-moz-initial2d', margin: '10px' }}>
        Choose to message with:
      </label>

      <ChatProfile name="Shadab" pictureUrl={shadab} onClick={() => handleProfileClick("Shadab")} lastMessage={getLastMessage("Shadab")} />
      <ChatProfile name="Deependra" pictureUrl={deependra} onClick={() => handleProfileClick("Deependra")} lastMessage={getLastMessage("Deependra")} />
      <ChatProfile name="Ankita" pictureUrl={ankita} onClick={() => handleProfileClick("Ankita")} lastMessage={getLastMessage("Ankita")} />
      <ChatProfile name="Animesh" pictureUrl={animesh} onClick={() => handleProfileClick("Animesh")} lastMessage={getLastMessage("Animesh")} />
      <ChatProfile name="Anmol" pictureUrl={anmol} onClick={() => handleProfileClick("Anmol")} lastMessage={getLastMessage("Anmol")} />
    </div>
  );
}

export default TransformationSelector;

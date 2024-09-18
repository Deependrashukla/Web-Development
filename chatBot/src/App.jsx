import React, { useState } from 'react';
import './App.css';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import TransformationSelector from './components/TransformationSelector';
import { reverseText, addUnderscores, repeatText, capitalizeFirstLetter, capitalizeText } from './components/TextFeatures';

function App() {
  const [conversations, setConversations] = useState({});
  const [activeProfile, setActiveProfile] = useState(null);

  // Handle message submission from MessageInput
  const handleSendMessage = (input) => {
    if (!activeProfile) return; // Do nothing if no profile is selected

    const userMessage = { sender: 'user', text: input };

    setConversations((prevConversations) => {
      const updatedConversations = {
        ...prevConversations,
        [activeProfile]: [...(prevConversations[activeProfile] || []), userMessage],
      };

      // Simulate bot response after a delay
      setTimeout(() => {
        const transformationFunction = getTransformationFunction(activeProfile);
        const botMessage = { sender: 'bot', text: transformationFunction(input) };
        setConversations((prev) => ({
          ...prev,
          [activeProfile]: [...(prev[activeProfile] || []), userMessage, botMessage],
        }));
      }, 1000);

      return updatedConversations;
    });
  };

  // Retrieve the transformation function for the active profile
  const getTransformationFunction = (profileName) => {
    switch (profileName) {
      case 'Shadab':
        return reverseText;
      case 'Deependra':
        return addUnderscores;
      case 'Ankita':
        return repeatText;
      case 'Animesh':
        return capitalizeFirstLetter;
      case 'Anmol':
        return capitalizeText;
      default:
        return (text) => text; // Default: No transformation
    }
  };

  return (
    <div className="chat-container">
      <div className='left-container'>
        <TransformationSelector
          setActiveProfile={setActiveProfile}
          setMessages={setConversations}
        />
      </div>

      <div className="chat-window">
        {activeProfile && (
          <>
            <MessageList messages={conversations[activeProfile] || []} />
            <MessageInput onSubmit={handleSendMessage} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;

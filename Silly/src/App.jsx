import React, { useState } from 'react';
import './App.css';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import TransformationSelector from './components/TransformationSelector';
import { reverseText, addUnderscores, repeatText, capitalizeFirstLetter, capitalizeText, randomTransformations } from './components/TextFeatures';

// Name of each bot correspoding to their functioality.
const transformations = {
  reverseText: 'Reverse Text',
  addUnderscores:'AddUnder Scores',
  repeatText: 'Repeat Text',
  capitalizeFirstLetter: 'Capitalize First Letter',
  capitalizeText: 'Capitalize Text',
  randomTransformations: 'Random Transformations'
}

function App() {

  const [conversations, setConversations] = useState({});
  const [activeProfile, setActiveProfile] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle message submission from MessageInput
  const handleSendMessage = (input) => {
    if (!activeProfile) return; // Do nothing if no profile is selected

    const userMessage = { sender: 'user', text: input };

    // Update conversation with user message
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
          [activeProfile]: [...(prev[activeProfile] || []), botMessage], // Add only bot's message
        }));
      }, 1000);

      return updatedConversations; // Return updated conversation with user message
    });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Retrieve the transformation function for the active profile
  const getTransformationFunction = (profileName) => {
    switch (profileName) {
      case 'reverseText':
        return reverseText;
      case 'addUnderscores':
        return addUnderscores;
      case 'repeatText':
        return repeatText;
      case 'capitalizeFirstLetter':
        return capitalizeFirstLetter;
      case 'capitalizeText':
        return capitalizeText;
      case 'randomTransformations':
        return randomTransformations;
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
          conversations={conversations}
        />
      </div>

      <div className="chat-window" style={{backgroundColor: isDarkMode? 'black':'white'}}>
        <div
            style={{
              position: 'absolute', 
              top: '0px',
              right: '1150px',
              cursor: 'pointer',
              fontSize: '30px'
            }}
            onClick={() => {
              setIsDarkMode(!isDarkMode);}}
          >
            {isDarkMode ? '🌙' : '☀️'} {/* Moon for dark mode, Sun for light mode */}
          </div>


        {activeProfile && (
          <>
            <MessageList messages={conversations[activeProfile] || []} botName={transformations[activeProfile]}/>
            <MessageInput onSubmit={handleSendMessage} />
          </>
        )}
      </div>
    </div>
  );
}

/* "homepage": "https://Deependrashukla.github.io/Web-Development",*/

export default App;

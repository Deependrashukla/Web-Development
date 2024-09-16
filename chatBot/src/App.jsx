import React, { useState } from 'react';
import './App.css';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import TransformationSelector from './components/TransformationSelector'; // New component for transformation selection

function App() {
  const [messages, setMessages] = useState([]);
  const [selectedTransformation, setSelectedTransformation] = useState('none');

  // Handle message submission from MessageInput
  const handleSendMessage = (input) => {
    const userMessage = { sender: 'user', text: input };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    
    setTimeout(() => {
      const botMessage = {sender:'bot', text:applyTransformation(input)};
      setMessages((prevMessages) => [...prevMessages, botMessage])
    },1000);
  };

  // Apply the selected transformation
  const applyTransformation = (text) => {
    switch (selectedTransformation) {
      case 'reverse':
        return reverseText(text);
      case 'add_underscores':
        return addUnderscores(text);
      case 'repeat':
        return repeatText(text);
      case 'first_letter_capitalize':
        return capitalizeFirstLetter(text);
      case 'uppercase':
        return capitalizeText(text);
      default:
        return text; // No transformation applied
    }
  };

  // Simple text transformation: reverse the message
  const reverseText = (text) => {
    return text.split('').reverse().join('');
  };

  const addUnderscores = (text) => {
    return text.replace(/ /g, '_');
  };

  // Text transformation: Repeat each word twice
  const repeatText = (text) => {
    return text
      .split(' ')
      .map(word => `${word} ${word}`)
      .join(' ');
  };

  // Text transformation: Capitalize the first letter of each word
  const capitalizeFirstLetter = (text) => {
    return text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Text transformation: Convert text to uppercase
  const capitalizeText = (text) => {
    return text.toUpperCase();
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {/* MessageList renders all the messages */}
        <MessageList messages={messages} />

        {/* TransformationSelector allows the user to pick a transformation */}
        <TransformationSelector
          selected={selectedTransformation}
          onSelect={setSelectedTransformation}
        />

        {/* MessageInput handles the input and message submission */}
        <MessageInput onSubmit={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;

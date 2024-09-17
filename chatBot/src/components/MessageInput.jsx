import React, { useState } from 'react';

const MessageInput = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  // Handle user input submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput('');  // Clear the input after submission
    }
  };


  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Type a message..."
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      {input.length > 0 && (<button type="submit">Send</button>)}
    </form>
  );
};

export default MessageInput;

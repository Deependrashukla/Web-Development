// TextFeatures.js

// Simple text transformation: reverse the message
export const reverseText = (text) => {
  return text.split('').reverse().join('');
};

export const addUnderscores = (text) => {
  return text.replace(/ /g, '_');
};

// Text transformation: Repeat each word twice
export const repeatText = (text) => {
  return text
    .split(' ')
    .map(word => `${word} ${word}`)
    .join(' ');
};

// Text transformation: Capitalize the first letter of each word
export const capitalizeFirstLetter = (text) => {
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Text transformation: Convert text to uppercase
export const capitalizeText = (text) => {
  return text.toUpperCase();
};


export const randomTransformations = (text) => {
  const transformationFunctions = [reverseText, addUnderscores, repeatText, capitalizeFirstLetter, capitalizeText];
  const randomIndex = Math.floor(Math.random() * transformationFunctions.length);
  return transformationFunctions[randomIndex](text); // Apply a random transformation
};




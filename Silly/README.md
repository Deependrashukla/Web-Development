# React Chat Bot Project

This project is a React-based chat interface where users can interact with various text-transforming bots. The application mimics the look and feel of popular messaging platforms like Discord or Slack while demonstrating different text manipulation techniques.

## Features

1. **User Input and Bot Responses**: Users can send messages, and one of six bots will reply with a transformed version of the message.

2. **Multiple Bots with Unique Transformations**: The app features six different bots, each with its own text transformation:
   - **Capitalize First Letter**: Capitalize First Letter of each word.
   - **Reverse Text**: This bot flips the text backwards, like doing a backflip with words.
   - **Add Underscore**: This bot sneaks underscores into the text, wherever it finds spaces.
   - **Repeat Text**: This bot enforces repetition of text.
   - **Capitalize Text**: This bot turns everything into uppercase.
   - **RandomBot**: Randomly applies one of the above transformations.

3. **Simple, Intuitive UI**: The chat interface resembles modern chat apps and is styled to distinguish between user messages and bot responses.

4. **Scroll Feature**: The chat history scrolls as messages are added, ensuring a smooth user experience.

5. **Basic Input Validation**: Users cannot submit empty or invalid messages.

6. **Dynamic Bot Selection**: For each message, a random bot is selected to respond, adding variety to the chat experience.

## Technologies Used

- React (Functional Components, Hooks)
- CSS for styling
- JavaScript for text transformations

## Getting Started

### Prerequisites

To run this project, you need to have Node.js and npm installed on your machine. If you haven't installed them yet, you can download and install them from [here](https://nodejs.org/).

### Installation and Setup

Follow these steps to set up and run the project:

1. **Clone the Repository**: 
   ```
   git clone https://github.com/Shadab-4123/Web-Dev_Projects.git
   ```

3. **Navigate to the Project Directory**:
   ```
   cd Silly
   ```

4. **Install Dependencies**:
   ```
   npm install
   ```

5. **Start the Development Server**:
   ```
   npm run dev
   ```
   This command will start the app and provide a local URL. Ctrl + click the URL to open the app in your default web browser.

## Using the App

1. Type a message into the chat input field and press Enter or click the Send button.
2. Your message will appear in the chat window.
3. After a short delay, a randomly selected bot will reply with its unique transformation of your text.
4. Each bot has a distinct name and transformation style, adding variety to the chat experience.
5. Continue chatting to interact with different bots and see various text transformations in action.

## Contributing

Contributions to improve the project are welcome. Please feel free to fork the repository, make changes, and submit a pull request.


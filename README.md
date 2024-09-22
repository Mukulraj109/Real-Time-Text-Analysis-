# Real-Time Text Analysis and String Replacement App

This is a React-based web application for real-time text analysis and string replacement. It includes features like word and character counting, string replacement, and highlighting replaced text. Additionally, it supports real-time notifications using `react-toastify`.

## Features

- **Real-Time Text Analysis:** Automatically counts the number of unique words and characters excluding spaces and punctuation.
- **String Replacement:** Allows users to replace a specific string throughout the text with another string, with the replaced strings highlighted.
- **Highlighting Replaced Text:** Replaced strings are highlighted in the updated text.
- **Toaster Notifications:** Notifications are displayed for actions like replacements and errors using `react-toastify`.

## Project Structure

├── public │ ├── index.html ├── src │ ├── components │ │ ├── TextArea.js │ │ ├── Statistics.js │ │ ├── ReplaceSection.js │ │ ├── HighlightedText.js │ ├── App.js │ ├── App.css │ ├── index.js │ └── index.css ├── README.md ├── package.json └── package-lock.json


## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- **Node.js** and **npm** installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mukulraj109/Real-Time-Text-Analysis-.git
   cd text-analysis-replacement-app

2. **Install dependencies:**
 ```bash
    npm install
 ```

2. **Install dependencies:**
 ```bash
    npm install
  ```
The app should now be running at http://localhost:3000/.

3. **Usage section:**
Type or paste your text into the provided text area.
The app will automatically display the unique word count and character count (excluding spaces).
Use the "Find" and "Replace with" fields to specify a string to find and a replacement string.
Click the "Replace All" button to replace all instances of the string in the text.
The replaced text will be highlighted, and a notification will appear for confirmation.
Use the "Clear" button to reset the input fields.

4. **Bonus Features section:**
Toast Notifications: Added using react-toastify. Notifications appear for actions like successful string replacement and error handling (e.g., trying to replace an empty string).


 5. **Available Scripts section:**
npm start: Starts the development server.
npm run build: Builds the app for production.

6. **Technologies Used section:** 
React: Frontend framework.
React Toastify: For notifications.
CSS: For styling components.
JavaScript (ES6+): For application logic.


# License
- This project is licensed under the MIT License see the LICENSE file for details.

- You can copy-paste this content into your `README.md` file, and it will include all sections—features, usage, project structure, installation, and bonus features like toast notifications.

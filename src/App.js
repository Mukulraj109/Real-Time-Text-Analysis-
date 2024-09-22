import React, { useState } from 'react';
import TextArea from './components/TextArea';
import Statistics from './components/Statistics';
import ReplaceSection from './components/ReplaceSection';
import HighlightedText from './components/HighlightedText';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [replaceFrom, setReplaceFrom] = useState('');
  const [replaceTo, setReplaceTo] = useState('');
  const [highlightedText, setHighlightedText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const countUniqueWords = () => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(words);
    return uniqueWords.size;
  };

  const countCharactersExcludingSpaces = () => {
    const characters = text.replace(/[^a-zA-Z0-9]/g, '');
    return characters.length;
  };

  const handleReplaceAll = () => {
    if (!replaceFrom) {
      toast.error("Please enter a string to find!");
      return;
    }

    const regex = new RegExp(replaceFrom, 'gi');
    const replacedText = text.replace(regex, replaceTo);
    setText(replacedText);

    // Highlighting the replacements
    const parts = text.split(regex);
    const highlighted = parts.flatMap((part, index) =>
      index === 0 ? part : [<mark key={index}>{replaceTo}</mark>, part]
    );
    setHighlightedText(highlighted);

    toast.success("Text replaced successfully!");
  };

  const clearText = () => {
    setText('');
    setHighlightedText('');
    setReplaceFrom('');
    setReplaceTo('');
    toast.info("Text cleared!");
  };

  return (
    <div className="App">
      <h1>Real-Time Text Analysis and String Replacement</h1>
      <TextArea text={text} onChange={handleTextChange} />
      <Statistics uniqueWordCount={countUniqueWords()} characterCount={countCharactersExcludingSpaces()} />
      <ReplaceSection 
        replaceFrom={replaceFrom}
        replaceTo={replaceTo}
        onReplaceFromChange={(e) => setReplaceFrom(e.target.value)}
        onReplaceToChange={(e) => setReplaceTo(e.target.value)}
        onReplaceAll={handleReplaceAll}
        onClear={clearText}
      />
      <HighlightedText 
        highlightedText={highlightedText}
        originalText={text}
        replaceFrom={replaceFrom}
      />
      <ToastContainer />
    </div>
  );
}

export default App;

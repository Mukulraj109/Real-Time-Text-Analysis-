// src/components/TextArea.js
import React from 'react';

const TextArea = ({ text, onChange }) => {
  return (
    <textarea
      className="textarea"
      value={text}
      onChange={onChange}
      rows="10"
      placeholder="Type or paste your text here..."
    />
  );
};

export default TextArea;

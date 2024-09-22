import React from 'react';

function HighlightedText({ highlightedText, originalText, replaceFrom }) {
  return (
    <div className="highlighted-text">
      <h3>Updated Text:</h3>
      <p>{highlightedText.length > 0 ? highlightedText : originalText}</p>
      {highlightedText.length === 0 && replaceFrom && (
        <p>No occurrences found for "{replaceFrom}"</p>
      )}
    </div>
  );
}

export default HighlightedText;

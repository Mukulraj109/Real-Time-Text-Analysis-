import React from 'react';

function Statistics({ uniqueWordCount, characterCount }) {
  return (
    <div className="statistics">
      <p>Unique Word Count: {uniqueWordCount}</p>
      <p>Character Count (Excluding Spaces and Punctuation): {characterCount}</p>
    </div>
  );
}

export default Statistics;

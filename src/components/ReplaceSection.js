import React from 'react';

function ReplaceSection({ replaceFrom, replaceTo, onReplaceFromChange, onReplaceToChange, onReplaceAll, onClear }) {
  return (
    <div className="replace-section">
      <input
        type="text"
        placeholder="Find"
        value={replaceFrom}
        onChange={onReplaceFromChange}
        aria-label="Find string"
      />
      <input
        type="text"
        placeholder="Replace with"
        value={replaceTo}
        onChange={onReplaceToChange}
        aria-label="Replacement string"
      />
      <button onClick={onReplaceAll}>Replace All</button>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

export default ReplaceSection;

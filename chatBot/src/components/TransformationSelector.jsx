import React from 'react';

function TransformationSelector({ selected, onSelect }) {
  return (
    <div className="transformation-selector">
      <label htmlFor="transformation" style={{color: 'white', fontFamily: '-moz-initial2d', margin:'10px'}}>Choose a transformation:</label>
      <select
        id="transformation"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="Same text">Same Text</option>
        <option value="reverse">Reverse Text</option>
        <option value="add_underscores">Add Underscores</option>
        <option value="repeat">Repeat Words Twice</option>
        <option value="first_letter_capitalize">Capitalize First Letter</option>
        <option value="uppercase">Convert to Uppercase</option>
      </select>
    </div>
  );
}

export default TransformationSelector;

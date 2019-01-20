import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => (
  <div>
    <label>
      model
      <div>
        <input type="text" onChange={(e) => props.onInputModelName(e)} />
      </div>
    </label>
  </div>
)

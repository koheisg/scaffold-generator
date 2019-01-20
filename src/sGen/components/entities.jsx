import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => (
  <div>
    <label>
      field
      <div>
        <ul id="field">
          {props.children}
        </ul>
      </div>
    </label>
  </div>
);

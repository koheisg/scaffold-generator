import React from 'react';
import ReactDOM from 'react-dom';
import Entity from './entity.jsx'

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

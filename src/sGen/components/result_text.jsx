import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => (
  <div>
    <textarea id="result" readOnly value={props.resultText}></textarea>
  </div>
)

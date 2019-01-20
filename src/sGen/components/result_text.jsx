import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => (
  <div>
    <textarea id="result" defaultValue={props.resultText}></textarea>
  </div>
)

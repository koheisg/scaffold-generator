import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => (
  <div>
    <label>
      command
      <div>
        <select name="name" onChange={(e) => props.dispatch({type: 'onSelectWhichCommand', value: e.target.value})}>
          <option value="model">model</option>
          <option value="scaffold">scaffold</option>
        </select>
      </div>
    </label>
  </div>
)

import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => (
  <div>
    <label>
      method
      <div>
        <select name="name" onChange={(e) => props.onSelectWhichMethod(e)}>
          <option value="g">generate</option>
          <option value="d">destroy</option>
        </select>
      </div>
    </label>
  </div>
)

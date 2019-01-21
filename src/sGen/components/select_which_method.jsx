import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => (
  <div>
    <label>
      method
      <div>
        <select name="name" onChange={(e) => props.dispatch({type: 'onSelectWhichMethod', value: e.target.value})}>
          <option value="g">generate</option>
          <option value="d">destroy</option>
        </select>
      </div>
    </label>
  </div>
)

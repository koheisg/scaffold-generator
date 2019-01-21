import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => (
  <div>
    <label>
      model
      <div>
        <input type="text" value={props.name} onChange={(e) => props.dispatch({type: 'onInputModelName', value: e.target.value})} />
      </div>
    </label>
  </div>
)

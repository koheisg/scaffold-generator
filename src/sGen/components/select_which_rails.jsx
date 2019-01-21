import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => (
  <div>
    <label>
      which rails
      <div>
        <select name="name" onChange={(e) => props.dispatch({type: 'onSelectWhichRails', value: e.target.value})}>
          <option value="rails">rails</option>
          <option value="bin/rails">bin/rails</option>
          <option value="bin/bundle exec rails">bin/bundle exec rails</option>
        </select>
      </div>
    </label>
  </div>
)

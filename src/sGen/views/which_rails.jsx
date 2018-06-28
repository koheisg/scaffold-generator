import React from 'react';
import ReactDOM from 'react-dom';

export default () => (
  <div>
    <label htmlFor="which_rails">which rails</label>
    <div>
      <select name="name" onChange={(e) => props.selectWhichRails(e)} value={props.value}>
        <option value="rails">rails</option>
        <option value="bin/rails">bin/rails</option>
        <option value="bin/bundle exec rails">bin/bundle exec rails</option>
      </select>
    </div>
  </div>
);

import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => (
  <li className="form-inline">
    <input type="text" className="name form-control" placeholder="Text input" onChange={(e) => props.changeName(e, props.entity)} value={props.entity.name} />
    <select name="name" className="type form-control" onChange={(e) => props.changeType(e, props.entity)} value={props.entity.type}>
      <option value="primary_key">primary_key</option>
      <option value="integer">integer</option>
      <option value="string">string</option>
      <option value="text">text</option>
      <option value="float">float</option>
      <option value="decimal">decimal</option>
      <option value="datetime">datetime</option>
      <option value="time">time</option>
      <option value="date">date</option>
      <option value="binary">binary</option>
      <option value="boolean">boolean</option>
      <option value="references">references</option>
    </select>
    <button type="button" className="plus btn btn-default" onClick={(e) => props.plus(props.entity)}>+</button>
    <button type="button" className="minous btn btn-default" onClick={(e) => { props.minous(props.entity) }}>-</button>
  </li>
);

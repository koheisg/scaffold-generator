import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => (
  <li>
    <input type="text" onChange={(e) => props.dispatch({type: 'changeName', entity: props.entity, value: e.target.value})} value={props.entity.name} />
    <select name="name" onChange={(e) => props.dispatch({type: 'changeType', entity: props.entity, value: e.target.value})}>
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
    <select name="index" onChange={(e) => props.dispatch({type: 'changeIndex', entity: props.entity, value: e.target.value})} value={props.entity.index}>
      <option value=""></option>
      <option value="index">index</option>
      <option value="uniq">unique</option>
    </select>
    <button type="button" onClick={(e) => props.dispatch({type: 'plus', entity: props.entity})}>+</button>
    <button type="button" onClick={(e) => props.dispatch({type: 'minous', entity: props.entity})}>-</button>
  </li>
);

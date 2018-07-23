import React from 'react';
import ReactDOM from 'react-dom';
import Entity from './entity.jsx'

export default (props) => (
  <ul className="list-unstyled" id="field">
    {
      props.entities.map((entity, index) => (
        <Entity key={index.toString()} minous={props.minous} plus={props.plus} changeName={props.changeName} changeType={props.changeType} entity={entity} />
      ))
    }
  </ul>
);

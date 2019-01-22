import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import Entities from './entities.jsx'
import Entity from './entity.jsx'
import ForkMeGitHub from './fork_me_github.jsx'
import Heading from './heading.jsx'
import SelectWhichRails from './select_which_rails.jsx'
import SelectWhichMethod from './select_which_method.jsx'
import SelectWhichCommand from './select_which_command.jsx'
import ModelNameField from './model_name_field.jsx'
import ResultText from './result_text.jsx'
import {changeNameEntities, changeTypeEntities, changeIndexEntities, plus} from '../stores/entities_store'

const initialState = {
  whichRails: 'rails',
  whichMethod: 'generate',
  whichCommand: 'model',
  modelName: 'users',
  entities: [{ name: 'name', type: 'string', index: '' }],
}

function reducer(state, action) {
  switch (action.type) {
    case 'onSelectWhichRails':
      return Object.assign(state, {whichRails: action.value})
    case 'onSelectWhichMethod':
      return Object.assign(state, {whichMethod: action.value})
    case 'onSelectWhichCommand':
      return Object.assign(state, {whichCommand: action.value})
    case 'onInputModelName':
      return Object.assign(state, {modelName: action.value})
    case 'minous':
      return Object.assign(state, {entities: state.entities.filter(el => el !== action.entity)})
    case 'plus':
      return Object.assign(state, {entities: plus(state, action)})
    case 'changeName':
      return Object.assign(state, {entities: changeNameEntities(state, action)})
    case 'changeType':
      return Object.assign(state, {entities: changeTypeEntities(state, action)})
    case 'changeIndex':
      return Object.assign(state, {entities: changeIndexEntities(state, action)})
    default:
      return state;
  }
}

function createResultText(state) {
  const entityArgument = state.entities.map((entity) => {
    const index = entity['index'] === '' ? '' : `:${entity['index']}`;
    return ` \\\n${entity['name']}:${entity['type']}${index}`;
  }).join(' ');

  return `${state.whichRails} ${state.whichMethod} ${state.whichCommand} ${state.modelName} ${entityArgument}`;
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const resultText = createResultText(state)

  return (
    <div>
      <ForkMeGitHub />
      <Heading />
      <div>
        <form>
          <SelectWhichRails dispatch={dispatch} />
          <SelectWhichMethod dispatch={dispatch} />
          <SelectWhichCommand dispatch={dispatch} />
          <ModelNameField dispatch={dispatch} name={state.modelName} />
          <Entities>
            {
              state.entities.map((entity, index) => (
                <Entity
                  dispatch={dispatch}
                  key={index.toString()}
                  entity={entity}
                />
              ))
            }
          </Entities>
        </form>
      </div>
      <ResultText resultText={resultText} />
    </div>
  )
}

import React, { Component } from 'react';
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

const initialState = {
  whichRails: 'rails',
  whichMethod: 'generate',
  whichCommand: 'model',
  modelName: 'users',
  entities: [{ name: 'name', type: 'string', index: '' }],
}

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
    this.minous = this.minous.bind(this);
    this.plus = this.plus.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeType = this.changeType.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
    this.onSelectWhichRails = this.onSelectWhichRails.bind(this);
    this.onSelectWhichMethod = this.onSelectWhichMethod.bind(this);
    this.onSelectWhichCommand = this.onSelectWhichCommand.bind(this);
    this.onInputModelName = this.onInputModelName.bind(this);
  }

  onSelectWhichRails(e) {
    this.setState({whichRails: e.target.value})
  }

  onSelectWhichMethod(e) {
    this.setState({whichMethod: e.target.value})
  }

  onSelectWhichCommand(e) {
    this.setState({whichCommand: e.target.value})
  }

  onInputModelName(e) {
    this.setState({modelName: e.target.value})
  }

  createResultText() {
    return `${this.state.whichRails} ${this.state.whichMethod} `
    + `${this.state.whichCommand} ${this.state.modelName} ${this.createArgument()}`;
  }

  createArgument() {
    return this.state.entities.map((entity) => {
      const index = entity['index'] === '' ? '' : `:${entity['index']}`;
      return ` \\\n${entity['name']}:${entity['type']}${index}`;
    }).join(' ');
  }

  minous(name) {
    this.setState({entities: this.state.entities.filter(el => el !== name)});
  }

  plus(entity) {
    const prev = this.state.entities;
    const index = prev.indexOf(entity);
    prev.splice(index + 1, 0, { name: 'name', type: 'string' });
    this.setState({entities: prev});
  }

  changeName(e, entity) {
    const entities = this.state.entities.map(el => {
      if(el === entity) {
        el['name'] = e.target.value;
      }
      return el
    });
    this.setState({entities: entities});
  }

  changeType(e, entity) {
    const entities = this.state.entities.map(el => {
      if(el === entity) {
        el['type'] = e.target.value;
      }
      return el
    });
    this.setState({entities: entities});
  }

  changeIndex(e, entity) {
    const entities = this.state.entities.map(el => {
      if(el === entity) {
        el['index'] = e.target.value;
      }
      return el
    });
    this.setState({entities: entities});
  }

  render() {
    return  (
      <div>
        <ForkMeGitHub />
        <Heading />
        <div>
          <form>
            <SelectWhichRails onSelectWhichRails={this.onSelectWhichRails} />
            <SelectWhichMethod onSelectWhichMethod={this.onSelectWhichMethod} />
            <SelectWhichCommand onSelectWhichCommand={this.onSelectWhichCommand} />
            <ModelNameField onInputModelName={this.onInputModelName} name={this.state.modelName} />
            <Entities>
              {
                this.state.entities.map((entity, index) => (
                  <Entity
                    key={index.toString()}
                    minous={this.minous}
                    plus={this.plus}
                    changeName={this.changeName}
                    changeType={this.changeType}
                    changeIndex={this.changeIndex}
                    entity={entity}
                  />
                ))
              }
            </Entities>
          </form>
        </div>
        <ResultText resultText={this.createResultText()} />
      </div>
    );
  }
}

import React, { Component  } from 'react';
import ReactDOM from 'react-dom';
import Entities from './entities.jsx'

const initialState = {
  whichRails: 'rails',
  whichMethod: 'generate',
  whichCommand: 'model',
  modelName: 'users',
  entities: [{ name: 'name', type: 'string' }],
}

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
    this.minous = this.minous.bind(this);
    this.plus = this.plus.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  whichRails(e) {
    this.setState({whichRails: e.target.value})
  }

  whichMethod(e) {
    this.setState({whichMethod: e.target.value})
  }

  whichCommand(e) {
    this.setState({whichCommand: e.target.value})
  }

  modelName(e) {
    this.setState({modelName: e.target.value})
  }

  command() {
    return `${this.state.whichRails} ${this.state.whichMethod} `
    + `${this.state.whichCommand} ${this.state.modelName} ${this.createArgument()}`;
  }

  createArgument() {
    return this.state.entities.map((entity) => {
      return ` \\\n${entity['name']}:${entity['type']}`;
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


  render() {
    return  (
      <div>
        <a href="https://github.com/koheisg/scaffold-generator">
          <img style={{ position: 'absolute', top: 0, right: 0, border: 0 }} src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="htmlFork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/htmlForkme_right_red_aa0000.png" />
        </a>
        <h1>scaffold generator</h1>
        <div>
          <form>
            <div>
              <label>
                which rails
                <div>
                  <select name="name" onChange={(e) => this.whichRails(e)} value={this.state.whichRails}>
                    <option value="rails">rails</option>
                    <option value="bin/rails">bin/rails</option>
                    <option value="bin/bundle exec rails">bin/bundle exec rails</option>
                  </select>
                </div>
              </label>
            </div>

            <div>
              <label>
                method
                <div>
                  <select name="name" onChange={(e) => this.whichMethod(e)} value={this.state.whichMethod}>
                    <option value="g">generate</option>
                    <option value="d">destroy</option>
                  </select>
                </div>
              </label>
            </div>

            <div>
              <label>
                command
                <div>
                  <select name="name" onChange={(e) => this.whichCommand(e)} value={this.state.whichCommand}>
                    <option value="model">model</option>
                    <option value="scaffold">scaffold</option>
                  </select>
                </div>
              </label>
            </div>

            <div>
              <label>
                model
                <div>
                  <input type="text" onChange={(e) => this.modelName(e)} value={this.state.modelName} />
                </div>
              </label>
            </div>

            <div>
              <label>
                field
                <div>
                  <Entities entities={this.state.entities} minous={this.minous} plus={this.plus} changeName={this.changeName} changeType={this.changeType} />
                </div>
              </label>
            </div>
          </form>
        </div>
        <div>
          <textarea id="result" value={this.command()}></textarea>
        </div>
      </div>
    );
  }
}

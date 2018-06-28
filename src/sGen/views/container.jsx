import React, { Component  } from 'react';
import ReactDOM from 'react-dom';
import Entities from './entities.jsx'
import ForkMe from './fork_me.jsx'
import WhichRails from './which_rails.jsx'

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whichRails: 'rails',
      whichMethod: 'generate',
      whichCommand: 'model',
      modelName: 'users',
      entities: [{ name: 'name', type: 'string' }],
    }
    this.minous = this.minous.bind(this);
    this.plus = this.plus.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeType = this.changeType.bind(this);
    this.whichRails = this.whichRails.bind(this);
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
      <div className="container">
        <h1>scaffold generator</h1>
        <form>
          <WhichRails value={this.state.whichRails} selectWhichRails={this.whichRails} />
          <div>
            <label htmlFor="method">method</label>
            <div>
              <select name="name" onChange={(e) => this.whichMethod(e)} value={this.state.whichMethod}>
                <option value="g">generate</option>
                <option value="d">destroy</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="argument">command</label>
            <div>
              <select name="name" onChange={(e) => this.whichCommand(e)} value={this.state.whichCommand}>
                <option value="model">model</option>
                <option value="scaffold">scaffold</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="model_name">model</label>
            <div>
              <input type="text" placeholder="Text input" onChange={(e) => this.modelName(e)} value={this.state.modelName} />
            </div>
          </div>

          <div>
            <label>field</label>
            <div>
              <Entities entities={this.state.entities} minous={this.minous} plus={this.plus} changeName={this.changeName} changeType={this.changeType} />
            </div>
          </div>

          <div>
            <textarea rows="3" value={this.command()} readOnly></textarea>
          </div>
        </form>

        <ForkMe />
      </div>
    );
  }
}

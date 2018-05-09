import React, { Component  } from 'react';
import ReactDOM from 'react-dom';
import Entities from './entities.jsx'

export default class Initialize extends Component {
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
    this.write = this.write.bind(this);
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

  write() {
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
        <a href="https://github.com/koheisg/scaffold-generator">
          <img style={{ position: 'absolute', top: 0, right: 0, border: 0 }} src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="htmlFork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/htmlForkme_right_red_aa0000.png" />
        </a>
        <h1>scaffold generator</h1>
        <div className="col-md-8">
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="which_rails" className="col-sm-2 control-label">which rails</label>
              <div className="col-sm-4">
                <select name="name" id="which_rails" className="form-control" onChange={(e) => this.whichRails(e)} value={this.state.whichRails}>
                  <option value="rails">rails</option>
                  <option value="bin/rails">bin/rails</option>
                  <option value="bin/bundle exec rails">bin/bundle exec rails</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="method" className="col-sm-2 control-label">method</label>
              <div className="col-sm-4">
                <select name="name" id="method" className="form-control" onChange={(e) => this.whichMethod(e)} value={this.state.whichMethod}>
                  <option value="g">generate</option>
                  <option value="d">destroy</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="argument" className="col-sm-2 control-label">command</label>
              <div className="col-sm-4">
                <select name="name" id="argument" className="form-control" onChange={(e) => this.whichCommand(e)} value={this.state.whichCommand}>
                  <option value="model">model</option>
                  <option value="scaffold">scaffold</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="model_name" className="col-sm-2 control-label">model</label>
              <div className="col-sm-4">
                <input id="model_name" type="text" className="form-control" placeholder="Text input" onChange={(e) => this.modelName(e)} value={this.state.modelName} />
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label">field</label>
              <div className="col-sm-10">
                <Entities entities={this.state.entities} minous={this.minous} plus={this.plus} changeName={this.changeName} changeType={this.changeType} write={this.write} />
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <textarea id="result" className="form-control" rows="3" onChange={this.write} value={this.command()}></textarea>
        </div>
      </div>
    );
  }
}

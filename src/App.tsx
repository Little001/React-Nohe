import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './App.css';
import { IAuthStore } from './stores/authStore';

interface AppProps {
  authStore?: IAuthStore
}

@inject("authStore")
@observer
class App extends Component<AppProps> {
  render() {
    return (
      <div className="App">
        <div className="header">{this.props.authStore!.getUserStore().name}</div>
        <div className="header">{this.props.authStore!.getUserStore().role}</div>
        <button onClick={this.clickHandler}>Login</button>
        <button onClick={this.clickHandler}>logout</button>
      </div>
    );
  }

  private clickHandler = () => {
    this.props.authStore!.login();
  }
  
}

export default App;

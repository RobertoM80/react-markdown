import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

class App extends Component {
  
  constructor () {
    super()
    this.state = {
      input: 'Your Markdown will be shown styled here..'
    }
  }

  update (e) {
    this.setState({ input: marked(e.target.value) })
  }

  render() {
    return (
      <div className="App">

        {/* the Header */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-Github-markdown!!</h1>
        </header>

        <div className="container">

          <div className="markdown-body row mt-5">

            <div className="markdown-body__input-block col-md p-0">
              <textarea onChange={this.update.bind(this)} type="text" name="" id="" rows="20" className="p-3"></textarea>
            </div>

            <div className="col-md-1"></div>

            <div className="markdown-body__display-block col-md p-3">
              <div dangerouslySetInnerHTML={{__html: this.state.input}} />
            </div>

          </div>

        </div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ExplorerComponent from './components/explorer-component';

class App extends Component {

    state = {
        title: 'Add new user',
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        body: [
          {
            name: 'email',
            type: 'email',
            max: 24,
            min: 3,
          },
          {
            name: 'full-name',
            type: 'text',
            placeholder: 'John Doe',
            required: true,
          },
          {
            name: 'phone',
            type: 'tel',
            pattern: '\\d\\d\\d-\\d\\d\\d\\d',
          },
        ]
      }
    render() {

        const { title, method, url, body } = this.state;
        return (
            <div className="App">
                <ExplorerComponent
                    title={ title }
                    method={ method }
                    url={ url }
                    body={ body }
                />
            </div>
        );
    }
}

export default App;

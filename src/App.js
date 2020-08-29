// src/App.js

import React, { Component } from 'react';
import Contacts from './components/contacts';

class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    fetch('http://localhost:9000/api/getContacts')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      // JSX to render goes here...
      <Contacts contacts={this.state.contacts} />
    );
  }
}

export default App;

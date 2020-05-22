import React from 'react';
import './App.css';
const axios = require('axios');

class App extends React.Component {
  state = {users: []};
  componentDidMount() {
    fetch('http://localhost/api/index.php')
    .then(response => response.json())
    .then((data)=> this.setState(()=> ({users: data})))
  }
  render() {
    return (
      <div className="container">
        <h2>Getting Data from PHP Backend Into React</h2>
        <form>
          <label>Select a User</label>
          <select>
          {this.state.users.map((user) => {
            return <option key={user.id}>{user.name}</option>
          })}
          </select>
        </form>
      </div>
    )
  }
}

export default App;



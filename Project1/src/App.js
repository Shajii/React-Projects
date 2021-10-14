import React, { Component } from 'react';
import './App.css';
import Navbar from './axiom/Navbar'
import Users from './axiom/Users'
import axios from 'axios'
import SearchBar from './axiom/SearchBar'




class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
      this.setState({loading: true})
      const res = await axios.get(`https://api.github.com/users`)
      this.setState({users: res.data, loading: false})
  }
  
  searchUsers = async (text) => {
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/users?q=${text}`)
    this.setState({users: res.data, loading: false})
    console.log(text);
  }  

  render() {
    return (
      <div>
        <Navbar title='GitHub Finder'/>
        <SearchBar searchUsers={this.searchUsers}/>
        <Users loading={this.state.loading} users={this.state.users}/>
      </div>
    )
  }
}

export default App;
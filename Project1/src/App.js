import React, { Component } from 'react';
import './App.css';
import Navbar from './axiom/Navbar'
import Users from './axiom/Users'
import axios from 'axios'
import SearchBar from './axiom/SearchBar'
import Alert from './axiom/Alert'




class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: null
  }

  // async componentDidMount() {
  //     this.setState({loading: true})
  //     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.React_App_Github_Client_ID}&client_secret=${process.env.React_App_Github_Client_Secret}`)
  //     this.setState({users: res.data, loading: false})
  // }
  
  searchUsers = async (text) => {
      this.setState({loading: true})
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.React_App_Github_Client_ID}&client_secret=${process.env.React_App_Github_Client_Secret}`)
      this.setState({users: res.data.items, loading: false})
  }  

  clearUsers = () => {
      this.setState({ users: []})
  }
  
  alertBox = (msg, type) => {
      this.setState({ alert: {msg: msg, type: type}})

      setTimeout(() => this.setState({ alert: null }), 2000)
  }

  close = (e) => {
    console.log(e);
    this.setState({ alert: null })
  }

  render() {
    const {loading, users} = this.state;
    return (
      <div>
        <Navbar title='GitHub Finder'/>
        <Alert input={this.state.alert} close={this.closeBtn}/>
        <SearchBar 
              searchUsers={this.searchUsers} 
              clearUsers={this.clearUsers} 
              condition={users.length>0 ? true: false}
              alert={this.alertBox}
        />
        <Users loading={loading} users={users}/>
        
      </div>
    )
  }
}

export default App;
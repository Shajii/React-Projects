import React, { Component } from 'react'
import PropTypes from 'prop-types'


class SearchBar extends Component {

    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        alert: PropTypes.func.isRequired
    }

    handleChange = e => {this.setState({ [e.target.name]: e.target.value}) }

    handleForm = e => {
        e.preventDefault();
        if(this.state.text === '') {
            this.props.alert('Please enter a username', 'alert-box');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({text: ''});
        }
    }

    render() {
        const {condition, clearUsers} = this.props;
        return (
            <div>
                <form onSubmit={this.handleForm}>
                    <input type="text" name='text' placeholder='Search' onChange={this.handleChange} value={this.state.text}/>
                    <input type="submit" name="button" value="Search" style={inputStyle} />
                </form>
                {condition && (<button onClick={clearUsers}>Clear</button>)}
            </div>
        )
    }
}

const inputStyle = {
    cursor: 'pointer',
    backgroundColor: 'black',
    width: '99%',
    color: 'white',
    fontWeight: 'bolder',
    fontSize: '15px',
    margin: '25px 0 0 0'
}


export default SearchBar



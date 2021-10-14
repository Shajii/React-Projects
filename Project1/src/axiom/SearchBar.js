import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        text: ''
    }

    handleChange = e => {this.setState({ [e.target.name]: e.target.value}) }

    handleForm = e => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleForm}>
                    <input type="text" name='text' placeholder='Search' onChange={this.handleChange} value={this.state.text}/>
                    <input type="submit" name="button" value="Search" style={{ cursor: 'pointer' ,backgroundColor: 'green', width: '10%', margin: '10px', color: 'white', fontWeight: 'bolder', fontSize: '15px'}} />
                </form>
            </div>
        )
    }
}

export default SearchBar

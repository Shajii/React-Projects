import React from 'react';


class State extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            message: 'Welcome Visitor'
        }   

       // this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage = () => {
        this.setState({
            message: 'Message changed now'
        })
    }   

    check = () => {
        console.log('sdasfafafas');
    }


    render() { 
        return (
        <div>
           {this.state.message}
           <button onClick={this.changeMessage}>Subs</button>
           
           {this.check()}
        </div>
        )
    }
}
 
export default State;





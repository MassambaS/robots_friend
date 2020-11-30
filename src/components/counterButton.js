import React, { Component } from 'react';

class CounterButton extends Component {

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.count !== nextState.count){
            return true;
        }
        return false;
    }

    updateCount = () => {
        //this.setState({count: this.state.count + 1})
        this.setState(state => {
           return {count: state.count +1}
        });
    }

    render(){
        const count = this.state.count;
        return (
            <button onClick={this.updateCount} color={this.props.color}>{count}</button>
        );
    }
}

export default CounterButton;
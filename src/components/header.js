import React, { Component } from 'react';
import CounterButton from './counterButton';

class Header extends Component {

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.count !== nextState.count){
            return true;
        }

        return false;
    }

    render(){
        console.log('header')
        return (
            <div>
                <h1 className='f1'>Robots friends</h1>
                <CounterButton color='red'/>
            </div>
        )
        
        
    }

}

export default Header;

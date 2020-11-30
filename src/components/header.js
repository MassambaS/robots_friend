import React, { Component } from 'react';
import CounterButton from './counterButton';

class Header extends Component {

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

import React, { Component } from 'react';
import Status from './Status';
import "./StatusBar.css"

class StatusBAr extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='statusbar_container'>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                
            </div> 
        );
    }
}
 
export default StatusBAr;
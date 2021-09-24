import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';

export default class LightGoldCoin extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <img src={lightGoldCoin} style={{height: this.props.height}}>{this.props.content}</img>
        );
    }
}
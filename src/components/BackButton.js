import React, {Component} from 'react';
import { IoChevronBack } from "react-icons/io5";
import SmallButton from './SmallButton';
export default class BackButton extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <SmallButton style={{...this.props.style}} label={<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '1vh'}}><IoChevronBack  size={25 } /><div style={{marginBottom: '1vh', marginRight: '0.3vh', marginLeft: '0.3vh'}}> back</div></div>} onClick={this.props.onClick}/>
        );
    }
}
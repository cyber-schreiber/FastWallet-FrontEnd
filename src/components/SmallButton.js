import React, {Component} from 'react';

export default class SmallButton extends Component{

    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <div className="smallButton" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', ...this.props.style}} onClick={this.props.onClick}><b>{this.props.label}</b></div>
        );
    }
}
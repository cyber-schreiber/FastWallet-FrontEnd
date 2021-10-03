import React, {Component} from 'react';

export default class Button extends Component{

    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <div className="Button" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', ...this.props.style}}  onClick={() => this.props.onClick()}><b>{this.props.label}</b></div>
        );
    }
}
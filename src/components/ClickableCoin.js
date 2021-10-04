import React, {Component} from 'react';
import lightGoldCoin from '../GoldCoin.png';

export default class ClickableCoin extends Component{

    // props = size, onClick, content

    render(){
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: this.props.size, ...this.props.style}}>
                <img alt="" src={lightGoldCoin} style={{height: this.props.size, position: 'absolute', bottom: '0vh'}} />
                <div onClick={() => this.props.onClick()} className="Coin" style={{height: this.props.size, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: '0vh', width: this.props.size, borderRadius: '50%'}}>
                    {this.props.content}
                </div>
            </div>
        );
    }
}
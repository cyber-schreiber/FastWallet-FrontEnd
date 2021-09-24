import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import '../App.css';
import Button from '../components/Button';

class Welcome extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <img src={lightGoldCoin} style={{height: '40vh', position: 'fixed', bottom: '20vh'}} />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'fixed', height: '40vh', bottom: '5vh'}}>
                <Button onClick={this.props.twofa} label="SIGN UP"/>
                <div style={{height: '1vh'}}></div>
                <Button onClick={this.props.login} label="LOG IN"/>
            </div>
        </div>
        );
    }
}

export default Welcome;
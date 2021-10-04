import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import Button from '../components/Button';
import ClickableCoin from '../components/ClickableCoin';
// import BackButton from '../components/BackButton';

export default class Login extends Component{

    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <img alt="" src={lightGoldCoin} style={{height: '35vh', position: 'fixed', bottom: '20vh'}} />
                <div style={{height: '35vh', position: 'fixed', bottom: '20vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>                
                    <input className="input" placeholder="Username"/>
                    <div style={{height: '2vh'}}></div>
                    <input type="password" className="input" placeholder="Password"/>
                </div>
                <ClickableCoin style={{position: 'absolute', bottom: '10vh'}} onClick={this.props.nextScreen} size='20vh' content={<div style={{fontSize: '3vh'}}><b>LOG IN</b></div>}/>
            </div>

        );
    }

}
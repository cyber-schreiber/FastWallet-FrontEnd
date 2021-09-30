import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import '../App.css';
import TwoFA from './2fa';
import EnterPassword from './enterpassword';
import Landing from './landing';

const screens = {
    enterpassword: "enterpassword",
    twofa: "twofa",
    landing: "landing",
}


class QRCodeFlow extends Component{

    constructor(props){
        super(props);

        this.state = {
            screen: screens.enterpassword,
        }
    }

    setScreen(_this, screen){
        _this.setState({screen: screen});
    }

    setPhoneOrEmail(_this, phoneOrEmail){
        _this.phoneOrEmail = phoneOrEmail;
    }

    render(){
        return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            {this.state.screen === screens.enterpassword && <EnterPassword accountID={this.props.accountID} nextScreen={() => this.setScreen(this, screens.twofa)}/>}
            {this.state.screen === screens.twofa && <TwoFA setPhoneOrEmail = {(poe) => this.setPhoneOrEmail(this, poe)} nextScreen={() => this.setScreen(this, screens.landing)}/>}
            {this.state.screen === screens.landing && <Landing accountID={this.props.accountID}/>}

        </div>
        );
    }


}

export default QRCodeFlow;
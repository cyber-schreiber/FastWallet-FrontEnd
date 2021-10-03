import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import '../App.css';
import Button from '../components/Button';
import TwoFA from './2fa';
import SignUpForm from './signupform';
import PhotoID from './photoid';
import Login from './login';
import CreatePassword from './createpassword';
import { withRouter } from 'react-router';

const screens = {
    welcome: "welcome",
    twofa: "twofa",
    signup: "signup",
    photoid: "photoid",
    createpassword: "createpassword",
    login: "login"
}


class Welcome extends Component{

    constructor(props){
        super(props);

        this.state = {
            screen: screens.welcome,
        }

    }

    setScreen(_this, screen){
        _this.setState({screen: screen});
    }

    setPhoneOrEmail(_this, phoneOrEmail){
        _this.phoneOrEmail = phoneOrEmail;
    }

    render(){
        const { history } = this.props;

        return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            {this.state.screen === screens.welcome && 
                !this.props.isMobile && <div style={{height: '40vh', width: '67vh', position: 'fixed', bottom: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img alt="" src={lightGoldCoin} style={{height: '35vh', position: 'absolute', left: '0vh'}} />
                    <img alt="" src={lightGoldCoin} style={{height: '35vh', position: 'absolute', right: '0vh'}} />

                   <div style={{position: 'absolute', display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                        <Button onClick={() => this.setScreen(this, screens.twofa)} label="SIGN UP"/>
                        <Button onClick={() => this.setScreen(this, screens.login)} label="LOG IN"/>
                    </div>
                </div>
            }
            {this.state.screen === screens.welcome && 
                this.props.isMobile && <div style={{height: '40vh', width: '67vh', position: 'fixed', bottom: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img alt="" src={lightGoldCoin} style={{height: '45vh', position: 'absolute', bottom: '0vh'}} />

                   <div style={{position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '15vh', bottom: '15vh'}}>
                        <Button onClick={() => this.setScreen(this, screens.twofa)} label="SIGN UP"/>
                        <Button onClick={() => this.setScreen(this, screens.login)} label="LOG IN"/>
                    </div>
                </div>
            }
            
            {this.state.screen === screens.twofa && <TwoFA isMobile={this.props.isMobile} goBack={() => this.setScreen(this, screens.welcome)} setPhoneOrEmail = {(poe) => this.setPhoneOrEmail(this, poe)} nextScreen={() => this.setScreen(this, screens.signup)}/>}
            {this.state.screen === screens.signup && <SignUpForm isMobile={this.props.isMobile} nextScreen={() => this.setScreen(this, screens.photoid)} phoneOrEmail={this.phoneOrEmail}/>}
            {this.state.screen === screens.photoid && <PhotoID isMobile={this.props.isMobile} nextScreen={() => this.setScreen(this, screens.createpassword)}/>}
            {this.state.screen === screens.createpassword && <CreatePassword isMobile={this.props.isMobile} nextScreen={() => history.push("/account")}/>}


            {this.state.screen === screens.login && <Login isMobile={this.props.isMobile} nextScreen={() => history.push("/account")}/>}
        </div>
        );
    }
}

export default withRouter(Welcome);

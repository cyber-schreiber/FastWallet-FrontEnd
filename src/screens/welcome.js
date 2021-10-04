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
import ClickableCoin from '../components/ClickableCoin';

const screens = {
    welcome: "welcome",
    twofa1: "twofa1",
    twofa2: "twofa2",
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
                !this.props.isMobile && <div style={{height: '40vh', width: '67vh', position: 'fixed', bottom: '10vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{position: 'absolute', bottom: '30vh'}}>
                        <ClickableCoin size='30vh' content={<div style={{fontSize: '3vh'}}><b>LOG IN</b></div>} onClick={() => this.setScreen(this, screens.login)}/>
                    </div>
                    <div>
                        <ClickableCoin size='30vh' content={<div style={{fontSize: '3vh'}}><b>SIGN UP</b></div>} onClick={() => this.setScreen(this, screens.twofa1)}/>
                    </div>
                </div>
            }
            {this.state.screen === screens.welcome && 
                this.props.isMobile && <div style={{height: '80vh', width: '67vh', position: 'fixed', bottom: '6vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{position: 'absolute', bottom: '30vh'}}>
                        <ClickableCoin size='30vh' content={<div style={{fontSize: '3vh'}}><b>LOG IN</b></div>} onClick={() => this.setScreen(this, screens.login)}/>
                    </div>
                    <div>
                        <ClickableCoin size='30vh' content={<div style={{fontSize: '3vh'}}><b>SIGN UP</b></div>} onClick={() => this.setScreen(this, screens.twofa1)}/>
                    </div>                    
                </div>
            }
            

            {this.state.screen === screens.twofa1 && <TwoFA isMobile={this.props.isMobile} goBack={() => this.setScreen(this, screens.welcome)} nextScreen={() => this.setScreen(this, screens.signup)}/>}
            {this.state.screen === screens.signup && <SignUpForm isMobile={this.props.isMobile} nextScreen={() => this.setScreen(this, screens.twofa2)} setPhoneOrEmail = {(poe) => this.setPhoneOrEmail(this, poe)}/>}
            {this.state.screen === screens.twofa2 && <TwoFA isMobile={this.props.isMobile} goBack={() => this.setScreen(this, screens.signup)} phoneOrEmail={this.phoneOrEmail} nextScreen={() => this.setScreen(this, screens.photoid)}/>}
            {this.state.screen === screens.photoid && <PhotoID isMobile={this.props.isMobile} nextScreen={() => this.setScreen(this, screens.createpassword)}/>}
            {this.state.screen === screens.createpassword && <CreatePassword isMobile={this.props.isMobile} nextScreen={() => history.push("/account")}/>}


            {this.state.screen === screens.login && <Login isMobile={this.props.isMobile} nextScreen={() => history.push("/account")}/>}
        </div>
        );
    }
}

export default withRouter(Welcome);

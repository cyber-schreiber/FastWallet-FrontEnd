// import logo from './logo.svg';
import './App.css';
import Welcome from './screens/welcome.js';
import TwoFA from './screens/2fa.js';
import PhotoID from './screens/photoid.js';
import SignUpForm from './screens/signupform.js';
import AddFunds from './screens/addfunds.js';
import Buy from './screens/buy.js';
import Sell from './screens/sell.js';
import Login from './screens/login.js';
import Landing from './screens/landing.js';
import React, {Component} from 'react';

class App extends Component {


  constructor(props){
    super(props);

    this.state = {
      screen: "welcome"
    }
  }

  changeToLanding(){
    this.setState({screen: "landing"});
  }

  changeToSignup(){
    this.setState({screen: "signup"});
  }

  changeToTwoFA(){
    this.setState({screen: "twofa"});
  }

  changeToLogin(){
    this.setState({screen: "login"});
  }

  changeToPhotoID(){
    this.setState({screen: "photoid"});
  }

  render(){
    return (
      <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Fast Wallet - the Crypto wallet even your Grandma can use!
          </p>
        {/* </header> */}
        {this.state.screen === "welcome" && <Welcome twofa={() => this.changeToTwoFA()} login={() => this.changeToLogin()}/>}
        {this.state.screen === "twofa" && <TwoFA signup={() => this.changeToSignup()}/>}
        {this.state.screen === "signup" && <SignUpForm photoID={() => this.changeToPhotoID()}/>}
        {this.state.screen === "landing" && <Landing/>}
        {this.state.screen === "photoid" && <PhotoID landing={() => this.changeToLanding()}/>}
        {/* {this.state.screen === "buy" && <Buy/>}
        {this.state.screen === "sell" && <Sell/>} */}
        {this.state.screen === "login" && <Login landing={() => this.changeToLanding()}/>} 

      </div>
      );
  }
}

export default App;

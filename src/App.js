// import logo from './logo.svg';
import logo from './Fast-Wallet-Logo.png';
import twoCoins from './2GoldCoins.png'
import twoCoins2 from './2GoldCoins2.png'
import goldCoin from './GoldCoin.png'
import lightGoldCoin from './LightGoldCoin.png'
import './App.css';
import Welcome from './screens/welcome.js';
import TwoFA from './screens/2fa.js';
import PhotoID from './screens/photoid.js';
import SignUpForm from './screens/signupform.js';
import Login from './screens/login.js';
import Landing from './screens/landing.js';
import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {


  constructor(props){
    super(props);

    this.state = {
      screen: "welcome"
    }
  }

  setScreen(_this, screen){
    _this.setState({screen: screen});
  }

  render(){
    return (
      <div className="App" style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <header className="App-header" style={{marginBottom: '30vh', height: '30vh'}}>
          <img src={logo} 
          className="App-logo" 
          />
        </header>
        <img src={twoCoins} 
          style={{position: 'fixed', right: '10vh', top: '20vh', height: '25vh'}}
          />
          <img src={twoCoins2} 
          style={{position: 'fixed', left: '10vh', top: '20vh', height: '25vh'}}
          />
          <img src={goldCoin} 
          style={{position: 'fixed', left: '10vh', bottom: '10vh', height: '25vh'}}
          />
          <img src={goldCoin} 
          style={{position: 'fixed', right: '10vh', bottom: '10vh', height: '25vh'}}

          
          />

          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/account" component={Landing}/>
          </Switch>
      </div>
      );
  }
}

export default App;

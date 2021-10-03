// import logo from './logo.svg';
import logo from './Fast-Wallet-Logo.png';
import twoCoins from './2GoldCoins.png'
import twoCoins2 from './2GoldCoins2.png'
import goldCoin from './GoldCoin.png'
// import lightGoldCoin from './LightGoldCoin.png'
import './App.css';
import Welcome from './screens/welcome.js';
// import TwoFA from './screens/2fa.js';
// import PhotoID from './screens/photoid.js';
// import SignUpForm from './screens/signupform.js';
// import Login from './screens/login.js';
import Landing from './screens/landing.js';
import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import EnterPassword from './screens/enterpassword';
import QRCodeFlow from './screens/qrcodeflow';

class App extends Component {


  constructor(props){
    super(props);

    this.state = {
      screen: "welcome"
    }

    this.isMobile = true;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }

  }

  setScreen(_this, screen){
    _this.setState({screen: screen});
  }

  render(){
    return (
      <div className="App" style={{height: this.isMobile ? '88vh' : '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <header className="App-header" style={{marginBottom: '30vh', width: '100vw', height: '30vh'}}>
          <img alt="" src={logo} style={this.isMobile ? {width: '80vw', marginBottom: '5vh'} : {}}
          className="App-logo" 
          />
        </header>
        {!this.isMobile && 
        <><img alt="" src={twoCoins} 
          style={{position: 'fixed', right: '10vh', top: '20vh', height: '25vh'}}
          />
          <img alt="" src={twoCoins2} 
          style={{position: 'fixed', left: '10vh', top: '20vh', height: '25vh'}}
          />
          <img alt="" src={goldCoin} 
          style={{position: 'fixed', left: '10vh', bottom: '10vh', height: '25vh'}}
          />
          <img alt="" src={goldCoin} 
          style={{position: 'fixed', right: '10vh', bottom: '10vh', height: '25vh'}}

          
          /></>}

          <Switch>
            <Route exact path="/" render={() => <Welcome history={this.props.history} isMobile={this.isMobile}/>}/>
            <Route exact path="/account" render={() => <Landing isMobile={this.isMobile}/>}/>
            {
              [...Array(500).keys()].map((num) => 
                <Route path={"/account/" + String(num)} render={() => <QRCodeFlow isMobile={this.isMobile} accountID={num}/>}/>
              )
            }
          </Switch>
      </div>
      );
  }
}

export default App;

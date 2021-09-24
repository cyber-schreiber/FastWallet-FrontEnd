import React, {Component} from 'react';
import AddFunds from './addfunds';
import Trade from './trade.js';
import MyAccount from './myaccount';
import lightGoldCoin from '../LightGoldCoin.png';
import Button from '../components/Button';

class Landing extends Component{

    constructor(props){
        super(props);

        this.state = {
            mode: "myAccount",
        }
    }

    addFunds(_this){
        _this.setState({
            mode: "addFunds",
        })
    }

    trade(_this){
        _this.setState({
            mode: "trade",
        })
    }

    myAccount(_this){
        _this.setState({
            mode: "myAccount",
        })
    }


    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={lightGoldCoin} style={{height: '50vh', position: 'fixed', bottom: '15vh', left: '30vh'}} />
                <div style={{height: '40vh', position: 'fixed', bottom: '18vh', left: '42vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Button label="MY ACCOUNT" style={{width: '25vh'}} onClick={() => this.myAccount(this)}/>
                    <div style={{height: '2vh'}}></div>
                    <Button label="ADD FUNDS" style={{width: '25vh'}} onClick={() => this.addFunds(this)}/>
                    <div style={{height: '2vh'}}></div>

                    <Button label="TRADE" onClick={() => this.trade(this)}/>

                </div>
                <img src={lightGoldCoin} style={{height: '50vh', position: 'fixed', bottom: '15vh', right: '30vh'}} />
                
                <div style={{height: '40vh', position: 'fixed', bottom: '20vh', right: '40vh', width: '30vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

                    {this.state.mode == "addFunds" && <AddFunds/>}
                    {this.state.mode == "trade" && <Trade/>}
                    {this.state.mode == "myAccount" && <MyAccount/>}
                </div>
            </div>

        );
    }

        // render(){
    //     return (
    //     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    //         <img src={lightGoldCoin} style={{height: '35vh', position: 'fixed', bottom: '20vh'}} />
    //         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
    //             <div className="Button" style={{position: 'absolute', bottom: '38%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} onClick={this.props.twofa}><b>SIGN UP</b></div>
    //             <div className="Button" style={{position: 'absolute', bottom: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} onClick={this.props.login}><b>LOG IN</b></div>
    //         </div>
    //     </div>
    //     );
    // }
}

export default Landing;
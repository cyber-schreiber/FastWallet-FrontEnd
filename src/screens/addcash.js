import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import Button from '../components/Button';
import SmallButton from '../components/SmallButton';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';



export default class AddCash extends Component{

    constructor(props){
        super(props);

        this.state = {
            mode: "chooseAmount", // success
            amount: null,
            customAmount: 0,
        }
    }

    setMode(mode){
        this.setState({mode: mode});
        let _this = this;
        if (mode == "waiting"){
            setTimeout(function(){ _this.setState({mode: "success"}); }, 3000);
        }
    }

    setAmount(amount){
        this.setState({amount: amount});
    }

    

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

                {this.state.mode == "chooseAmount" && <>
                <Tooltip title={<div>go to cash register at store, present them with your card, insert card into card machine at checkout, key in your PIN</div>}><b>How to deposit?</b></Tooltip>
                <div style={{height: '2vh'}}></div>

                <div style={{display: 'flex', }}>
                <SmallButton label="Loose Change" onClick={() => {this.setMode("waiting"); this.setAmount("0.5"); this.props.addBalance(this.props.parent, 0.5)}} />
                <div style={{width: '1vh'}}></div>
                <SmallButton label="$5" onClick={() => {this.setMode("waiting"); this.setAmount("5"); this.props.addBalance(this.props.parent, 5)}} />
                <div style={{width: '1vh'}}></div>
                <SmallButton label="$10" onClick={() => {this.setMode("waiting"); this.setAmount("10"); this.props.addBalance(this.props.parent, 10)}} />
                </div>

                <div style={{height: '1vh'}}></div>
                
                <div style={{display: 'flex'}}>
                <SmallButton label="$20" onClick={() => {this.setMode("waiting"); this.setAmount("20"); this.props.addBalance(this.props.parent, 20)}} />
                <div style={{width: '1vh'}}></div>
                <SmallButton label="$100" onClick={() => {this.setMode("waiting"); this.setAmount("100"); this.props.addBalance(this.props.parent, 100)}} />
                </div>

                <div style={{height: '1vh'}}></div>

                <div>Other amount: <input type="text" onChange={val => this.setState({customAmount: val.target.value})}></input><input type="submit" value="Submit" onClick={() => {this.setMode("waiting"); this.setAmount(this.state.customAmount); this.props.addBalance(this.props.parent, this.state.customAmount)}}></input></div></>}
                <div style={{height: '1vh'}}></div>

                {this.state.mode == "waiting" && <div>Waiting for verification of your deposit...</div>}

                {this.state.mode == "success" && <>
                <div>${this.state.amount} successfully added to your account. <SmallButton label="Buy coins now!" onClick={() => this.props.goToTradeScreen(this.props.parent)}/></div>
                </>}
                
            </div>

        );
    }
}
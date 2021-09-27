import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import Button from '../components/Button';
import SmallButton from '../components/SmallButton';

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
    }

    setAmount(amount){
        this.setState({amount: amount});
    }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                {this.state.mode == "chooseAmount" && <><div onClick={() => {this.setMode("success"); this.setAmount("0.5"); this.props.addBalance(this.props.parent, 0.5)}}>Loose Change</div>
                <div onClick={() => {this.setMode("success"); this.setAmount("5"); this.props.addBalance(this.props.parent, 5)}}>$5</div>
                <div onClick={() => {this.setMode("success"); this.setAmount("10"); this.props.addBalance(this.props.parent, 10)}}>$10</div>
                <div onClick={() => {this.setMode("success"); this.setAmount("20"); this.props.addBalance(this.props.parent, 20)}}>$20</div>
                <div onClick={() => {this.setMode("success"); this.setAmount("100"); this.props.addBalance(this.props.parent, 100)}}>$100</div>
                <div>Other amount: <input type="text" onChange={val => this.setState({customAmount: val.target.value})}></input><input type="submit" value="Submit" onClick={() => {this.setMode("success"); this.setAmount(this.state.customAmount); this.props.addBalance(this.props.parent, this.state.customAmount)}}></input></div></>}
                {this.state.mode == "success" && <>
                <div>${this.state.amount} successfully added to your account. <SmallButton label="Buy coins now!" onClick={() => this.props.goToTradeScreen(this.props.parent)}/></div>
                </>}
                
            </div>

        );
    }
}
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
            balances: {
                "usd": 0,
            },
            transactions: []
        }
    }

    addBalance(_this, balance){
        let balances = _this.state.balances;
        balances.usd = Number(balances.usd) + Number(balance);

        _this.setState({
            balance: balances,
        })

        let transaction = {
            coin: "usd",
            amount: balance,
            time: new Date().toUTCString(),
        }

        let transactions = _this.state.transactions;
        transactions.push(transaction);
        _this.setState({transactions: transactions});
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

    buyCoin(_this, coin, amount){
        if (!!_this.state.balances[coin]){
            let balances = _this.state.balances;
            balances[coin] = Number(balances[coin]) + Number(amount);
            _this.setState({balances: balances});
            
        } else {
            let balances = _this.state.balances;
            balances[coin] = amount;
            _this.setState({balances: balances});
        }

        let transaction = {
            coin: coin,
            amount: amount,
            time: new Date().toUTCString(),
        }

        let transactions = [..._this.state.transactions, transaction];
        _this.setState({transactions: transactions});
    }


    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={lightGoldCoin} style={{height: '50vh', position: 'fixed', bottom: '15vh', left: '30vh'}} />
                <div style={{height: '40vh', position: 'fixed', bottom: '18vh', left: '42vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Button label="MY ACCOUNT" style={{width: '25vh', backgroundColor: this.state.mode == "myAccount" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)"}} onClick={() => this.myAccount(this)}/>
                    <div style={{height: '2vh'}}></div>
                    <Button label="ADD FUNDS" style={{width: '25vh', backgroundColor: this.state.mode == "addFunds" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)"}} onClick={() => this.addFunds(this)}/>
                    <div style={{height: '2vh'}}></div>

                    <Button label="TRADE" style={{backgroundColor: this.state.mode == "trade" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)"}} onClick={() => this.trade(this)}/>

                </div>
                <img src={lightGoldCoin} style={{height: '50vh', position: 'fixed', bottom: '15vh', right: '30vh'}} />
                
                <div style={{height: '40vh', position: 'fixed', bottom: '20vh', right: '40vh', width: '30vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

                    {this.state.mode == "addFunds" && <AddFunds addBalance={this.addBalance} goToTradeScreen={this.trade} parent={this}/>}
                    {this.state.mode == "trade" && <Trade goToAccount={this.myAccount} parent={this} buyCoin={this.buyCoin}/>}
                    {this.state.mode == "myAccount" && <MyAccount balances={this.state.balances} transactions={this.state.transactions} parent={this}/>}
                </div>
            </div>

        );
    }

}

export default Landing;
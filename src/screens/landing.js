import React, {Component} from 'react';
import AddFunds from './addfunds';
import Trade from './trade.js';
import MyAccount from './myaccount';
import lightGoldCoin from '../LightGoldCoin.png';
import Button from '../components/Button';
import ClickableCoin from '../components/ClickableCoin';
import History from './history';
import {IoHome, IoAddCircleOutline, IoLogoUsd, IoAnalytics, IoList} from 'react-icons/io5';

export default class Landing extends Component{

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

    history(_this){
        _this.setState({
            mode: "history",
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

        let accStr = !!this.props.accountID ? " " + String(this.props.accountID) : "";
        accStr = "MY ACCOUNT" + accStr;
        let longAccStr = this.props.accountID >= 10;


        if (!this.props.isMobile){
        return (

            <div style={{height: '65vh', width: '70vw', position: 'fixed', bottom: '2vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img alt="" src={lightGoldCoin} style={{height: '52vh', position: 'absolute', }} />

                    <div style={{height: '52vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: '6vh', width: '52vh', }}>


                    {this.state.mode === "addFunds" && <AddFunds isMobile={this.props.isMobile} goToAccount={this.myAccount} addBalance={this.addBalance} goToTradeScreen={this.trade} parent={this}/>}
                    {this.state.mode === "trade" && <Trade isMobile={this.props.isMobile} goToAccount={this.myAccount} parent={this} buyCoin={this.buyCoin}/>}

                    {this.state.mode === "myAccount" && <MyAccount isMobile={this.props.isMobile} balances={this.state.balances} transactions={this.state.transactions} parent={this}/>}
                    {this.state.mode === "history" && <History isMobile={this.props.isMobile} balances={this.state.balances} transactions={this.state.transactions} parent={this}/>}

                    </div>


                        <ClickableCoin style={{position: 'absolute', bottom: '0vh', left: '40vh'}} onClick={() => this.myAccount(this)} size='15vh' content={<IoHome size={40}/>}/>
                        <ClickableCoin style={{position: 'absolute', top: '0vh', right: '40vh'}} onClick={() => this.history(this)} size='15vh' content={<IoList size={40}/>}/>
                        <ClickableCoin style={{position: 'absolute', top: '0vh', left: '40vh'}} onClick={() => this.addFunds(this)} size='15vh' content={<div style={{display: 'flex'}}><IoAddCircleOutline size={35}/><IoLogoUsd size={35}/></div>}/>
                        <ClickableCoin style={{position: 'absolute', bottom: '0vh', right: '40vh'}} onClick={() => this.trade(this)} size='15vh' content={<IoAnalytics size={40}/>}/>
                    

                        
 

                </div>

        );}
        else {
            return (

                <div style={{height: '65vh', width: '70vw', position: 'fixed', bottom: '2vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>


                    <div style={{height: '52vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: '6vh', width: '52vh'}}>
                        <img alt="" src={lightGoldCoin} style={{height: '52vh', position: 'absolute', }} />
                    </div>
                    <div style={{height: '52vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: '6vh', width: '52vh', }}>

                        {this.state.mode === "addFunds" && <AddFunds isMobile={this.props.isMobile} goToAccount={this.myAccount} addBalance={this.addBalance} goToTradeScreen={this.trade} parent={this}/>}
                        {this.state.mode === "trade" && <Trade isMobile={this.props.isMobile} goToAccount={this.myAccount} parent={this} buyCoin={this.buyCoin}/>}

                        {this.state.mode === "myAccount" && <MyAccount isMobile={this.props.isMobile} balances={this.state.balances} transactions={this.state.transactions} parent={this}/>}
                        {this.state.mode === "history" && <History isMobile={this.props.isMobile} balances={this.state.balances} transactions={this.state.transactions} parent={this}/>}
                    </div>

                        
                        <ClickableCoin style={{position: 'absolute', bottom: '0vh', left: '0vh'}} onClick={() => this.myAccount(this)} size='15vh' content={<IoHome size={40}/>}/>
                        <ClickableCoin style={{position: 'absolute', top: '0vh', right: '0vh'}} onClick={() => this.history(this)} size='15vh' content={<IoList size={40}/>}/>
                        <ClickableCoin style={{position: 'absolute', top: '0vh', left: '0vh'}} onClick={() => this.addFunds(this)} size='15vh' content={<div style={{display: 'flex'}}><IoAddCircleOutline size={35}/><IoLogoUsd size={35}/></div>}/>
                        <ClickableCoin style={{position: 'absolute', bottom: '0vh', right: '0vh'}} onClick={() => this.trade(this)} size='15vh' content={<IoAnalytics size={40}/>}/>
                    


                </div>
    
            );
        }
    }

}
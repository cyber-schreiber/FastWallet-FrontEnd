import React, {Component} from 'react';
import coins from '../helper/coins';
import '../App.css';

export default class MyAccount extends Component{

    constructor(props){
        super(props);

        this.state = {
            mode: "coinsowned"
        }
    }

    setMode(mode){
        this.setState({
            mode: mode
        })
    }

    render(){
        return (
            <div style={{marginBottom: this.props.isMobile ? '5vh' : 0}}>
                <div style={{display: 'flex', justifyContent: 'center'}}><div style={{cursor: 'pointer', fontWeight: this.state.mode === "coinsowned" ? "bold" : "normal"}} onClick={() => this.setMode("coinsowned")}>My Coins</div><div style={{marginRight: '1vh', marginLeft: '1vh'}}>|</div><div style={{cursor: 'pointer', fontWeight: this.state.mode === "transactions" ? "bold" : "normal"}} onClick={() => this.setMode("transactions")}>Transactions</div>
                </div>
                <div style={{height: '1vh'}}></div>
                
                {this.state.mode === "coinsowned" &&
                <table style={{fontSize: '1.5vh'}}>
                    <tr><th>Coin</th><th>Amount</th><th>USD</th></tr>
                    {coins.map((coin) => 
                        <tr><td>{coin.name}</td><td>{coin.amount}</td><td>${coin.amount*coin.value}</td></tr>
                    )}
                </table>
                    }


                <div style={{height: 10}}></div>



                
                {this.state.mode === "transactions" && (this.props.transactions.length === 0 
                    ? 
                <div>No recent transactions</div> 
                    : 
                <table style={{fontSize: '1.5vh'}}>
                    <tr><th>Coin</th><th>Amount</th><th>Time</th></tr>
                    {this.props.transactions.map((transaction) => 
                        <tr><td>{transaction.coin}</td><td>{transaction.amount}</td><td>{transaction.time}</td></tr>
                    )}
                </table>)
                }
                
            </div>
        );
    }
}

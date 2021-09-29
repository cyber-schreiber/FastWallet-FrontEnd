import React, {Component} from 'react';
import coins from '../helper/coins';

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
            <div>
                <div style={{cursor: 'pointer', fontWeight: this.state.mode == "coinsowned" ? "bold" : "normal"}} onClick={() => this.setMode("coinsowned")}>Coins owned</div>
                
                {this.state.mode == "coinsowned" &&
                <table>
                    <tr><th>Coin</th><th>Amount</th><th>US$</th></tr>
                    {coins.map((coin) => 
                        <tr><td>{coin.name}</td><td>{coin.amount}</td><td>${coin.amount*coin.value}</td></tr>
                    )}
                </table>
                    }


                <div style={{height: 20}}></div>



                <div style={{cursor: 'pointer', fontWeight: this.state.mode == "transactions" ? "bold" : "normal"}} onClick={() => this.setMode("transactions")}>Recent Transactions</div>
                
                {this.state.mode == "transactions" && (this.props.transactions.length == 0 
                    ? 
                <div>No recent transactions</div> 
                    : 
                <table>
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

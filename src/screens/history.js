import React, {Component} from 'react';
import coins from '../helper/coins';
import '../App.css';

export default class History extends Component{

    render(){
        return (
            <div>
                
                
                {this.props.transactions.length === 0 
                    ? 
                <b>No recent transactions</b> 
                    : 
                <>    <div style={{display: 'flex', justifyContent: 'center'}}><b> Recent Transactions</b>
                </div>
                <div style={{height: '1vh'}}></div>
                
                <div style={{height: '20vh', overflowY: 'scroll'}}>
                <table style={{fontSize: '1.5vh'}}>
                    <tr><th>Coin</th><th>Amount</th><th>Time</th></tr>
                    {this.props.transactions.map((transaction) => 
                        <tr><td>{transaction.coin}</td><td>{transaction.amount}</td><td>{transaction.time}</td></tr>
                    )}
                </table>
                </div>
                </>

                }
            </div>
        );
    }
}

import React, {Component} from 'react';


export default class MyAccount extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                Coins owned
                {Object.keys(this.props.balances).map((coin) => 
                    <div>{coin} {this.props.balances[coin]}</div>
                )}
                <div style={{height: 20}}></div>
                Recent Transactions
                {this.props.transactions.map((transaction) => 
                    <div>{transaction.coin}, {transaction.amount}, {transaction.time}</div>
                )}
            </div>
        );
    }
}

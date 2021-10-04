import React, {Component} from 'react';
import coins from '../helper/coins';
import '../App.css';

export default class MyAccount extends Component{

    render(){
        return (
            <div >
                <div style={{display: 'flex', justifyContent: 'center', fontSize: '2.2vh'}}><b>My Coins</b>
                </div>
                <div style={{height: '1vh'}}></div>
                
                <table style={{fontSize: '1.8vh'}}>
                    <tr><th>Coin</th><th>Amount</th><th>USD</th></tr>
                    {coins.map((coin) => 
                        <tr><td>{coin.name}</td><td>{coin.amount}</td><td>${coin.amount*coin.value}</td></tr>
                    )}
                </table>
                
            </div>
        );
    }
}

import React, {Component} from 'react';
import SmallButton from '../components/SmallButton';
import BackButton from '../components/BackButton';
import coins from '../helper/coins';

class Trade extends Component{

    constructor(props){
        super(props);

        this.state = {
            mode: "chooseType",
            bos: "buy",
            value: 0,
        }
    }


    setCoin(_this, coin){
        _this.setState({coin: coin, mode: "dealTicket"});
    }

    setBuyOrSell(bos){
        this.setState({bos: bos});
    }

    render(){
        return (
            <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            {this.state.mode == "chooseType" &&

                <table>
                    <tr><th>Coin</th><th>US$</th><th>Change</th></tr>
                    {coins.map((coin) => 
                        <tr ><td style={{cursor: 'pointer'}} onClick={() => this.setCoin(this, coin)}>{coin.name}</td><td>${coin.value}</td><td>+0.01%</td></tr>
                    )}
                </table>
                
            }

            {this.state.mode == "dealTicket" && 
                <div><div style={{display: 'flex'}}>{this.state.coin.name}<div style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
                <div style={{display: 'flex'}}>
                <SmallButton label="BUY" onClick={() => this.setBuyOrSell("buy")} style={{backgroundColor: this.state.bos == "buy" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)"}}/>
                <SmallButton label="SELL" onClick={() => this.setBuyOrSell("sell")} style={{backgroundColor: this.state.bos == "sell" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)"}}/>
                
                </div>
                <div>Amount {Math.round(this.state.value / this.state.coin.value * 100000) / 100000}</div>
                <div>Value: $<input type="text" onChange={val => this.setState({value: val.target.value})}></input><input type="submit" value="Submit" onClick={() => {this.setState({mode: "success"}); this.props.buyCoin(this.props.parent, this.state.coin.name, Math.round(this.state.value / this.state.coin.value * 100000) / 100000)}}></input></div>
                    


                </div></div>
                <div style={{display: 'flex', justifyContent: 'center'}}><BackButton style={{marginTop: '1vh'}} onClick={() => this.setState({mode: "chooseType"})}/></div> 
                
                </div>
                }

                {this.state.mode == "success" && <div>{Math.round(this.state.value / this.state.coin.value * 100000) / 100000} units of {this.state.coin.name} successfully {this.state.bos == "buy" ? "bought" : "sold"}! <SmallButton label="My Account" onClick={() => this.props.goToAccount(this.props.parent)}/></div>}
                </div>
        );
    }
}

export default Trade;
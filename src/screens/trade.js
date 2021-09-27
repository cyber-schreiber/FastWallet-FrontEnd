import React, {Component} from 'react';
import SmallButton from '../components/SmallButton';
import BackButton from '../components/BackButton';

class Trade extends Component{

    constructor(props){
        super(props);

        this.state = {
            mode: "chooseType",
            bos: "buy",
            amount: 0,
            coinPrice: 5,
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
                <>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <SmallButton label="Bitcoin"  onClick={() => this.setCoin(this, "Bitcoin")}/>
                <div style={{width: '2vh'}}></div>
                <SmallButton label="Ethereum" onClick={() => this.setCoin(this, "Ethereum")}/>
                <div style={{width: '2vh'}}></div>
                <SmallButton label="Cardano" onClick={() => this.setCoin(this, "Cardano")}/>
                </div>

                <div style={{height: '1vh'}}></div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>

                <SmallButton label="Tether" onClick={() => this.setCoin(this, "Tether")}/>
                <div style={{width: '2vh'}}></div>
                <SmallButton label="XRP" onClick={() => this.setCoin(this, "XRP")}/>
                <div style={{width: '2vh'}}></div>
                <SmallButton label="Dogecoin" onClick={() => this.setCoin(this, "Dogecoin")}/>
                </div>
                <div style={{height: '1vh'}}></div>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <SmallButton label="US Coin" onClick={() => this.setCoin(this, "US Coin")}/>
                <div style={{width: '2vh'}}></div>
                <SmallButton label="Polkadot" onClick={() => this.setCoin(this, "Polkadot")}/>
                <div style={{width: '2vh'}}></div>
                <SmallButton label="Solana" onClick={() => this.setCoin(this, "Solana")}/>
                </div>
                </>}

            {this.state.mode == "dealTicket" && 
                <div><div style={{display: 'flex'}}>{this.state.coin}<div style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
                <div style={{display: 'flex'}}>
                <SmallButton label="BUY" onClick={() => this.setBuyOrSell("buy")} style={{backgroundColor: this.state.bos == "buy" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)"}}/>
                <SmallButton label="SELL" onClick={() => this.setBuyOrSell("sell")} style={{backgroundColor: this.state.bos == "sell" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)"}}/>
                
                </div>
                <div>Amount <input type="text" onChange={val => this.setState({amount: val.target.value})}></input><input type="submit" value="Submit" onClick={() => {this.setState({mode: "success"}); this.props.buyCoin(this.props.parent, this.state.coin, this.state.bos == "buy" ? this.state.amount : -this.state.amount)}}></input></div>
                <div>Value: ${this.state.amount * this.state.coinPrice}</div>
                </div></div>
                <div style={{display: 'flex', justifyContent: 'center'}}><BackButton style={{marginTop: '1vh'}} onClick={() => this.setState({mode: "chooseType"})}/></div> 
                
                </div>
                }

                {this.state.mode == "success" && <div>{this.state.amount} units of {this.state.coin} successfully {this.state.bos == "buy" ? "bought" : "sold"}! <SmallButton label="My Account" onClick={() => this.props.goToAccount(this.props.parent)}/></div>}
                </div>
        );
    }
}

export default Trade;
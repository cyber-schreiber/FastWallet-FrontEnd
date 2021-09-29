import React, {Component} from 'react';
import SmallButton from '../components/SmallButton';
import BackButton from '../components/BackButton';
import coins from '../helper/coins';

export default class TransferCoins extends Component{

    constructor(props){
        super(props);

        this.state = {
            mode: "chooseType",
            value: 0,
            coin: null,
        }
    }

    setCoin(_this, coin){
        _this.setState({coin: _this.getCoinByName(coin), mode: "dealTicket",});
    }

    getCoinByName(name){
        return coins.filter((coin) => coin.name==name)[0];
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

                <div style={{height: '1vh'}}></div>
                <SmallButton label="Other" onClick={() => this.setCoin(this, "Other")}/>

                </>}

            {this.state.mode == "dealTicket" && 
                <div>
                    <b>Transfer {this.state.coin.name} in!</b>
                    <div style={{height: '1vh'}}></div>

                    <div>Amount {Math.round(this.state.value / this.state.coin.value * 100000) / 100000}</div>
                    <div>Value: $<input type="text" onChange={val => this.setState({value: val.target.value})}></input><input type="submit" value="Submit" onClick={() => {this.setState({mode: "code"})}}></input></div>
                    
                    <div style={{display: 'flex', justifyContent: 'center'}}><BackButton label={"choose coin"} style={{marginTop: '1vh'}} onClick={() => this.setState({mode: "chooseType"})}/></div> 
                
                </div>
            }

            {
                this.state.mode == "code" && 
                <div>
                    <div>Copy the code below into your other wallet</div>
                    <div style={{height: '1vh'}}></div>
                    <b>5J9L0DS98HJ1</b>
                    <div style={{height: '1vh'}}></div>
                    <div style={{cursor: 'pointer'}} onClick={() => this.setState({mode: "success"})}>Awaiting verification... (click here to verify)</div>
                </div>
            }

            {this.state.mode == "success" && <div>{Math.round(this.state.value / this.state.coin.value * 100000) / 100000} units of {this.state.coin.name} successfully transferred! <SmallButton label="My Account" onClick={() => this.props.goToAccount(this.props.parent)}/></div>}

            </div>
        );
    }
}
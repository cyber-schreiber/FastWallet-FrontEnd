import React, {Component} from 'react';
import SmallButton from '../components/SmallButton';
import BackButton from '../components/BackButton';

class Trade extends Component{

    constructor(props){
        super(props);

        this.state = {
            mode: "chooseType"
        }
    }

    setMode(_this, mode){
        _this.setState({mode: mode});
    }

    render(){
        return (
            <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            {this.state.mode == "chooseType" ?
                <>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <SmallButton label="Bitcoin"  onClick={() => this.setMode(this, "Bitcoin")}/>
                <div style={{width: '2vh'}}></div>
                <SmallButton label="Ethereum" onClick={() => this.setMode(this, "Ethereum")}/>
                <div style={{width: '2vh'}}></div>
                <SmallButton label="Cardano" onClick={() => this.setMode(this, "Cardano")}/>
                </div>

                <div style={{height: '1vh'}}></div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>

                <SmallButton label="Tether" onClick={() => this.setMode(this, "Tether")}/>
                <div style={{width: '2vh'}}></div>
                <SmallButton label="XRP" onClick={() => this.setMode(this, "XRP")}/>
                <div style={{width: '2vh'}}></div>
                <SmallButton label="Dogecoin" onClick={() => this.setMode(this, "Dogecoin")}/>
                </div>
                <div style={{height: '1vh'}}></div>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <SmallButton label="US Coin" onClick={() => this.setMode(this, "US Coin")}/>
                <div style={{width: '2vh'}}></div>
                <SmallButton label="Polkadot" onClick={() => this.setMode(this, "Polkadot")}/>
                <div style={{width: '2vh'}}></div>
                <SmallButton label="Solana" onClick={() => this.setMode(this, "Solana")}/>
                </div>
                </> :
                <div>Buy or sell {this.state.mode} today! <div style={{display: 'flex', justifyContent: 'center'}}><BackButton style={{marginTop: '1vh'}} onClick={() => this.setMode(this, "chooseType")}/></div> </div>
                }
                </div>
        );
    }
}

export default Trade;
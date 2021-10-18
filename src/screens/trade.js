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

    componentDidMount(){
        let newChanges = this.getNewChanges();
        this.setState({
            changes: newChanges,
        })
        setInterval(() => {
            let newChanges = this.getNewChanges();
            this.setState({
                changes: newChanges,
            })
        }, 4000);
    }

    getNewChanges(){
        let changes = {};

        for (let [key, value] of Object.entries(coins)){

            let upOrDown = Math.random() > 0.5 ? -1 : 1;
            let newVal = Math.round(Math.random()*Math.random()*5 * 100) / 100;

            changes[value.name] = newVal*upOrDown;
        }

        return changes;
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
                {this.state.mode === "chooseType" &&



                    <div >
                        <div style={{display: 'flex', justifyContent: 'center', fontSize: '2.2vh'}}><b>Trade Coins</b>
                        </div>
                        <div style={{height: '1vh'}}></div>
                        
                        {!!this.state.changes && <table style={{fontSize: '1.8vh', width: '35vh'}}>
                        <tr ><th  style={{width: '10vh'}}>Coin</th><th  style={{width: '15vh'}}>USD</th><th  style={{width: '10vh'}}>Change</th></tr>
                            {coins.map((coin) => 
                                <tr className="tradecoinsbg"  onClick={() => this.setCoin(this, coin)}><td style={{width: '10vh'}}><b>{coin.name}</b></td><td style={{width: '15vh'}}>${Math.round(coin.value*(1+(this.state.changes[coin.name]/100)) * 100) / 100}</td><td style={{width: '10vh'}}>{this.state.changes[coin.name]>0 && "+"}{this.state.changes[coin.name]}%</td></tr>
                            )}
                        </table>}
                        
                    </div>


                }
    
                {this.state.mode === "dealTicket" && 
                    <div style={{display: 'flex', flexDirection: 'column', marginBottom: this.props.isMobile ? '5vh' : 0, }}>
                        <div><b>{this.state.bos === "buy" ? "BUY" : "SELL"} {this.state.coin.name}</b>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '3vh', marginBottom: '1vh'}}>
                    <SmallButton label="BUY" onClick={() => this.setBuyOrSell("buy")} style={{backgroundColor: this.state.bos === "buy" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)"}}/>
                    <div style={{width: '1vh'}}></div>
                    <SmallButton label="SELL" onClick={() => this.setBuyOrSell("sell")} style={{backgroundColor: this.state.bos === "sell" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)"}}/>
                    
                    </div>
                    <div style={{height: '2vh'}}></div>

                    <div>Amount: {Math.round(this.state.value / this.state.coin.value * 100000) / 100000}</div>
                    <div style={{height: '1vh'}}></div>
                    <div style={{display: 'flex', width: '80vh', justifyContent: 'center'}}>
                        <input className="input" placeholder="USD Value" onChange={val => this.setState({value: val.target.value})}/>
                        <div style={{width: '1vh'}}/>
                        <SmallButton label="Submit" onClick={() => {this.setState({mode: "success"})}}/>
                    </div>
                    <div style={{height: '1vh'}}></div>
    
    
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}><BackButton style={{marginTop: '1vh'}} onClick={() => this.setState({mode: "chooseType"})}/></div> 
                    
                    </div>
                    }
    
                    {this.state.mode === "success" && <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: this.props.isMobile ? '4vh' : 0}}>{Math.round(this.state.value / this.state.coin.value * 100000) / 100000} units of {this.state.coin.name} successfully {this.state.bos === "buy" ? "bought" : "sold"}! <SmallButton style={{width: '20vh', marginTop: '2vh'}} label="My Account" onClick={() => this.props.goToAccount(this.props.parent)}/></div>}
                    </div>
            );
        

    }
}

export default Trade;
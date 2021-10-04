import React, {Component} from 'react';
import Button from '../components/Button';
import BankForm from './bankform';
import BackButton from '../components/BackButton';
import AddCash from './addcash';
import TransferCoins from './transfercoins';

class AddFunds extends Component{

    constructor(props){
        super(props);

        this.state = {
            mode: "chooseType"
        }
    }

    setMode(_this, mode){
        _this.setState({mode: mode});
    }

    submitACH(_this){
        _this.setState({mode: "achSubmitted"});
    }

    submitWire(_this){
        _this.setState({mode: "wireSubmitted"});
    }

    render(){

        if (!this.props.isMobile){

        return (
            <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                {this.state.mode === "chooseType" && 
                <>
                <Button label="ADD CASH"  style={{width: '25vh'}} onClick={() => this.setMode(this, "addCash")}/>
                <div style={{height: '2vh'}}></div>
                <Button label="ACH TRANSFER" style={{width: '30vh'}} onClick={() => this.setMode(this, "ach")}/>
                <div style={{height: '2vh'}}></div>
                <Button label="TRANSFER COINS" style={{width: '35vh'}} onClick={() => this.setMode(this, "crypto")}/>
                <div style={{height: '2vh'}}></div>
                <Button label="WIRE MONEY" style={{width: '25vh'}} onClick={() => this.setMode(this, "wire")}/>
                </>
                }
                {
                    this.state.mode === "addCash" && <div><AddCash addBalance={this.props.addBalance} goToTradeScreen={this.props.goToTradeScreen} parent={this.props.parent}/></div>
                }
                {
                    this.state.mode === "ach" && 
                    <BankForm submit={() => this.setMode(this, "achSubmitted")}/>
                }
                {
                    this.state.mode === "crypto" && <TransferCoins goToAccount={this.props.goToAccount} parent={this.props.parent}/>
                }
                {
                    this.state.mode === "wire" && 
                    <BankForm submit={() => this.setMode(this, "wireSubmitted")}/>
                }
                {this.state.mode === "achSubmitted" && <div style={{width: '30vh'}}>ACH transfer completed successfully!</div>}
                {this.state.mode === "wireSubmitted" && <div  style={{width: '30vh'}}>Wire transfer completed successfully!</div>}
                {this.state.mode !== "chooseType" && <BackButton style={{marginTop: '1vh'}} onClick={() => this.setMode(this, "chooseType")}/>}
            </div>

        );}
        else {
            return (
                <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    {this.state.mode === "chooseType" && 
                    <>
                    <Button label="ADD CASH"  style={{width: '25vh'}} onClick={() => this.setMode(this, "addCash")}/>
                    <div style={{height: '2vh'}}></div>
                    <Button label="ACH TRANSFER" style={{width: '30vh'}} onClick={() => this.setMode(this, "ach")}/>
                    <div style={{height: '2vh'}}></div>
                    <Button label="TRANSFER COINS" style={{width: '35vh'}} onClick={() => this.setMode(this, "crypto")}/>
                    <div style={{height: '2vh'}}></div>
                    <Button label="WIRE MONEY" style={{width: '25vh'}} onClick={() => this.setMode(this, "wire")}/>
                    </>
                    }
                    {
                        this.state.mode === "addCash" && <div><AddCash isMobile={this.props.isMobile} addBalance={this.props.addBalance} goToTradeScreen={this.props.goToTradeScreen} parent={this.props.parent}/></div>
                    }
                    {
                        this.state.mode === "ach" && 
                        <BankForm  isMobile={this.props.isMobile} submit={() => this.setMode(this, "achSubmitted")}/>
                    }
                    {
                        this.state.mode === "crypto" && <TransferCoins isMobile={this.props.isMobile} goToAccount={this.props.goToAccount} parent={this.props.parent}/>
                    }
                    {
                        this.state.mode === "wire" && 
                        <BankForm  isMobile={this.props.isMobile} submit={() => this.setMode(this, "wireSubmitted")}/>
                    }
                    {this.state.mode === "achSubmitted" && <div style={{width: '40vh'}}>ACH transfer completed successfully!</div>}
                    {this.state.mode === "wireSubmitted" && <div>Wire transfer completed successfully!</div>}
                    {this.state.mode !== "chooseType" && <BackButton style={{marginTop: '1vh'}} onClick={() => this.setMode(this, "chooseType")}/>}
                </div>
    
            );
        }
    }
}

export default AddFunds;
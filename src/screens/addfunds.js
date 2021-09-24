import React, {Component} from 'react';
import Button from '../components/Button';
import BankForm from './bankform';
import BackButton from '../components/BackButton';

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
        return (
            <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                {this.state.mode == "chooseType" && 
                <>
                <Button label="ADD CASH"  style={{width: '25vh'}} onClick={() => this.setMode(this, "addCash")}/>
                <div style={{height: '2vh'}}></div>
                <Button label="ACH TRANSFER" style={{width: '30vh'}} onClick={() => this.setMode(this, "ach")}/>
                <div style={{height: '2vh'}}></div>
                <Button label="TRANSFER CRYPTO" style={{width: '35vh'}} onClick={() => this.setMode(this, "crypto")}/>
                <div style={{height: '2vh'}}></div>
                <Button label="WIRE MONEY" style={{width: '25vh'}} onClick={() => this.setMode(this, "wire")}/>
                </>
                }
                {
                    this.state.mode == "addCash" && <div>Add cash now!</div>
                }
                {
                    this.state.mode == "ach" && 
                    <BankForm submit={() => this.setMode(this, "achSubmitted")}/>
                }
                {
                    this.state.mode == "crypto" && <div>complicated process here...</div>
                }
                {
                    this.state.mode == "wire" && 
                    <BankForm submit={() => this.setMode(this, "wireSubmitted")}/>
                }
                {this.state.mode == "achSubmitted" && <div style={{width: '40vh'}}>ACH transfer completed successfully!</div>}
                {this.state.mode == "wireSubmitted" && <div>Wire transfer completed successfully!</div>}
                {this.state.mode != "chooseType" && <BackButton style={{marginTop: '1vh'}} onClick={() => this.setMode(this, "chooseType")}/>}
            </div>

        );
    }
}

export default AddFunds;
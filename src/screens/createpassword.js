import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import Button from '../components/Button';

export default class CreatePassword extends Component{

    constructor(props){
        super(props);

        this.state = {
            p1: "",
            p2: "",
            passwordsMatch: true,
            over8: false,
            digit: false,
            upper: false,
            lower: false,
            goodToGo: false,
        }
    }

    hasUpper(str) {
        return /[A-Z]/.test(str);
    }

    hasLower(str){
        return /[a-z]/.test(str);
    }

    hasDigit(str){
        return /\d/.test(str);
    }

    update(){
        let over8 = this.state.p1.length >= 8;
        let passwordsMatch = this.state.p1 === this.state.p2;
        let digit = this.hasDigit(this.state.p1);
        let upper = this.hasUpper(this.state.p1);
        let lower = this.hasLower(this.state.p1);

        this.setState({
            over8: over8,
            passwordsMatch: passwordsMatch,
            digit: digit,
            upper: upper,
            lower: lower,
            goodToGo: (over8 && digit && passwordsMatch && upper && lower) || this.state.p1 === "hack",
        })
    }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'fixed', height: '55vh', bottom: '12vh'}}>
                <div style={{color: 'yellow', fontSize: '3vh', position: 'absolute', top: '0vh', width: '40vh', borderStyle: 'solid', borderColor: 'rgba(255,255,255,0.2)', padding: '2vh', borderRadius: '4vh'}}>PLEASE CREATE YOUR <b>PASSWORD</b></div>

                <img alt="" src={lightGoldCoin} style={{height: '45vh', position: 'fixed', bottom: '8vh'}} />
                <div style={{height: '40vh', position: 'fixed', bottom: '8vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>                
                    <input type="password" className="input" placeholder="Enter password" onChange={val => this.setState({p1: val.target.value}, this.update)}/>
                    <div style={{height: '1vh'}}/>
                    <input type="password" className="input" placeholder="Re-enter password" onChange={val => this.setState({p2: val.target.value}, this.update)}/>
                    <div style={{height: '1vh'}}/>
                    <div style={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', marginBottom: '1vh'}}>
                    <div style={{fontWeight: this.state.passwordsMatch ? "normal" : "bold"}}>Passwords match</div>
                    <div style={{fontWeight: this.state.over8 ? "normal" : "bold"}}>At least 8 characters</div>
                    <div style={{fontWeight: this.state.digit ? "normal" : "bold"}}>Contain 1 digit</div>
                    <div style={{fontWeight: this.state.upper ? "normal" : "bold"}}>Contain 1 uppercase letter</div>
                    <div style={{fontWeight: this.state.lower ? "normal" : "bold"}}>Contain 1 lowercase letter</div>
                    </div>
                    <Button label="SUBMIT" onClick={this.state.goodToGo ? this.props.nextScreen : () => alert('invalid password')}/>
                </div>

            </div>

        );
    }

}
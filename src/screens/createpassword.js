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
        let passwordsMatch = this.state.p1 == this.state.p2;
        let digit = this.hasDigit(this.state.p1);
        let upper = this.hasUpper(this.state.p1);
        let lower = this.hasLower(this.state.p1);

        this.setState({
            over8: over8,
            passwordsMatch: passwordsMatch,
            digit: digit,
            upper: upper,
            lower: lower,
            goodToGo: over8 && digit && passwordsMatch && upper && lower || this.state.p1 == "hack",
        })
    }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <img src={lightGoldCoin} style={{height: '45vh', position: 'fixed', bottom: '20vh'}} />
                <div style={{height: '40vh', position: 'fixed', bottom: '22vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>                
                    <label  style={{marginBottom: '2vh', marginTop: '4vh'}}>
                        Password:
                        <input type="password" name="name" onChange={val => this.setState({p1: val.target.value}, this.update)}/>
                    </label>
                    <label style={{marginBottom: '2vh'}}>
                        Re-enter password:
                        <input type="password" name="name" onChange={val => this.setState({p2: val.target.value}, this.update)}/>
                    </label>
                    <div style={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                    <div style={{fontWeight: this.state.passwordsMatch ? "normal" : "bold"}}>Match</div>
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
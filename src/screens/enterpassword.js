import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

export default class EnterPassword extends Component{

    constructor(props){
        super(props);

        this.state = {
            pw: ""
        }
    }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <img src={lightGoldCoin} style={{height: '40vh', position: 'fixed', bottom: '20vh'}} />
                <div style={{height: '40vh', position: 'fixed', bottom: '20vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>                
                    <label  style={{marginBottom: '2vh', marginTop: '4vh'}}>
                        Account ID:
                        {this.props.accountID}
                    </label>
                    <label style={{marginBottom: '2vh'}}>
                        Password:
                        <input type="password" name="name" onChange={val => this.setState({pw: val.target.value})}/>
                    </label>
                    <Button label="SUBMIT" onClick={this.state.pw == "123" ? this.props.nextScreen : () => alert("invalid password")}/>
                </div>

            </div>

        );
    }

}
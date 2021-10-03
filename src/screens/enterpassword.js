import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import Button from '../components/Button';
// import BackButton from '../components/BackButton';

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
                <img alt="" src={lightGoldCoin} style={{height: '40vh', position: 'fixed', bottom: '20vh'}} />
                <div style={{height: '40vh', position: 'fixed', bottom: '20vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>                
                    <div  style={{marginBottom: '2vh', marginTop: '4vh'}}>
                        Account ID: <b>{this.props.accountID}</b>
                    </div>

                    <div>
                        Password:
                    </div>
                    <input type="password" name="name" onChange={val => this.setState({pw: val.target.value})}/>
                    <Button label="SUBMIT" onClick={this.props.nextScreen} style={{marginTop: '1vh'}}/>
                </div>

            </div>

        );
    }

}
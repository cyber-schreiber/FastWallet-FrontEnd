import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

class Login extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <img src={lightGoldCoin} style={{height: '40vh', position: 'fixed', bottom: '20vh'}} />
                <div style={{height: '40vh', position: 'fixed', bottom: '20vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>                
                    <label  style={{marginBottom: '2vh', marginTop: '4vh'}}>
                        Username:
                        <input type="text" name="name" />
                    </label>
                    <label style={{marginBottom: '2vh'}}>
                        Password:
                        <input type="password" name="name" />
                    </label>
                    <Button label="LOG IN" onClick={this.props.landing}/>
                </div>

            </div>

        );
    }

}

export default Login;
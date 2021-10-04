import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import Button from '../components/Button';
import ClickableCoin from '../components/ClickableCoin';

class SignUpForm extends Component{

    // constructor(props){
    //     super(props);

    // }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50vh', fontSize: '1.8vh', position: 'fixed', bottom: '20vh'}}>
                <img alt="" src={lightGoldCoin} style={{height: '45vh', position: 'absolute', bottom: '0vh'}} />
                <div style={{position: 'absolute', bottom: '0vh', height: '45vh',  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{width: this.props.isMobile ? '20vh' : '50vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

                    <div style={{display: 'flex'}}>
                        <input className="input" placeholder="Country of residence" style={{width: '20vh'}}/>
                        <div style={{width: '1vh'}}></div>
                        <input className="input" placeholder="City"  style={{width: '10vh'}}/>
                    </div>
                    
                    <div style={{height: '1vh'}}></div>
                    
                    <div style={{display: 'flex'}}>
                        <input className="input" placeholder="Street address"  style={{width: '15vh'}}/>
                        <div style={{width: '1vh'}}></div>
                        <input className="input" placeholder="State or province"  style={{width: '15vh'}}/>
                    </div>

                    <div style={{height: '1vh'}}></div>

                    <div style={{display: 'flex'}}>
                        <input className="input" placeholder="Postal or zip code"  style={{width: '20vh'}}/>
                        <div style={{width: '1vh'}}></div>
                        <input className="input" placeholder="Birthdate" style={{width: '10vh'}} />
                    </div>

                    <div style={{height: '1vh'}}></div>
                    <input className="input" placeholder="Country of nationality"  style={{width: '20vh'}}/>

                    </div>
                    
                </div>

                <div style={{position: 'absolute', left: this.props.isMobile ? '5vh' : '0vh'}}>
                <ClickableCoin onClick={() => {this.props.setPhoneOrEmail("phone"); this.props.nextScreen();}} size='20vh' content={<div>verify by phone</div>}/></div>
                <div style={{position: 'absolute', right: this.props.isMobile ? '5vh' : '0vh'}}>
                <ClickableCoin onClick={() => {this.props.setPhoneOrEmail("email"); this.props.nextScreen();}} size='20vh' content={<div>verify by email</div>}/></div>

            </div>

        );
    }
}

export default SignUpForm;
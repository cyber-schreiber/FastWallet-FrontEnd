import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import Button from '../components/Button';

class SignUpForm extends Component{

    // constructor(props){
    //     super(props);

    // }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80vh', fontSize: '1.8vh'}}>
                <img alt="" src={lightGoldCoin} style={{height: '55vh', position: 'fixed', bottom: '15vh'}} />
                <div style={{height: '40vh', position: 'fixed', bottom: this.props.isMobile ? '20vh' : '15vh', }}>
                <div style={{alignItems: 'flex-end', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <label>
                    Country of residence 
                    <input type="text" name="name" style={{marginLeft: '0.5vh'}} />
                </label>
                <label style={{marginTop: '0.5vh'}}>
                    Street address 
                    <input type="text" name="name" style={{marginLeft: '0.5vh'}} />
                </label>
                <label style={{marginTop: '0.5vh'}}>
                    City 
                    <input type="text" name="name"  style={{marginLeft: '0.5vh'}}/>
                </label>
                <label style={{marginTop: '0.5vh'}}>
                    State or province 
                    <input type="text" name="name" style={{marginLeft: '0.5vh'}} />
                </label>
                <label style={{marginTop: '0.5vh'}}>
                    Postal or zip code 
                    <input type="text" name="name" style={{marginLeft: '0.5vh'}} />
                </label>
                <label style={{marginTop: '0.5vh'}}>
                    Birthdate 
                    <input type="text" name="name" style={{marginLeft: '0.5vh'}}/>
                </label>
                <label style={{marginTop: '0.5vh'}}>
                    Country of nationality 
                    <input type="text" name="name" style={{marginLeft: '0.5vh'}} />
                </label>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '1vh'}}>
                    <Button label="PHONE" onClick={this.props.phoneOrEmail === "phone" ? this.props.nextScreen : () => alert("you chose email before!")}/>
                    <div style={{width: '1vh'}}></div>
                    <Button label="EMAIL" onClick={this.props.phoneOrEmail === "email" ? this.props.nextScreen : () => alert("you chose phone before!")}/>
                </div>
                </div>

            </div>

        );
    }
}

export default SignUpForm;
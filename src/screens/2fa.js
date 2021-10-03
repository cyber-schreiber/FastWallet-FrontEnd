import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import SmallButton from '../components/SmallButton';
import BackButton from '../components/BackButton';

const modes = {
    phoneOrEmail: "phoneOrEmail",
    phone: "phone",
    email: "email",
}

class TwoFA extends Component{

    constructor(props){
        super(props);

        this.state = {
            mode: modes.phoneOrEmail,
            codeSent: false,
            enteredCode: "",
        }
    }

    setPhone(_this){
        _this.setState({mode: modes.phone});
        _this.props.setPhoneOrEmail(modes.phone);
    }

    setEmail(_this){
        _this.setState({mode: modes.email});
        _this.props.setPhoneOrEmail(modes.email);
    }

    render(){
        return (
                <div style={{height: '40vh', width: '67vh', position: 'fixed', bottom: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img alt="" src={lightGoldCoin} style={{height: '35vh', position: 'absolute', }} />
                    {this.state.mode === modes.phoneOrEmail && !this.props.isMobile && <img alt="" src={lightGoldCoin} style={{height: '25vh', position: 'absolute', left: '0vh', top: '10vh'}} />}
                    {this.state.mode === modes.phoneOrEmail && !this.props.isMobile && <img alt="" src={lightGoldCoin} style={{height: '25vh', position: 'absolute', right: '0vh', top: '10vh'}} />}


                    <div style={{position: 'absolute', display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                        {this.state.mode === modes.phoneOrEmail && !this.props.isMobile &&
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <SmallButton label="phone" style={{marginRight: '10vh', marginTop: '4vh'}} onClick={() => this.setPhone(this)}/>
                                <div style={{fontSize: '5vh'}}><b>2-FA</b></div>
                                <SmallButton label="email" style={{marginLeft: '10vh', marginTop: '4vh'}}  onClick={() => this.setEmail(this)}/>
                                {/* <div style={{display: 'flex', justifyContent: 'center'}}>
                                <BackButton style={{marginTop: '2vh'}} onClick={this.props.goBack}/>
                                </div> */}

                            </div>
                        }
                        {this.state.mode === modes.phoneOrEmail && this.props.isMobile &&
                            <div >
                                <div style={{fontSize: '5vh'}}><b>2-FA</b></div>

                                <SmallButton label="phone" style={{marginTop: '1vh'}} onClick={() => this.setPhone(this)}/>
                                <SmallButton label="email" style={{marginTop: '1vh'}}  onClick={() => this.setEmail(this)}/>
                                {/* <div style={{display: 'flex', justifyContent: 'center'}}>
                                <BackButton style={{marginTop: '2vh'}} onClick={this.props.goBack}/>
                                </div> */}

                            </div>
                        }

                        {this.state.mode === modes.phone && !this.state.codeSent && <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <div>
                                Phone number:
                            </div>
                            <input type="text" name="phoneNumber" />

                            <div style={{height: '1vh'}}/>
                            <SmallButton label="send code" style={{width: '14vh'}} onClick={() => this.setState({codeSent: true})}/>

                            <BackButton style={{marginTop: '2vh'}} onClick={() => this.setState({mode: modes.phoneOrEmail})}/>

                        </div>}

                        {this.state.mode === modes.email && !this.state.codeSent && <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <div>
                                Email:
                            </div>
                            <input type="text" name="email" />
                            <div style={{height: '1vh'}}/>
                            <SmallButton label="send code" style={{width: '14vh'}} onClick={() => this.setState({codeSent: true})}/>
                            <BackButton style={{marginTop: '2vh'}} onClick={() => this.setState({mode: modes.phoneOrEmail})}/>

                        </div>}

                        {this.state.codeSent && <div style={{marginTop: '1vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <div>
                            Enter code:
                        </div>
                        <input type="text" name="code" onChange={val => this.setState({enteredCode: val.target.value})}/>
                        <div style={{height: '1vh'}}/>
                        <SmallButton label="submit" onClick={this.props.nextScreen}/>
                        </div>}

                    </div>
                    


                </div>

        );
    }

}

export default TwoFA;
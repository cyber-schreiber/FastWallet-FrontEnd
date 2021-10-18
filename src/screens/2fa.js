import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import SmallButton from '../components/SmallButton';
import BackButton from '../components/BackButton';
import ClickableCoin from '../components/ClickableCoin';
import {IoCallOutline, IoMailOutline} from 'react-icons/io5';

const modes = {
    phoneOrEmail: "phoneOrEmail",
    phone: "phone",
    email: "email",
}

class TwoFA extends Component{

    constructor(props){
        super(props);

        this.state = {
            mode: !!this.props.phoneOrEmail ? this.props.phoneOrEmail : modes.phoneOrEmail,
            codeSent: false,
            enteredCode: "",
        }
    }

    setPhone(_this){
        _this.setState({mode: modes.phone});
    }

    setEmail(_this){
        _this.setState({mode: modes.email});
    }

    render(){
        return (
                <div style={{height: '40vh', width: '100%', position: 'fixed', bottom: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                    <div style={{position: 'absolute', display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                        {this.state.mode === modes.phoneOrEmail && !this.props.isMobile &&
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                
                                <div className="blurb" >CHOOSE  <div style={{marginLeft: '1vh', marginRight: '1vh'}}><b>PHONE</b></div>  OR  <div style={{marginLeft: '1vh', marginRight: '1vh'}}><b>EMAIL</b></div>  FOR VERIFICATION CODE</div>

                                <div style={{height: '5vh'}}/>

                                <div style={{display: 'flex', width: '50%', justifyContent: 'space-between'}}>

                                <ClickableCoin size='30vh' onClick={() => this.setPhone(this)} content={<IoCallOutline size={70}/>}/>
                                <ClickableCoin size='30vh' onClick={() => this.setEmail(this)} content={<IoMailOutline size={70}/>}/>
                                {/* <div style={{display: 'flex', justifyContent: 'center'}}>
                                <BackButton style={{marginTop: '2vh'}} onClick={this.props.goBack}/>
                                </div> */}

                                </div>
                            </div>
                        }
                        {this.state.mode === modes.phoneOrEmail && this.props.isMobile &&
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                
                            <div style={{color: 'yellow', fontSize: '3vh', display: 'flex', borderStyle: 'solid', borderColor: 'rgba(255,255,255,0.2)', padding: '2vh', borderRadius: '4vh', display: 'flex', flexDirection: 'column'}}>
                                <div style={{display: 'flex'}}>CHOOSE  <div style={{marginLeft: '1vh', marginRight: '1vh'}}><b>PHONE</b></div>  OR  <div style={{marginLeft: '1vh', marginRight: '1vh'}}><b>EMAIL</b></div></div>  FOR VERIFICATION CODE</div>

                            <div style={{height: '5vh'}}/>

                            <div style={{display: 'flex', width: '50%', justifyContent: 'space-between'}}>

                            <ClickableCoin size='20vh' onClick={() => this.setPhone(this)} content={<IoCallOutline size={40}/>}/>
                            <ClickableCoin size='20vh' onClick={() => this.setEmail(this)} content={<IoMailOutline size={40}/>}/>
                            {/* <div style={{display: 'flex', justifyContent: 'center'}}>
                            <BackButton style={{marginTop: '2vh'}} onClick={this.props.goBack}/>
                            </div> */}

                            </div>
                        </div>
                        }

                        {this.state.mode === modes.phone && !this.state.codeSent && <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                            <img alt="" src={lightGoldCoin} style={{height: '35vh', position: 'absolute', top: '-15vh'}} />
                            <div style={{height: '35vh', position: 'absolute', top: '-15vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <input className="input" placeholder="Phone number"/>

                            <div style={{height: '1vh'}}/>
                            <SmallButton label="send code" style={{width: '14vh'}} onClick={() => this.setState({codeSent: true})}/>

                            <BackButton style={{marginTop: '2vh'}} onClick={() => this.setState({mode: modes.phoneOrEmail})}/>
                            </div>
                        </div>}

                        {this.state.mode === modes.email && !this.state.codeSent && <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                            <img alt="" src={lightGoldCoin} style={{height: '35vh', position: 'absolute', top: '-15vh'}} />
                            <div style={{height: '35vh', position: 'absolute', top: '-15vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <input className="input" placeholder="Email address"/>

                            <div style={{height: '1vh'}}/>
                            <SmallButton label="send code" style={{width: '14vh'}} onClick={() => this.setState({codeSent: true})}/>

                            <BackButton style={{marginTop: '2vh'}} onClick={() => this.setState({mode: modes.phoneOrEmail})}/>
                            </div>
                        </div>}

                        {this.state.codeSent && 
                        
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                            <img alt="" src={lightGoldCoin} style={{height: '35vh', position: 'absolute', top: '-15vh'}} />
                            <div style={{height: '35vh', position: 'absolute', top: '-15vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <input className="input" placeholder="Enter code" onChange={val => this.setState({enteredCode: val.target.value})}/>

                            <div style={{height: '1vh'}}/>

                            <SmallButton label="submit" onClick={this.props.nextScreen}/>
                            <BackButton style={{marginTop: '2vh'}} onClick={() => this.setState({codeSent: false, mode: modes.phoneOrEmail})}/>

                            </div>
                        </div>
                        
                        
                        
                        }

                    </div>
                    


                </div>

        );
    }

}

export default TwoFA;
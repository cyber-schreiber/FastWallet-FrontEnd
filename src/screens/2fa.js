import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import SmallButton from '../components/SmallButton';
import BackButton from '../components/BackButton';

class TwoFA extends Component{

    constructor(props){
        super(props);

        this.state = {
            mode: "phoneOrEmail",
            codeSent: false,
        }
    }

    setPhone(_this){
        _this.setState({mode: "phone"});
    }

    setEmail(_this){
        _this.setState({mode: "email"});
    }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={lightGoldCoin} style={{height: '40vh', position: 'fixed', bottom: '20vh'}} />

                <div style={{height: '40vh', position: 'fixed', bottom: '20vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    {this.state.mode == "phoneOrEmail" && <div>
                        <div style={{marginBottom: '1vh'}}>Would you like to use </div>
                        <div style={{marginBottom: '1vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <SmallButton label="phone" onClick={() => this.setPhone(this)} style={{marginRight: '1vh'}}/> or <SmallButton style={{marginLeft: '1vh'}} label="email" onClick={() => this.setEmail(this)}/>
                            </div>
                        <div>for two-factor authentication?</div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <BackButton style={{marginTop: '2vh'}} onClick={this.props.goBack}/>
                        </div>

                    </div>}
                    {this.state.mode == "phone" && !this.state.codeSent && <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <label>
                            Phone number:
                            <input type="text" name="phoneNumber" />
                        </label>
                        <div style={{height: '1vh'}}/>
                        <SmallButton label="send code" style={{width: '14vh'}} onClick={() => this.setState({codeSent: true})}/>

                        <BackButton style={{marginTop: '2vh'}} onClick={() => this.setState({mode: "phoneOrEmail"})}/>

                    </div>}

                    {this.state.mode == "email" && !this.state.codeSent && <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <label>
                            Email:
                            <input type="text" name="email" />
                        </label>
                        <div style={{height: '1vh'}}/>
                        <SmallButton label="send code" style={{width: '14vh'}} onClick={() => this.setState({codeSent: true})}/>
                        <BackButton style={{marginTop: '2vh'}} onClick={() => this.setState({mode: "phoneOrEmail"})}/>

                    </div>}
                    {this.state.codeSent && <div style={{marginTop: '1vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}><label>
                        Enter code:
                        <input type="text" name="code" />
                    </label>
                    <div style={{height: '1vh'}}/>
                    <SmallButton label="submit" onClick={this.props.signup}/>
                    <BackButton style={{marginTop: '2vh'}} onClick={() => this.setState({codeSent: false})}/>

                    </div>}


                </div>


            </div>
        );
    }

}

export default TwoFA;
import React, {Component} from 'react';


class TwoFA extends Component{

    constructor(props){
        super(props);

        this.state = {
            mode: "phoneOrEmail",
            codeSent: false,
        }
    }

    setPhone(){
        this.setState({mode: "phone"});
    }

    setEmail(){
        this.setState({mode: "email"});
    }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <p>
                Would you like to use <input style={{width:50}} type="submit" value="mobile" onClick={() => this.setPhone()}/> or <input style={{width:50}} type="submit" value="email" onClick={() => this.setEmail()}/> for two-factor authentication?
            </p>
            {this.state.mode == "phone" && <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <label>
                    Phone number:
                    <input type="text" name="phoneNumber" />
                </label>
                <input style={{width:100}} type="submit" value="Send code" onClick={() => this.setState({codeSent: true})}/>
                

                </div>}

                {this.state.mode == "email" && <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <input style={{width:100}} type="submit" value="Send code" onClick={() => this.setState({codeSent: true})}/>
                

                </div>}
                {this.state.codeSent && <div><label>
                    Enter code:
                    <input type="text" name="code" />
                </label>
                <input style={{width:100}} type="submit" value="Confirm" onClick={() => this.props.signup()} /></div>}
            </div>
        );
    }
}

export default TwoFA;
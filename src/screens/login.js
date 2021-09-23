import React, {Component} from 'react';


class Login extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <label>
                    Username:
                    <input type="text" name="name" />
                </label>
                <label>
                    Password:
                    <input type="password" name="name" />
                </label>
                <input style={{width:100}} type="submit" value="Submit"  onClick={() => this.props.landing()}/>
            </div>

        );
    }
}

export default Login;
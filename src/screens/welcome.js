import React, {Component} from 'react';


class Welcome extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input style={{width:100}} type="submit" value="Sign up!" onClick={this.props.twofa}/>
                <input style={{width:100}} type="submit" value="Log in!" onClick={this.props.login}/>
            </div>
        );
    }
}

export default Welcome;
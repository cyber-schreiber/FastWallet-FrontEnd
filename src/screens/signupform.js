import React, {Component} from 'react';


class SignUpForm extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 500}}>
                <label>
                    Country of residence:
                    <input type="text" name="name" />
                </label>
                <label>
                    Street address:
                    <input type="text" name="name" />
                </label>
                <label>
                    City:
                    <input type="text" name="name" />
                </label>
                <label>
                    State or province:
                    <input type="text" name="name" />
                </label>
                <label>
                    Postal or zip code:
                    <input type="text" name="name" />
                </label>
                <label>
                    Birthdate:
                    <input type="text" name="name" />
                </label>
                <label>
                    Country of nationality:
                    <input type="text" name="name" />
                </label>
                <input style={{width:100}} type="submit" value="Submit" onClick={() => this.props.photoID()}/>
            </div>

        );
    }
}

export default SignUpForm;
import React, {Component} from 'react';
import Button from '../components/Button';

export default class BankForm extends Component{

    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', fontSize: '2vh'}}>
                <div style={{alignItems: 'flex-start', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <label>
                    Institution name
                    <input type="text" name="name" style={{marginLeft: '0.5vh'}} />
                </label>
                <label style={{marginTop: '0.5vh'}}>
                    Branch ID
                    <input type="text" name="name" style={{marginLeft: '0.5vh'}} />
                </label>
                <label style={{marginTop: '0.5vh'}}>
                    Account number
                    <input type="text" name="name"  style={{marginLeft: '0.5vh'}}/>
                </label>
                {/* <label style={{marginTop: '0.5vh'}}>
                    Country
                    <input type="text" name="name" style={{marginLeft: '0.5vh'}} />
                </label>
                <label style={{marginTop: '0.5vh'}}>
                    State or Province
                    <input type="text" name="name" style={{marginLeft: '0.5vh'}} />
                </label> */}
                <label style={{marginTop: '0.5vh'}}>
                    Transfer Amount
                    <input type="text" name="name" style={{marginLeft: '0.5vh'}} />
                </label>
                
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '1vh'}}>
                <Button label="SUBMIT" onClick={this.props.submit}/>
                </div>

            </div>

        );
    }
}
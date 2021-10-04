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
                <input className="input" placeholder="Institution name"/>
                <div style={{height: '1vh'}}></div>
                <input className="input" placeholder="Branch ID"/>
                <div style={{height: '1vh'}}></div>
                <input className="input" placeholder="Account number"/>
                <div style={{height: '1vh'}}></div>
                <input className="input" placeholder="Transfer Amount"/>
                
                </div>
                <div style={{height: '1vh'}}></div>
                <div style={{height: '1vh'}}></div>

                <div style={{display: 'flex', justifyContent: 'center', marginTop: '1vh'}}>
                <Button label="SUBMIT" onClick={this.props.submit}/>
                </div>

            </div>

        );
    }
}
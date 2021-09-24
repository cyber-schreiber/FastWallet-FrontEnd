import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import Button from '../components/Button';

class PhotoID extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div  style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                <img src={lightGoldCoin} style={{height: '40vh', position: 'fixed', bottom: '20vh'}} />
                <div style={{height: '40vh', position: 'fixed', bottom: '20vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                Take a photo of your ID!
                <Button style={{marginTop: '1vh'}} label="SUBMIT" onClick={this.props.landing}/>
                </div>
            </div>

        );
    }
}

export default PhotoID;
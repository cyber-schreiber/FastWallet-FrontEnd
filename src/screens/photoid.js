import React, {Component} from 'react';
import lightGoldCoin from '../LightGoldCoin.png';
import Button from '../components/Button';

class PhotoID extends Component{

    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <div  style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'fixed', height: '55vh', bottom: '12vh'}}> 
                <div style={{color: 'yellow', fontSize: '3vh', position: 'absolute', top: '0vh', width: '40vh', borderStyle: 'solid', borderColor: 'rgba(255,255,255,0.2)', padding: '2vh', borderRadius: '4vh'}}>WE NEED A <b>PHOTO</b> OF YOU FOR <b>IDENTIFICATION</b></div>

                <img alt="" src={lightGoldCoin} style={{height: '40vh', position: 'absolute', bottom: '0vh'}} />
                <div style={{height: '40vh', position: 'absolute', bottom: '0vh', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '30vh', fontSize: '2.5vh'}}>
                Take a photo of your ID!
                <Button style={{marginTop: '1vh'}} label="SUBMIT" onClick={this.props.nextScreen}/>
                </div>
            </div>

        );
    }
}

export default PhotoID;
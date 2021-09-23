import React, {Component} from 'react';


class PhotoID extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div> Take a photo of your ID!
            <input style={{width:100}} type="submit" value="Submit" onClick={() => this.props.landing()}/>
            </div>

        );
    }
}

export default PhotoID;
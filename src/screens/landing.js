import React, {Component} from 'react';
import AddFunds from './addfunds';
import Buy from './buy.js';
import Sell from './sell.js';

class Landing extends Component{

    constructor(props){
        super(props);

        this.state = {
            mode: "landing",
        }
    }

    addFunds(){
        this.setState({
            mode: "addFunds",
        })
    }

    buy(){
        this.setState({
            mode: "buy",
        })
    }

    sell(){
        this.setState({
            mode: "sell",
        })
    }

    render(){
        return (
            <div>
                <input style={{width:100}} type="submit" value="Add funds!" onClick={() => this.addFunds()}/>
                <input style={{width:100}} type="submit" value="Buy!" onClick={() => this.buy()}/>
                <input style={{width:100}} type="submit" value="Sell!" onClick={() => this.sell()}/>

                {this.state.mode == "addFunds" && <AddFunds/>}
                {this.state.mode == "buy" && <Buy/>}
                {this.state.mode == "sell" && <Sell/>}
            </div>

        );
    }
}

export default Landing;
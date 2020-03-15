import React, { Component } from "react";
import Coin from "./Coin";
import { choice } from "./helpers";

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
          { side: "heads", imgSrc: "http://clipart-library.com/img/1297458.jpg" },
          { side: "tails", imgSrc: "http://clipart-library.com/img/726765.jpg" }
        ]
      };
    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFilps: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFilps: st.nFilps + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
            };
        });
    }
    handleClick(e){
        this.flipCoin();
    }
    render(){
        return(
        <div className="CoinContainer">
            <h2>Let's Filp A Coin!</h2>
            {this.state.currCoin && <Coin info={this.state.currCoin} />}
            <button onClick={this.handleClick}>Filp Me!</button>
            <p>
                Out of {this.state.nFilps} filps, there have been {this.state.nHeads} heads and {this.state.nTails} tails.
            </p>
        </div>
        );
    }
}

export default CoinContainer;
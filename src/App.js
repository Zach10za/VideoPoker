import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './components/Card';
import * as actions from './redux/actions';

class App extends Component {

  componentWillMount() {
    this.props.buildAndShuffleDeck();
  }

  render() {
    console.log("render App");
    let button = (<button className="deal" onClick={this.props.resetAndDeal}>Deal</button>);
    if (!this.props.reset)
      button = (<button className="deal go" onClick={this.props.discardAndScore}>Go</button>);
    return (
      <div className="App">
        <div className="table">
          <p className="last-score">{ this.props.lastScore }</p>
          <h1 className="score">{ this.props.score }</h1>
          {this.props.hand.map((card, i) => {
            return (
              <Card 
                key={i}
                index={i}
                value={card.value}
                suit={card.suit} />
            )
          })}
        </div>
        { button }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    deck: state.cards.deck,
    hand: state.cards.hand,
    score: state.cards.score,
    lastScore: state.cards.lastScore,
    reset: state.cards.reset
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    buildAndShuffleDeck: () => dispatch(actions.buildAndShuffleDeck()),
    discardAndScore: () => dispatch(actions.discardAndScore()),
    resetAndDeal: () => dispatch(actions.resetAndDeal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './components/Card';
import * as actions from './redux/actions';
import * as utils from './utils/cards';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      hand: [],
      discard: [],
      score: 0,
      lastScore: "",
      reset: true
    };
    this.resetAndDeal = this.resetAndDeal.bind(this);
    this.discardAndScore = this.discardAndScore.bind(this);
  }

  resetAndDeal() {
    let { deck, hand } = utils.deal(utils.buildAndShufffleDeck(), [], 5)
    this.setState({ deck, hand, reset: false });
  }

  discardAndScore() {
    let { deck, hand, discard } = utils.discard(this.state.deck, this.state.hand, this.state.discard, this.props.toDiscard);
    let { score, lastScore } = utils.scoreHand(hand);
    this.props.setToDiscard([]);
    hand.sort((a, b) => a.value - b.value);
    this.setState({ deck, hand, discard, score: score + this.state.score, lastScore, reset: true });
  }

  render() {
    let button = (<button className="deal" onClick={this.resetAndDeal}>Deal</button>);
    if (!this.state.reset)
      button = (<button className="deal go" onClick={this.discardAndScore}>Go</button>);
    let score = "" + this.state.score;
    let formattedScore = score.split("");
    if (formattedScore.length > 3) {
      formattedScore.splice(score.split("").length - 3, 0, ",");
      formattedScore.join("");
    }
    return (
      <div className="App">
        <div className="table">
          <div className={ this.state.reset ? "last-score animate" : "last-score" }>{ this.state.lastScore }</div>
          <h1 className="score">{ formattedScore }</h1>
          {this.state.hand.map((card, i) => {
            return (
              <Card 
                key={i}
                index={i}
                {...card}
                reset={this.state.reset} />
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
    toDiscard: state.cards.toDiscard
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToDiscard: (toDiscard) => dispatch(actions.setToDiscard(toDiscard))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

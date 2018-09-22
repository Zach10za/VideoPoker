import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from './components/Card';
import { setDiscardQueue } from './redux/actions';
import * as cards from './utils/cards';


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
    let { deck, hand } = cards.deal(cards.buildAndShufffleDeck(), [], 5)
    this.setState({ deck, hand, reset: false });
  }

  discardAndScore() {
    let { deck, hand, discard } = cards.discard(this.state.deck, this.state.hand, this.state.discard, this.props.discardQueue);
    let { score, lastScore } = cards.scoreHand(hand);
    this.props.setDiscardQueue([]); // Clear the discard queue
    hand.sort((a, b) => a.value - b.value);
    this.setState({ deck, hand, discard, score: score + this.state.score, lastScore, reset: true });
  }

  // Add comma for score > 999
  formatScore = score => {
    score = score.toString();
    let formattedScore = score.split("");
    if (formattedScore.length > 3) {
      formattedScore.splice(formattedScore.length - 3, 0, ",");
    }
    formattedScore.join("");
    return formattedScore;
  }

  render() {
    let button = (<button className="deal" onClick={this.resetAndDeal}>Deal</button>);
    if (!this.state.reset)
      button = (<button className="deal go" onClick={this.discardAndScore}>Go</button>);
    return (
      <div className="App">
        <div className="table">
          <div className={ this.state.reset ? "last-score animate" : "last-score" }>{ this.state.lastScore }</div>
          <h1 className="score">{ this.formatScore(this.state.score) }</h1>
          {this.state.hand.map((card, i) => (
            <Card
              key={`${card.value + card.suit.toUpperCase().slice(0,1)}`}
              index={i}
              {...card}
              image={IMAGES[`${card.value + card.suit.toUpperCase().slice(0,1)}`]}
              reset={this.state.reset} />
          ))}
        </div>
        { button }
      </div>
    );
  }
}

// Dynamically import card images
const importAll = (files) => {
  const images = {};
  files.keys().forEach(item => { images[item.replace('./', '').replace('.svg', '')] = files(item); });
  return images;
}
const IMAGES = importAll(require.context('./assets/cards', false, /\.(svg)$/));

const mapStateToProps = (state) => {
  return {
    discardQueue: state.discard.queue
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({ setDiscardQueue }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

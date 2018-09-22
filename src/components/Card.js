import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Card extends Component {

  selectCard(index) {
    if (this.props.reset) return;
    if (this.props.toDiscard.includes(this.props.index)) {
      this.props.removeToDiscard(this.props.index);
    } else {
      this.props.addToDiscard(this.props.index);
    }
    this.setState({ toDiscard: !this.props.toDiscard.includes(this.props.index) });
  }

  render() {
    let classname = `card hand-${this.props.index} ${this.props.suit}`;
    if (this.props.toDiscard.includes(this.props.index)) {
      classname += " to-discard";
    }
    if (this.props.reset)
      classname += " disabled";
    return (
      <div className={classname} onClick={this.selectCard.bind(this)} style={{ backgroundImage: `url('/images/cards/${this.props.value + this.props.suit.toUpperCase().slice(0,1)}.svg')` }}></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toDiscard: state.cards.toDiscard,
    reset: state.cards.reset
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDiscard: (index) => dispatch(actions.addToDiscard(index)),
    removeToDiscard: (index) => dispatch(actions.removeToDiscard(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { addToDiscardQueue, removeFromDiscardQueue } from '../redux/actions';

class Card extends Component {

  selectCard() {
    if (this.props.reset) return; // Do not allow select if game need to be reset
    if (this.props.discardQueue.includes(this.props.index)) {
      this.props.removeFromDiscardQueue(this.props.index);
    } else {
      this.props.addToDiscardQueue(this.props.index);
    }
  }

  render() {
    let classname = "card";
    if (this.props.reset) {
      classname += " disabled";
    } else if (this.props.discardQueue.includes(this.props.index)) {
      classname += " discard";
    }
    return (
      <div className={classname} onClick={this.selectCard.bind(this)}>
        <img src={this.props.image} alt={`${this.props.value} of ${this.props.suit}`} draggable={false} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    discardQueue: state.discard.queue
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ addToDiscardQueue, removeFromDiscardQueue }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Card);

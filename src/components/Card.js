import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

// Dynamically import card images
function importAll(r) {
  const images = {};
  r.keys().forEach(item => { images[item.replace('./', '').replace('.svg', '')] = r(item); });
  return images;
}
const IMAGES = importAll(require.context('../assets/cards', false, /\.(svg)$/));

class Card extends Component {


  selectCard() {
    if (this.props.reset) return; // Do not allow select if game need to be reset
    // Add/Remove card from discard queue in store
    if (this.props.toDiscard.includes(this.props.index)) {
      this.props.removeToDiscard(this.props.index);
    } else {
      this.props.addToDiscard(this.props.index);
    }
    // Toggle toDiscard
    this.setState({ toDiscard: !this.props.toDiscard.includes(this.props.index) });
  }

  render() {
    let classname = "card";
    if (this.props.reset) {
      classname += " disabled";
    } else if (this.props.toDiscard.includes(this.props.index)) {
      classname += " to-discard";
    }
    const imageLabel = `${this.props.value + this.props.suit.toUpperCase().slice(0,1)}`
    return (
      <div className={classname} onClick={this.selectCard.bind(this)}>
        <img src={IMAGES[imageLabel]} alt={imageLabel} draggable={false} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    toDiscard: state.cards.toDiscard
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDiscard: (index) => dispatch(actions.addToDiscard(index)),
    removeToDiscard: (index) => dispatch(actions.removeToDiscard(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

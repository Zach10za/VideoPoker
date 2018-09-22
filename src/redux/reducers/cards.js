
const initialState = {
  deck: [],
  hand: [],
  discard: [],
  toDiscard: [],
  score: 0,
  lastScore: "",
  reset: true
};

export default function( state = initialState, action ) {
  switch (action.type) {
    case "BUILD_AND_SHUFFLE_DECK": {
      let deck = buildDeck();
      deck = shuffle(deck);
      return {
        ...state,
        deck,
        reset: true
      }
    }
    case "DISCARD_AND_SCORE": {
      let hand = state.hand;
      let discard = state.discard;
      let deck = state.deck;
      discard = discard.concat(state.toDiscard.filter((card, i) => state.toDiscard.includes(i)));
      hand = hand.filter((card, i) => !state.toDiscard.includes(i)).concat(deck.slice(0,state.toDiscard.length));
      let { score, lastScore } = scoreHand(hand);
      score += state.score;
      hand.sort((a,b) => a.value - b.value);
      return {
        ...state,
        deck,
        hand,
        discard,
        toDiscard: [],
        score,
        lastScore,
        reset: true
      }
    }
    case "ADD_TO_DISCARD": {
      const { index } = action.payload;
      let toDiscard = state.toDiscard
      toDiscard.push(index);
      return {
        ...state,
        toDiscard
      }
    }
    case "REMOVE_TO_DISCARD": {
      const { index } = action.payload;
      let toDiscard = state.toDiscard
      toDiscard.splice(state.toDiscard.indexOf(index), 1);
      return {
        ...state,
        toDiscard
      }
    }
    case "RESET_AND_DEAL": {
      let deck = buildDeck();
      deck = shuffle(deck);
      let hand = deck.slice(0,5);
      deck = deck.slice(5);
      return {
        ...state,
        deck,
        hand,
        discard: [],
        toDiscard: [],
        lastScore: "",
        reset: false
      }
    }
    default:
      return state;
  }
}


function buildDeck() {
  const suits = ["hearts","diamonds","clubs","spades"];
  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  const deck = suits.reduce((a, suit) => {
    return [...a, ...numbers.map(value => {
      return {
        value, 
        suit
      };
    })];
  }, []);
  return deck;
}

function shuffle(deck) {
  let cardsRemaining = deck.length;
  let index;
  let swap;
  while (cardsRemaining > 0) {
    index = Math.floor(Math.random() * cardsRemaining);
    cardsRemaining--;
    swap = deck[cardsRemaining];
    deck[cardsRemaining] = deck[index];
    deck[index] = swap;
  }
  return deck;
}

function scoreHand(hand) {
  let score = 0;
  let lastScore = "No points";
  if (hasFlush(hand)) {
    lastScore = "FLUSH!";
    score += 800;
  } else if (hasStraight(hand)) {
    lastScore = "STRAIGHT!";
    score += 500;
  } else if (hasPair(hand)) {
    lastScore = "PAIR!";
    score += 100;
  }
  return {
    score,
    lastScore
  }
}


function hasFlush(hand) {
  console.log("FLUSH", hand);
  return hand.every(card => card.suit === hand[0].suit);
}

function hasStraight(hand) {
  const values = hand.map(card => card.value).sort((a,b) => b - a);
  if (JSON.stringify(values) === JSON.stringify([1,10,11,12,13])) return true;
  return values.every((value, i) => {
    if (i === 0) return true;
    return value === values[i - 1] + 1;
  })
}

function hasPair(hand) {
  const values = hand.map(card => card.value).sort((a,b) => a - b);
  console.log(values);
  for (let j = 0; j < values.length; j++) {
    for (let i = j + 1; i < values.length; i++) {
      if (values[j] === values[i]) return true;
    }
  }
  return false;
}
import * as pokerHands from '../utils/pokerHands';

/**
 * Creates an array of card objects with a value and a suit
 * 
 * @returns {object} Returns the shuffled deck of cards
 */
export function buildAndShufffleDeck() {
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
  return shuffle(deck);
}

/**
 * Shuffle an array with Fisher-Yates algorithm
 * 
 * @param {array} deck  A deck of cards
 * 
 * @returns {object}    Returns deck of cards shuffled
 */
export function shuffle(deck) {
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

/**
 * Deals the top x number of cards
 * 
 * @param {array} deck        A deck of cards
 * @param {array} hand        A subset of a deck of cards
 * @param {int} numberOfCards The number of cards to deal
 * 
 * @returns {object}          Returns the updated deck and updated hand
 */
export function deal(deck, hand, numberOfCards) {
  hand = hand.concat(deck.slice(0,numberOfCards));
  deck = deck.slice(numberOfCards);
  return {
    deck,
    hand
  }
}

/**
 * Discards x number of cards from the hand
 * 
 * @param {array} deck          A deck of cards
 * @param {array} hand          A subset of a deck of cards in the hand
 * @param {array} discard       A subset of a deck of cards that has been discarded
 * @param {array} discardQueue  The indexes of the cards to discard
 * 
 * @returns {object}          Returns the updated deck and updated hand
 */
export function discard(deck, hand, discard, discardQueue) {
  discard = discard.concat(discardQueue.filter((card, i) => discardQueue.includes(i)));
  hand = hand.filter((card, i) => !discardQueue.includes(i)).concat(deck.slice(0,discardQueue.length));
  deck = deck.slice(discardQueue.length)
  return {
    deck,
    hand,
    discard
  }
}

/**
 * Determines the score of a hand based on a few common poker hands
 * 
 * @param {array} hand  A subset of a deck of cards in the hand
 * 
 * @returns {object}    Returns the points as well as the name of the poker hand
 */
export function scoreHand(hand) {
  let score = 0;
  let lastScore = "No points";
  if (pokerHands.fourOfAKind(hand)) {
    lastScore = "4 of a Kind! +1000";
    score = 1000;
  } else if (pokerHands.fullHouse(hand)) {
    lastScore = "Full House! +800";
    score = 800;
  } else if (pokerHands.flush(hand)) {
    lastScore = "Flush! +700";
    score = 700;
  } else if (pokerHands.straight(hand)) {
    lastScore = "Straight! +500";
    score = 500;
  } else if (pokerHands.threeOfAKind(hand)) {
    lastScore = "3 of a Kind! +300";
    score = 300;
  } else  if (pokerHands.twoPair(hand)) {
    lastScore = "Two Pair! +200";
    score = 200;
  } else  if (pokerHands.pair(hand)) {
    lastScore = "Pair! +100";
    score = 100;
  }
  return {
    score,
    lastScore
  }
}
  
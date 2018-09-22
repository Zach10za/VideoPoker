

/**
 * Checks if all cards are the same suit
 * 
 * @param {array} hand An array of card objects
 * 
 * @returns {boolean}
 */
export function flush(hand) {
  return hand.every(card => card.suit === hand[0].suit);
}

/**
 * Checks if cards are a straight
 * 
 * @param {array} hand An array of card objects
 * 
 * @returns {boolean}
 */
export function straight(hand) {
  const values = hand.map(card => card.value).sort((a,b) => b - a);
  if (JSON.stringify(values) === JSON.stringify([13,12,11,10,1])) return true;
  for (let i = 1; i < values.length; i++) {
    if (values[i - 1] - 1 !== values[i]) return false;
  }
  return true;
}

/**
 * Checks if 2 of 5 card values are the same and 3 of 5 card values are the same
 * 
 * @param {array} hand An array of card objects
 * 
 * @returns {boolean}
 */
export function fullHouse(hand) {
  const counts = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  hand.forEach(card => {
    counts[card.value - 1]++;
  });
  return counts.includes(2) && counts.includes(3);
}

/**
 * Checks if 4 of 5 card values are the same
 * 
 * @param {array} hand An array of card objects
 * 
 * @returns {boolean}
 */
export function fourOfAKind(hand) {
  const counts = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  hand.forEach(card => {
    counts[card.value - 1]++;
  });
  return counts.includes(4);
}

/**
 * Checks if 3 of 5 card values are the same
 * 
 * @param {array} hand An array of card objects
 * 
 * @returns {boolean}
 */
export function threeOfAKind(hand) {
  const counts = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  hand.forEach(card => {
    counts[card.value - 1]++;
  });
  return counts.includes(3);
}

/**
 * Checks if 2 of 5 card values are the same for 2 pairs
 * 
 * @param {array} hand An array of card objects
 * 
 * @returns {boolean}
 */
export function twoPair(hand) {
  const counts = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  hand.forEach(card => {
    counts[card.value - 1]++;
  });
  const valueCounts = [0,0,0,0];
  counts.forEach(count => {
    valueCounts[count - 1]++;
  });
  return valueCounts[1] === 2;
}

/**
 * Checks if 2 of 5 card values are the same
 * 
 * @param {array} hand An array of card objects
 * 
 * @returns {boolean}
 */
export function pair(hand) {
  const counts = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  hand.forEach(card => {
    counts[card.value - 1]++;
  });
  return counts.includes(2);
}
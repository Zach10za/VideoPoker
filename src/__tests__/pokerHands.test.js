
import * as utils from '../utils/cards';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

const fourOfAkindHand = [
  {value: 7, suit: 'hearts'},
  {value: 7, suit: 'diamonds'},
  {value: 4, suit: 'diamonds'},
  {value: 7, suit: 'clubs'},
  {value: 7, suit: 'spades'},
];
const fullHouseHand = [
  {value: 10, suit: 'hearts'},
  {value: 10, suit: 'spades'},
  {value: 12, suit: 'hearts'},
  {value: 10, suit: 'clubs'},
  {value: 12, suit: 'diamonds'},
];
const straightHand = [
  {value: 10, suit: 'hearts'},
  {value: 11, suit: 'spades'},
  {value: 12, suit: 'hearts'},
  {value: 13, suit: 'spades'},
  {value: 1, suit: 'diamonds'},
];
const flushHand = [
  {value: 7, suit: 'diamonds'},
  {value: 1, suit: 'diamonds'},
  {value: 3, suit: 'diamonds'},
  {value: 12, suit: 'diamonds'},
  {value: 2, suit: 'diamonds'},
];
const threeOfAkindHand = [
  {value: 6, suit: 'hearts'},
  {value: 7, suit: 'clubs'},
  {value: 6, suit: 'diamonds'},
  {value: 6, suit: 'spades'},
  {value: 1, suit: 'spades'},
];
const twoPairHand = [
  {value: 6, suit: 'hearts'},
  {value: 7, suit: 'clubs'},
  {value: 1, suit: 'diamonds'},
  {value: 6, suit: 'spades'},
  {value: 1, suit: 'spades'},
];
const pairHand = [
  {value: 4, suit: 'hearts'},
  {value: 7, suit: 'clubs'},
  {value: 1, suit: 'diamonds'},
  {value: 6, suit: 'spades'},
  {value: 1, suit: 'spades'},
];
test('fourOfAkindHand to be a four of a kind', () => {
  expect(utils.scoreHand(fourOfAkindHand)).toMatchObject({ score: 1000, lastScore: "4 of a Kind! +1000" });
});
test('fullHouseHand to be a full house', () => {
  expect(utils.scoreHand(fullHouseHand)).toMatchObject({ score: 800, lastScore: "Full House! +800" });
});
test('flushHand to be a flush', () => {
  expect(utils.scoreHand(flushHand)).toMatchObject({ score: 700, lastScore: "Flush! +700" });
});
test('straightHand to be a straight', () => {
  expect(utils.scoreHand(straightHand)).toMatchObject({ score: 500, lastScore: "Straight! +500" });
});
test('threeOfAkindHand to be a three of a kind', () => {
  expect(utils.scoreHand(threeOfAkindHand)).toMatchObject({ score: 300, lastScore: "3 of a Kind! +300" });
});
test('twoPairHand to be two pair', () => {
  expect(utils.scoreHand(twoPairHand)).toMatchObject({ score: 200, lastScore: "Two Pair! +200" });
});
test('pairHand to be a pair', () => {
  expect(utils.scoreHand(pairHand)).toMatchObject({ score: 100, lastScore: "Pair! +100" });
});
<h1 align="center">
  <br>
  <a href="http://videopoker.zachloza.com/"><img src="https://github.com/Zach10za/VideoPoker/blob/master/src/assets/videopoker.png" alt="videopoker" width="500"/></a>
  <br>
  <br>
    <p align="center">Try it out at <a href="https://videopoker.zachloza.com/">videopoker.zachloza.com</a><p/>
  <br>
</h1>
<p align="center">
  <a href="#/">
    <img src="https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg">
  </a>
  <a href="#/">
    <img src="https://img.shields.io/badge/contributions-welcome-orange.svg">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg">
  </a>
</p>
<br>
<img src="https://github.com/Zach10za/VideoPoker/blob/master/src/assets/screenshot.PNG">
<br>

## How to play

The goal of the game is simple: score as many points as possible. To score points you must create poker hands. To start, press `Deal` to draw 5 cards from a new deck. Once you have 5 cards, you may choose to discard 0 to 5 of them. To discard just select all the cards you do not want and then hit `Go`.

<img src="https://github.com/Zach10za/VideoPoker/blob/master/src/assets/screenshot2.PNG">

You will then draw cards until you're back to 5. Based on a set few poker hands, you will recieved betwen 100 and 1000 points.

<table>
  <thead>
    <tr>
      <th>Hand</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4 of a Kind</td>
      <td>1000</td>
    </tr>
    <tr>
      <td>Full House</td>
      <td>800</td>
    </tr>
    <tr>
      <td>Flush</td>
      <td>700</td>
    </tr>
    <tr>
      <td>Straight</td>
      <td>500</td>
    </tr>
    <tr>
      <td>3 of a Kind</td>
      <td>300</td>
    </tr>
    <tr>
      <td>Two Pair</td>
      <td>200</td>
    </tr>
    <tr>
      <td>Pair</td>
      <td>100</td>
    </tr>
  </tbody>
</table>
<br>

## Getting Started

### Installing

This project has a number of dependencies. Naviagate to the project directory and run

```
npm install
```

### File Structure

    ├── public                    # Compiled files (alternatively `dist`)
    ├── src                       # Source files
    │   ├── assets                # Static resources such as images
    │   │   └── cards             # SVG files for all 52 playing cards
    │   ├── components            # React components
    │   ├── redux                 # Redux related functions (store, actions, reducers)
    │   │   └── reducers          # Redux reducers
    │   ├── stylesheets           # Scss files
    │   └── utils                 # Utility functions
    ├── sw-prcahce-config.js      # Service worker cache configuration
    └── README.md

### Running Tests

Testing is all done with [Jest](https://jestjs.io/docs/en/getting-started). To run test navigate to the project directory and run the command

```
npm test
```

This launches an interactive test runner.

### Using Sass

This project uses sass. To compile the scss files, run the command

```
npm run build-css
```

To watch scss files and compile them on save, run

```
npm run watch-css
```

## Deployment

To build this project, run the command

```
npm run build
```

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Built With
* [React](https://reactjs.org/docs/getting-started.html) - Library used for user interface
* [Redux](https://redux.js.org/) - State control


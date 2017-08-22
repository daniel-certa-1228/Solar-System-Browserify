"use strict";
// console.log( "main.js" );

let output = require('./output.js');
let mercury = require('./mercury.js');
let venus = require('./venus.js');
let earth = require('./earth.js');
let mars = require('./mars.js');
let jupiter = require('./jupiter.js');
let saturn = require('./saturn.js');
let uranus = require('./uranus.js');
let neptune = require('./neptune.js');

output.printToDOM('#output-div', mercury.mercuryCard);
output.printToDOM('#output-div', venus.venusCard);
output.printToDOM('#output-div', earth.earthCard);
output.printToDOM('#output-div', mars.marsCard);
output.printToDOM('#output-div', jupiter.jupiterCard);
output.printToDOM('#output-div', saturn.saturnCard);
output.printToDOM('#output-div', uranus.uranusCard);
output.printToDOM('#output-div', neptune.neptuneCard);



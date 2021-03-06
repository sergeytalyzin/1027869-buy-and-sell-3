'use strict';
const {Picture} = require(`./constants`);

const getRandomInt = (min, max) =>{
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => someArray.sort(() => 0.5 - Math.random());
const getPictureFileName = (num) => Picture[num];

module.exports = {
  getRandomInt,
  shuffle,
  getPictureFileName
};

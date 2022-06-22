const getYieldForPlant = (corn) => {
  return corn.yield;
};

const getYieldForCrop = (input) => {
  return input.numCrops * input.crop.yield;
};

const getTotalYield = ({ crops }) => {
  if (crops[0].numCrops === 0) return 0;
  else sum = [];
  for (let i of crops) {
    sum.push(i.numCrops * i.crop.yield);
  }
  return sum.reduce((total, arg) => total + arg, 0);
};

const getCostsForCrop = (input) => {
  return input.numCrops * input.crop.price;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
};
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

const getCostsForCrop = (amount) => {
  return amount.numCrops * amount.crop.cost;
};

const getRevenueForCrop = (corn) => {
  return getYieldForPlant(corn) * corn.price;
};

const getProfitForCrop = (amount, corn) => {
  console.log(amount.crop.cost);
  return getRevenueForCrop(corn) - getCostsForCrop(amount);
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
};

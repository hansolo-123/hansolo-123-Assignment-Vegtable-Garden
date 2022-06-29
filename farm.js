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
  return getRevenueForCrop(corn) - getCostsForCrop(amount);
};

const getTotalProfit = ({ crops }) => {
  let cost = [];
  let revenue = [];
  for (let i of crops) {
    cost.push(i.numCrops * i.crop.cost);
    revenue.push(i.crop.yield * i.crop.price);
  }
  const totalCost = cost.reduce((total, arg) => total + arg, 0);
  const totalRevenue = revenue.reduce((total, arg) => total + arg, 0);
  return totalRevenue - totalCost;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};

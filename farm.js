const getYieldForPlant = (corn, environmentFactors) => {
  if (environmentFactors == undefined) {
    return corn.yield;
  } else {
    let sunValue = environmentFactors.sun;
    let windValue = environmentFactors.wind;
    let sunAmount = corn.factor.sun[sunValue];
    let windAmount = corn.factor.wind[windValue];
    return corn.yield * sunAmount * windAmount;
  };
};

const getYieldForCrop = (input, environmentFactors) => {
  if (environmentFactors == undefined) {
    return input.numCrops * input.crop.yield;
  } else {
    let sunValue = environmentFactors.sun;
    let windValue = environmentFactors.wind;
    let sunAmount = input.crop.factor.sun[sunValue];
    let windAmount = input.crop.factor.wind[windValue];
    return input.numCrops * input.crop.yield * sunAmount * windAmount;
  };
};

const getTotalYield = ({ crops }, environmentFactors) => {
  if (crops[0].numCrops === 0) return 0;
  if (environmentFactors == undefined) {
    sum = [];
    for (let i of crops) {
      sum.push(i.numCrops * i.crop.yield);
    }
    return sum.reduce((total, arg) => total + arg, 0);
  } else {
    sum = [];
    let sunValue = environmentFactors.sun;
    let windValue = environmentFactors.wind;
    let soilValue = environmentFactors.soil;
    for (let i of crops) {
      let sunAmount = i.crop.factor.sun[sunValue];
      let windAmount = i.crop.factor.wind[windValue];
      let soilAmount = i.crop.factor.wind[soilValue];
      sum.push(i.numCrops * i.crop.yield * sunAmount * windAmount * soilAmount);
    };
    return sum.reduce((total, arg) => total + arg, 0);
  };
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

const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./farm.js");

describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
    factor: {
      sun: {
        low: 0.5,
        medium: 0,
        high: 1.5,
      },
      wind: {
        low: 0.5,
        medium: 0,
        high: 0.6,
      },
      soil: {
        low: 0.5,
        medium: 0,
        high: 1.5,
      },
    },
  };

  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });

  const environmentFactors = {
    sun: "low",
    wind: "high",
  };

  test("Get yield for plant with environment factors", () => {
    expect(getYieldForPlant(corn, environmentFactors)).toBe(9);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});

describe("getCostsForCrop", () => {
  test("Calculate the cost for a crop", () => {
    const corn = {
      name: "corn",
      cost: 1,
    };
    const amount = {
      crop: corn,
      numCrops: 5,
    };
    expect(getCostsForCrop(amount)).toBe(5);
  });
});

describe("getRevenueForCrop", () => {
  test("Calculate the revenue for a crop (without environmental factors)", () => {
    const corn = {
      name: "corn",
      yield: 3,
      price: 2,
    };
    expect(getRevenueForCrop(corn)).toBe(6);
  });
});

describe("getProfitForCrop", () => {
  test("Calculate the profit for a crop (without environmental factors)", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 1,
      price: 2,
    };
    const amount = {
      crop: corn,
      numCrops: 5,
    };
    expect(getProfitForCrop(amount, corn)).toBe(1);
  });
});

describe("getTotalProfit", () => {
  test("Calculate the profit for multiple crops (without environmental factors)", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 1,
      price: 2,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      cost: 3,
      price: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalProfit({ crops })).toBe(11);
  });
});

const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("works for positive numbers < 1000", () => {
    expect(addCommas("1")).toEqual("1");
    expect(addCommas("10")).toEqual("10");
    expect(addCommas("100")).toEqual("100");
  });
  test("works for negative numbers < 1000", () => {
    expect(addCommas("-1")).toEqual("-1");
    expect(addCommas("-10")).toEqual("-10");
    expect(addCommas("-100")).toEqual("-100");
  });
  test("works for positive numbers >= 1000", () => {
    expect(addCommas("1000")).toEqual("1,000");
    expect(addCommas("10000")).toEqual("10,000");
    expect(addCommas("100000")).toEqual("100,000");
  });
  test("works for negative numbers >= 1000", () => {
    expect(addCommas("-1000")).toEqual("-1,000");
    expect(addCommas("-10000")).toEqual("-10,000");
    expect(addCommas("-100000")).toEqual("-100,000");
  });
});

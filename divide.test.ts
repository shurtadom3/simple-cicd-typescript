/**
 * Unit tests for divide()
 */
declare global {
 interface Window {
  divide:(a:number,b:number)=>number;
 }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  it("divides positive numbers", () => {
    expect(window.divide(10,2))
      .toBe(5);
  });

  it("works with negative numbers", () => {
    expect(window.divide(-10,2))
      .toBe(-5);
  });

  it("throws error when dividing by zero", () => {
    expect(() => window.divide(10,0))
      .toThrow("Cannot divide by zero");
  });
});
/**
 * Unit tests for multiply()
 */
declare global {
  interface Window {
    multiply:(a:number,b:number)=>number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  it("multiplies positive numbers", () => {
    expect(window.multiply(4,3))
      .toBe(12);
  });

  it("returns zero when one value is zero", () => {
    expect(window.multiply(5,0))
      .toBe(0);
  });

  it("works with negative numbers", () => {
    expect(window.multiply(-2,3))
      .toBe(-6);
  });
});
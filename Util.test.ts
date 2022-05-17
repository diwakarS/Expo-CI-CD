import { sum } from "./Util";

describe("Sum func", () => {
  it("2 + 3 = 5", () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });
});

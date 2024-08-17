import { describe, expect, it } from "vitest";

describe("others", () => {
  it("should pass", () => {
    expect(1).toBe(1);
  });
  it("should fail", () => {
    expect(2).toBe(2);
  });
  it("should fail 4", () => {
    expect(3).toBe(3);
  });
});

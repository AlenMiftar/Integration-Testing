import { buyBook, confirmPurchase } from "../../src/bookstore";

describe("buyBook with a valid title", () => {
  test("Should complete the purchase process and return confirmation", () => {
    const result = buyBook("dune");
    expect(result).toHaveProperty("success", true);
    expect(result).toHaveProperty("code");
  });
});

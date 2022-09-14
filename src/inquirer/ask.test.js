const { askFor } = require("./ask");

describe("ask function", () => {
  test("correct question is returned", () => {
    // 1. ARRANGE
    // 2. ASK
    // 3. ASSERT

    // 1.
    const questionKey = "email";

    // 2.
    askFor(questionKey).then((result) => {
      console.log(result);
    });

    // 3.
  });
});

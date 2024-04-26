/**
 * @jest-environment jsdom
 */

import addButtons from "../components/addButtons.js";

describe("create a btn element", () => {
  const button = addButtons({ id: "all", text: "All" });

  test("nodeName -> ", () => {
    expect(button.nodeName).toEqual("BUTTON");
  });

  test("id -> all", () => {
    expect(button.id).toEqual("all");
  });

  test("className -> filter-btn", () => {
    expect(button.className).toEqual("filter-btn");
  });

  test("childrenCount -> button", () => {
    expect(button.type).toEqual("button");
  });

  test("innerText -> All", () => {
    expect(button.innerText).toEqual("All");
  });
});

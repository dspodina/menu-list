/**
 * @jest-environment jsdom
 */

import addItems from "../components/addItems.js";

describe("create an item element", () => {
  const item = addItems({
        id: 1,
        title: 'pancakes',
        category: 'breakfast',
        price: 15.99,
        src: '../assets/pancakes.jpeg',
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
  });

  test("nodeName -> ARTICLE", () => {
    expect(item.nodeName).toEqual("ARTICLE");
  });

  test("className -> itemsContainer ", () => {
    expect(item.className).toEqual("itemsContainer");
  });

  test("childrenCount -> 2", () => {
    expect(item.childElementCount).toEqual("2");
  });
});

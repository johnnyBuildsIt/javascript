// to execute, run: npx jasmine spec/sLinkedListSpec.js
describe("Single Linked List", () => {
  let SinglyLinkedList = require('../sLinkedList/SinglyLinkedList');

  describe("Push Function", () => {
    it("should push", () => {
      const sLList = new SinglyLinkedList();

      sLList.push(1);

      expect(sLList.length).toBe(1);
    })
  })
});
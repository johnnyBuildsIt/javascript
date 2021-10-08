// to execute, run: npx jasmine spec/sLinkedListSpec.js
describe('Single Linked List', () => {
  let SinglyLinkedList = require('../sLinkedList/SinglyLinkedList');

  describe('push fFunction', () => {
    it('should have length 1 after pushing 1 item', () => {
      const sLList = new SinglyLinkedList();

      sLList.push(1);

      expect(sLList.length).toBe(1);
    })

    it('should have length 2 after pushing 2 items', () => {
      const sLList = new SinglyLinkedList();

      sLList.push(1);
      sLList.push(2);

      expect(sLList.length).toBe(2);
    })
  })

  describe('pop function', () => {
    it('should pop 1 after 1 is pushed', () => {
      const sList = new SinglyLinkedList();

      sList.push(1);
      const popVal = sList.pop();

      expect(popVal).toBe(1);
    })
  })
});
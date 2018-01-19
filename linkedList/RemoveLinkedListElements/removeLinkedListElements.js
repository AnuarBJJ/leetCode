/**
 * Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) {
    return null;
  }
  let runner = head;

  while (runner.val === val && runner.next) {
    runner = runner.next;
  }

  if (runner.val === val && !runner.next) {
    return null;
  }

  runner.next = removeElements(runner.next, val);

  return runner;
};

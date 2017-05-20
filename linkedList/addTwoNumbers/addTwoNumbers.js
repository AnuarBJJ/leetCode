/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let runner1 = l1;
    let runner2 = l2;

    let carryOver = 0;

    let head = new ListNode();

    if(runner1.val + runner2.val >= 10){
        head.val = (runner1.val + runner2.val) - 10;
        carryOver = 1;
        runner1 = runner1.next;
        runner2 = runner2.next;
    } else {
        head.val = (runner1.val + runner2.val);
        runner1 = runner1.next;
        runner2 = runner2.next;
    }

    let runnerRes = head;

    while(runner1 || runner2){
        let newNode = new ListNode();
        runnerRes.next = newNode;
        let num1 = 0;
        let num2 = 0;
        if(runner1){
            num1 = runner1.val;
            runner1 = runner1.next;
        }
        if(runner2){
            num2 = runner2.val;
            runner2 = runner2.next;
        }
        newNode.val = num1 + num2 + carryOver;
        if(newNode.val >= 10){
           newNode.val -= 10;
           carryOver = 1;
        } else {
            carryOver = 0;
        }
        runnerRes = newNode;
    }
    if(carryOver === 1){
        let newNode = new ListNode(1);
        runnerRes.next = newNode;
    }

    return head;
};

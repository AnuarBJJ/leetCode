/*
Merge two sorted linked lists and return it as a new list.
The new list should be made by splicing together the nodes of the first two lists.
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
var mergeTwoLists = function(l1, l2) {
    let resHead = new ListNode(0);
    let runner = resHead;

    while(l1 && l2){
        if(l1.val<l2.val){
            runner.next = l1;
            l1 = l1.next;
        } else {
            runner.next = l2;
            l2 = l2.next;
        }
        runner = runner.next;
    }

    if(l1 !== null){
        runner.next = l1;
    }
    if(l2 !== null){
        runner.next = l2;
    }

    return resHead.next;
};

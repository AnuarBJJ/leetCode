/*
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const seen = new Set();
    let current = head;

    if(!current){
        return false;
    }

    while( current.next !== null ){
        if( seen.has(current) ){
            return true;
        } else {
            seen.add(current);
        }
        current = current.next;
    }
    return false;
};

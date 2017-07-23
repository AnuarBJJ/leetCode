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
// var hasCycle = function(head) {
//     const seen = new Set();
//     let current = head;
//
//     if(!current){
//         return false;
//     }
//
//     while( current.next !== null ){
//         if( seen.has(current) ){
//             return true;
//         } else {
//             seen.add(current);
//         }
//         current = current.next;
//     }
//     return false;
// };

// in place

var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    if(!slow){
        return false;
    }

    while( fast ){
        slow = slow.next;
        fast = fast.next && fast.next.next;

        if( fast === null ){
            return false;
        }
        if( fast === slow ){
            return true;
        }
    }
    return false;
};

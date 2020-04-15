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
    
    if(l1.next !== null){
        return {
            val:l1.val + l2.val,
            next:addTwoNumbers(l1.next,l2)
        }
    }else if(l2.next !== null){
        return {
            val:l1.val + l2.val,
            next:addTwoNumbers(l1,l2.next)
        }
    }
    let res = {
        val:l1.val + l2.val,
        next:null
    }
    console.log(res)
    return res
};
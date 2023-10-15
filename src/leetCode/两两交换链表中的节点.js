/**
 * 题目：两两交换链表中的节点
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 示例:
 * 
 *  给定 1->2->3->4, 你应该返回 2->1->4->3.
 * 
 */

/**
 * 思路：
 * 
 * 指针交换：
 * 
 * 1->2、2->3 ==> 2->1、1->3
 * 
 * 注意，本算法为了不增加额外的内存，因此只是加了个boot跟节点用于辅助
 * 在原链表上指针切换。
 * 
 * 此算法优势：只需要遍历一次就可以得到结果
 * 
 * 时间复杂度：O(n/2)
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    var boot = new ListNode();
    boot.next = head;
    var bootNode = boot;
    while (head != null && head.next != null) {
        let next = head.next;
        head.next = head.next.next;
        next.next = head;
        bootNode.next = next;
        head = head.next;
        bootNode.next = next;
        bootNode = bootNode.next.next;
    }
    return boot.next;
};
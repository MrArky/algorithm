/**
 * 题目：
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 *  给定一个链表: 1->2->3->4->5, 和 n = 2.
 *  当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 说明：
 * 
 *  给定的 n 保证是有效的。
 */

/**
 * 思路：
 * 
 * 一、暴力解法
 * 本题很容易想到判断next是否为null，依次循环算出ListNode的长度length，
 * 再用长度减去n算出具体的位置index=length-n，通过改变具体位置上一个节点index-1的指针（next）
 * 重新指向下一个节点index+1达到删除该节点的目的。
 * 
 * 二、使用一趟扫描实现删除指定位置节点
 *  模拟如下图：
 *  将原有的链表head新增两个引用链表1、链表2,遍历链表1，当遍历的索引i大于n（2）时，开始遍历链表2，
 *  每次记录当前node的值并重新更新为链表的值。
 *  链表1：1->2->3->4->5
 *  值： 
 *  链表2：1->2->3->4->5
 *  值： 
 *  遍历第一个链表1：
 *  第一次遍历i=1：
 *  链表1：1->2->3->4->5
 *  值：         3->4->5
 *  链表2：1->2->3->4->5
 *  值：   1->2->3->4->5
 *  第二次遍历i=2：
 *  链表1：1->2->3->4->5
 *  值：         3->4->5
 *  链表2：1->2->3->4->5
 *  值：   1->2->3->4->5
 *  第三次遍历i=3：
 *  链表1：1->2->3->4->5
 *  值：            4->5
 *  链表2：1->2->3->4->5
 *  值：      2->3->4->5
 *  第四次遍历i=4：
 *  链表1：1->2->3->4->5
 *  值：               5
 *  链表2：1->2->3->4->5
 *  值：         3->4->5
 * 
 *  由于链表2当前值为head.next.next的引用，因此链表2发生改变，head也会随之改变
 *  所以执行链表2.next=链表2.next.next即删除链表2中值为4的值，即head删除了值为
 *  4的值。
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    var tempListNode = new ListNode(0);
    tempListNode.next = head;
    var listNode1 = tempListNode;
    var listNode2 = tempListNode;
    var i = 0;
    while (listNode1 != null) {
        listNode1 = listNode1.next;
        if (i > n) {
            listNode2 = listNode2.next;
        }
        i++;
    }
    listNode2.next = listNode2.next.next;
    return tempListNode.next;
};
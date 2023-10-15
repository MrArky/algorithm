/**
 * 题目：合并两个有序链表
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 *  输入：1->2->4, 1->3->4
 *  输出：1->1->2->3->4->4
 */

/**
 * 思路：
 * 
 * 本题以l1作为参照，迭代l1,如果l1节点的值小于等于l2节点的值，便将l2的值插入l1当前节点后面
 * 
 * 注意1：插入时可能存在l1当前节点后面的值比当前l2插入过来的值小，因此需要满足两个条件
 *        1.l1Node.val <= l2.val
 *        2.l1Node.next.val > l2.val
 *        因此又会出现另一个问题，满足条件1，但是l1Node.next==null，不过在此情况下说明l2插入
 *        过来的值比l1中所有值都大，便可以不考虑条件2：l1Node.next.val > l2.val的情况，所以
 *        就有了以下条件约束：
 *        1.l1Node.val <= l2.val
 *        2.l1Node.next == null || l1Node.next.val > l2.val
 * 
 * 注意2：如果开始时，l2的起始值大于l1的起始值，将会出现永远无法将l2的值插入l1中，因此在遍历开始
 *       前做了两个判断：
 *       1.if (l1 == null) return l2;
 *       2.if (l2 != null && l1.val > l2.val) return mergeTwoLists(l2, l1);
 * 
 * 最后返回l1的值即为输出结果。
 * 
 * 时间复杂度：O(m+n):遍历的是l1，但是l1长度m在增加，增加的长度即为l2的长度n
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
var mergeTwoLists = function (l1, l2) {
    var l1Node = l1;
    if (l1 == null) return l2;
    if (l2 != null && l1.val > l2.val) return mergeTwoLists(l2, l1);
    while (l1Node != null && l2 != null) {
        if (l1Node.val <= l2.val) {
            if (l1Node.next == null || l1Node.next.val > l2.val) {
                let tempNode = l1Node.next;
                l1Node.next = new ListNode(l2.val);
                l1Node.next.next = tempNode;
                l2 = l2.next;
            }
        }
        l1Node = l1Node.next;
    }
    return l1;
};
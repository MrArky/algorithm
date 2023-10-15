/**
 * 题目：合并K个排序链表
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 输入:
    [
        1->4->5,
        1->3->4,
        2->6
    ]
    输出: 1->1->2->3->4->4->5->6
 */


/**
 * 思路(将k个链表合并想象成k-1次两个链表合并)：
 * 
 * l1+l2=>l1(l1和l2合并后重新赋值给l1)
 * l1+l3=>l1
 * ...
 * l1+lk=>l1
 * 
 * 因此下面先看两个链表合并算法如下：
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
 * 最后配合数组reduce函数实现算法
 * 
 * 时间复杂度：O(kn)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    //两个链表合并算法
    var mergeTwoLists = (l1, l2) => {
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
    }
    //reuce函数中执行两个链表合并算法
    if (lists.length == 0) return null;
    return lists.reduce((l1, l2) => {
        return mergeTwoLists(l1, l2);
    })
};
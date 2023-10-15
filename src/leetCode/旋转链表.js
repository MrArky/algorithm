/**
 * 题目：旋转链表
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 
 *  输入: 1->2->3->4->5->NULL, k = 2
    输出: 4->5->1->2->3->NULL
    解释:
    向右旋转 1 步: 5->1->2->3->4->NULL
    向右旋转 2 步: 4->5->1->2->3->NULL
 *
 * 示例 2:
 * 
 *  输入: 0->1->2->NULL, k = 4
    输出: 2->0->1->NULL
    解释:
    向右旋转 1 步: 2->0->1->NULL
    向右旋转 2 步: 1->2->0->NULL
    向右旋转 3 步: 0->1->2->NULL
    向右旋转 4 步: 2->0->1->NULL
 *
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    var len = 1, oneNode = head;
    while (oneNode && oneNode.next) {
        oneNode = oneNode.next;
        len++;
        if (oneNode.next == null) {
            oneNode.next = head;
            k = len - k % len;
            break;
        }
    }
    oneNode = head;
    while (k > 0 && oneNode && oneNode.next) {
        if (k == 1) {
            head = oneNode.next;
            oneNode.next = null;
            break;
        }
        k--;
        oneNode = oneNode.next;
    }
    return head;
};

/**
 * 思路：
 * 假如链表为：1->2->3->4->5->6,通过全遍历将其最后一个元素的指针指向第一个元素形成环形链表：
 * 注意：其实此时已经得到了链表的长度len。
 *   1→2→3
 *   ↑   ↓
 *   6←5←4
 * 现在就是要考虑在哪个位置将链表截断就是我们想要的结果。
 * 1.链表移动k次后的结果一定是等于移动 k%len 次的结果
 * 2.移动k%len后，那么链表最后面的k%len个元素被移动到前面，那么截取链表的位置一定是len-k%len
 * 
 * 时间复杂度：k>链表长度n：O(2n-k%n)；k小于链表长度n：O(n+k)
 */
/**
 * 题目：两数相加
 * 
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，
 * 并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 *  输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 *  输出：7 -> 0 -> 8
 *  原因：342 + 465 = 807
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
var addTwoNumbers = function (l1, l2) {
    //思路while循环 主要需要注意的是满十进一
    var result = new ListNode(0);
    var one = l1, two = l2, three = result;
    var carry = 0;
    while (one != null || two != null) {
        var x = (one == null) ? 0 : one.val;
        var y = (two == null) ? 0 : two.val;
        var sum = x + y + carry;
        carry = Math.floor(sum / 10); /*注意在JavaScript（动态语言）中取余的方式,也可以用~~(sum / 10) */
        three.next = new ListNode(sum % 10);
        three = three.next;
        if (one != null) one=one.next;
        if (two != null) two=two.next;
    }
    if (carry > 0) {
        three.next = new ListNode(carry);//这个位置比较重要：即两个ListNode都已经相加完成依然存在满十进一的情况
    }
    return result.next;
};

/**
 * 思路：
 * 
 * 1.双引用
 * 2.两数相加满十进一
 * 3.如果链表相同长度且最后两个值加上前面进1的值大于10，需要在新的链表后面创建一个新的节点存值。
 */
/**
 * https://leetcode.com/problems/linked-list-cycle/description/
 *
 * 토끼와 거북이
 * 추가공간 쓰지 않고 풀기
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  let turtle = head;
  let rabbit = head;
  while (turtle && rabbit) {
    turtle = turtle.next;
    rabbit = rabbit.next?.next;
    if (turtle === rabbit) return true;
  }
  return false;
}

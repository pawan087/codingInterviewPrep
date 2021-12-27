function reverse(head) {
  let cur = head;
  let prev = null;

  while (cur) {
    // Store value as we are about sever the connection
    let next = cur.next;

    // Set the next value to what was previous to "reverse"
    cur.next = prev;

    // Move forward previous
    prev = cur;

    // Move forward current
    cur = next;
  }

  // Since current will be null as this is what breaks the while loop,
  // previous will be the last node or first in the reversed list
  return prev;
}

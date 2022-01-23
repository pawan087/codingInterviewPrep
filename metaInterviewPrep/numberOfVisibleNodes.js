// Number of Visible Nodes
// https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=495004218121393&ppid=454615229006519&practice_plan=0

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function visibleNodes(root) {
  let res = [];
  let que = [];
  let arr = [];
  que.push(root);

  while (que.length > 0) {
    let len = que.length;

    while (len !== 0) {
      let cur = que.shift();
      len--;
      arr.push(cur.val);

      if (cur.left) {
        que.push(cur.left);
      }

      if (cur.right) {
        que.push(cur.right);
      }
    }

    res.push(arr[0]);

    arr = [];
  }

  return res.length;
}

let root = new TreeNode(8);
let three = new TreeNode(3);
let ten = new TreeNode(10);
let one = new TreeNode(1);
let six = new TreeNode(6);
let fourteen = new TreeNode(14);
let four = new TreeNode(4);
let seven = new TreeNode(7);
let thirteen = new TreeNode(13);

root.left = three;
root.right = ten;
three.left = one;
three.right = six;
six.left = four;
six.right = seven;
ten.right = fourteen;
fourteen.left = thirteen;

console.log(visibleNodes(root));

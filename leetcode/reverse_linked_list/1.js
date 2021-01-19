function ListNode(val) {
    this.val=val;
    this.next=null; //指向下一个节点
}

// 下一个节点 后继节点
// 1是2的 当前节点  除了头节点 会有前趋节点

var reverseList = function (head) {
    if(!head || !head.next) return head; // 空链表 或只有一个节点
    let cur=head; //当前 节点
    let pre=null; //前驱节点
    while(cur){  //遍历
       const next =cur.next;  //后继节点
       cur.next=pre //反过来了  将当前节点的指针指向前一个节点
       //如果cur 是头结点
       pre =cur; //前驱节点 变成当前节点
       cur=next; //后继节点变成当前节点
    }

}
const n1 =new ListNode(1);
const n2 =new ListNode(2);
const n3 =new ListNode(3);
const n4 =new ListNode(4);
const n5 =new ListNode(5);
n1.next=n2;
n2.next=n3;
n3.next=n4;
n4.next=n5;
console.log(val);
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    while(l1 || l2) {
        let val1 = 0;
        let val2 = 0;
        if(l1) {
            val1 = l1.val;
            l1 = l1.next;
        } else {
            val2 = l2.val;
            l2 = l2.next;
        }
        let sum = val1 + val2;
        console.log(`${val1} + ${val2} = ${sum}`)
    }
};
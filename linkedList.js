function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function(element) {
        this.element = element;
        this.next = null;
    };

    this.size = function() {
        return length;
    }
}

var ex = new LinkedList();

console.log();
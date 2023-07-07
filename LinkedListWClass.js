class Node{
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //add(element) 

    add(element) {
        var node = new Node(element);
        var current;

        if(!this.head) {
            this.head = node;
            this.size++;
        } else {
            current = this.head;

            while(current.next) {
                    current = current.next;
                }
            current.next = node;

            this.size++;
        }
    }

    //removeFrom(location)
    removeFrom(index) {
        if(index < 0 || index >= this.size) {
            return console.log("Please Enter a valid index")
        } else {
            var curr, prev, it;

            curr = this.head;
            it = 0;
            prev = curr;

            if(index === 0) {
                this.head = curr.next;
            } else {
                while(it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }

            this.size--;
            return curr.element;
        }
    }


    // insertAt(element, location)

    insertAt(element, index) {
        if(index < 0 || index > this.size) {
            return console.log("Please Enter a valid index");
        } else {
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            if(index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                while(it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    // removeElement(element)
    

    // Helper functions
    // isEmpty
    // size_of_list
    size_of_list() {
        var size = this.size;
        console.log(`size of list:`, size);
    }

    // PrintList
    print() {
        var curr = this.head;
        var str = "";
        while(curr) {
            str += curr.element + " ";
            curr = curr.next;
        }

        console.log(str);
    }
}

var ll = new LinkedList();

ll.add(10);
ll.add(20);
ll.add(30);

ll.insertAt(25, 2);

ll.print();
ll.size_of_list();
console.log(ll.removeFrom(2));
ll.print();
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLList {
    constructor() {
        this.head = null;
    }

    findLength() {
        if (this.head == null) {
            return 0
        }
        var counter = 0
        var runner = this.head
        while (runner != null) {
            counter++
            runner = runner.next
        }
        return counter
    }

    addToFront(value) {
        var newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode;
            return this
        }
        newNode.next = this.head;
        this.head = newNode
        return this
    }

    findAverage() {
        //create runner at head
        let runner = this.head;
        //create array that will house all of the data
        let sllArr = [];
        //create while loop that will push each node's data value into the array until we reach the node where the next is null
        while (runner) {
            sllArr.push(runner.data);
            runner = runner.next;
        }
        //use reduce method to add all of the values together into sum
        let sum = sllArr.reduce((partialSum, value) => partialSum + value, 0);
        console.log(sum / sllArr.length)
    }

    addToBack(value) {
        var newNode = new Node(value)

        if (this.head == null) {
            this.head = newNode
            return this
        }

        var runner = this.head

        while (runner.next != null) {
            runner = runner.next
        }
        runner.next = newNode
        return this
    }

    removeFromFront() {
        if (this.head == null) {
            return this
        }
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return this
    }

    removeFromBack() {
        if (this.head == null) {
            return this
        }
        var runner = this.head;
        while (runner.next.next != null) {
            runner = runner.next;
        }
        runner.next = null;
        return this
    }

    containsValue(value) {
        var contains = false;
        if (this.head == null) {
            console.log("List Empty!")
            return this
        }
        var runner = this.head;
        while (runner != null) {
            if (runner.value == value) {
                contains = true;
                break
            }
            runner = runner.next;
        }
        if (contains == true) {
            console.log("Value found!");
        }
        else {
            console.log("BOOO!");
        }
        return this
    }

    // print the singly linked list
    printValues() {
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
        if (this.head == null) {
            console.log("There's nothing in the list! Dummy!")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        //step #1) establish a runner to traverse through the list
        var runner = this.head;

        // NOTE: we can move runner all the way into null because our loop will exit as soon as runner hits null, avoiding any errors with printing
        while (runner != null) {
            // step #2) print the values at each iteration before moving the runner!
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        console.log("We have hit the end of the list!")
        // return 'this' to end function and allow chaining of methods
        return this
    }

    minToFront() {
        if (this.head == null) {
            return this
        }
        let runner = this.head
        let temp = runner.value
        while (runner.next != null) {
            if (temp > runner.next.value) {
                temp = runner.next.value
            }
            runner = runner.next
        }
        runner = this.head
        while (runner.next.value != temp) {
            runner = runner.next
        }
        let temp2 = runner.next
        temp2 = null
        runner.next = runner.next.next
        this.addToFront(temp)
        return this
    }

    maxToBack() {
        if (this.head == null) {
            return this
        }
        let runner = this.head
        let temp = runner.value
        while (runner.next != null) {
            if (temp < runner.next.value) {
                temp = runner.next.value
            }
            runner = runner.next
        }
        runner = this.head
        while (runner.next.value != temp) {
            runner = runner.next
        }
        let temp2 = runner.next
        temp2 = null
        runner.next = runner.next.next
        this.addToBack(temp)
        return this
    }

    prependNode(value, location) {
        var newNode = new Node(value)

        if (this.head == null) {
            this.head = newNode
            return this
        }

        if (location == 0) {
            this.addToFront(value)
            return this
        }

        if (this.findLength() < location) {
            this.addToBack(value)
            return this
        }

        var counter = 0
        var runner = this.head

        while (counter + 1 != location) {
            counter += 1
            runner = runner.next
        }

        newNode.next = runner.next
        runner.next = newNode
        return this
    }

    appendNode(value, location) {
        var newNode = new Node(value)

        if (this.head == null) {
            this.head = newNode
            return this
        }

        if (this.findLength() < location) {
            this.addToBack(value)
            return this
        }

        var counter = 0
        var runner = this.head

        while (counter != location) {
            counter += 1
            runner = runner.next
        }

        newNode.next = runner.next
        runner.next = newNode
        return this
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue {
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    // similar to SLL - add to back
    enqueue(value) {
        var newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode;
            return this
        }
        newNode.next = this.head;
        this.head = newNode
        return this
    }

    // remove and return the front value from the queue
    // similar to SLL - remove from front
    dequeue() {
        if (this.head == null) {
            return this
        }
        var runner = this.head;
        while (runner.next.next != null) {
            runner = runner.next;
        }
        runner.next = null;
        return this
    }

    compare(otherQ) {
        let runner1 = this.tail;
        let runner2 = otherQ.tail
        while (runner1) {
            if (runner1.data != runner2.data) {
                return false;
            }
            runner1 = runner1.next
            runner2 = runner2.next
        }
        return true;
    }
    isPalindrome() {
        let newQ = new Queue();
        let thisQ = this;
        let length = this.length;
        for (let i = 0; i < length; i++) {
            newQ.enqueue(thisQ.front().data)
            thisQ.dequeue();
        }
        newQ.print()
        return this.compare(newQ);
    }

    //return true/false based on whether you find the given value in a queue
    // same as contains in SLL
    contains(value) {
        var contains = false;
        if (this.head == null) {
            console.log("List Empty!")
            return this
        }
        var runner = this.head;
        while (runner != null) {
            if (runner.value == value) {
                contains = true;
                break
            }
            runner = runner.next;
        }
        if (contains == true) {
            console.log("Value found!");
        }
        else {
            console.log("BOOO!");
        }
        return this
    }

    // remove the minimum value in the queue (remember your edgecases and pointers!)
    removeMin() {
        if (this.head == null) {
            return this
        }
        let runner = this.head
        let temp1 = runner.value
        while (runner.next != null) {
            if (temp > runner.next.value) {
                temp = runner.next.value
            }
            runner = runner.next
        }
        runner = this.head
        while (runner.next.value != temp) {
            runner = runner.next
        }
        let temp2 = runner.next
        temp2 = null
        runner.next = runner.next.next
        this.addToFront(temp)

        if (this.head == null) {
            return this
        }
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return this
    }



    // // remove the minimum value in the queue (remember your edgecases and pointers!)
    // removeMin() {

    // }

    displayQueue() {
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
        if (this.head == null) {
            console.log("There's nothing in the list! Dummy!")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        //step #1) establish a runner to traverse through the list
        var runner = this.head;

        // NOTE: we can move runner all the way into null because our loop will exit as soon as runner hits null, avoiding any errors with printing
        while (runner != null) {
            // step #2) print the values at each iteration before moving the runner!
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        console.log("We have hit the end of the list!")
        // return 'this' to end function and allow chaining of methods
        return this
    }
}

var sll = new SLList
var SLQ = new SLQueue

sll.addToBack(1).addToBack(2).addToBack(3).addToBack(4).addToBack(5)
sll.printValues()
sll.prependNode(10, 2)
sll.printValues()

sll.addToBack(1).addToBack(2).addToBack(3).addToBack(4).addToBack(5)
sll.printValues()
sll.prependNode(10, 2)
sll.printValues()
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // addToFront and removeFront
// // as before, no use of .push(), .pop(), .splice(), etc.
// // there's also no need for these functions to return anything
// // (they can, but they don't need to - why?)
// // addToFront(arr, value) - adds value to the start of arr, at index 0
// // removeFront(arr) - removes the first item at the start of the array

// function addToFront(arr, value) {
//     arr[arr.length] = value
//     var temp = arr[arr.length - 1];
//     for (var i = arr.length -1; i >=0; i--){
//         arr[i] = arr[i-1];
//         console.log(arr);
//     }
//     arr[0] = temp
// }

// function removeFront(arr) {
//     for (var i = 0; i < arr.length - 1; i++){
//             arr[i] = arr[i + 1];
//     }
//     arr.length -= 1
// }

// let test_1 = [1, 2, 3, 4, 5];
// addToFront(test_1, 6);
// console.log(test_1); // should show [6, 1, 2, 3, 4, 5]
// console.log(test_1.length); // should show 6
// removeFront(test_1);
// console.log(test_1); // should show [1, 2, 3, 4, 5]
// console.log(test_1.length); // should show 5

// // bonus: can you make another version of these?
// // addMultipleToFront(arr, values) - accepts an array of values, each of which
// // is added to the front of the array
// // addMultipleToFront([1, 2, 3], [4, 5, 6]) should result in [4, 5, 6, 1, 2, 3]
// // removeMultipleFront(arr, count) - removes the first n items from the array,
// // based on the value of count
// // removeMultipleFront([4, 5, 6, 1, 2, 3], 2) should result in [6, 1, 2, 3]

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }


// class SLList{
//     constructor(){
//         this.head = null
//     }

//     addToFront(value) {
//         return this
//     }

//     // given a value, add it to the back of your singly linked list
//     // what if the list is empty?
//     addToBack(value) {
//         return this
//     }

//     // print the singly linked list
//     printValues() {
//         // step #0 [EDGE CASE]) handle a case where there is nothing in the list
//         if(this.head == null){
//             console.log("There's nothing in the list! Dummy!")
//             // return 'this' to end function and allow chaining of methods
//             return this
//         }
//         //step #1) establish a runner to traverse through the list
//         var runner = this.head;

//         // NOTE: we can move runner all the way into null because our loop will exit as soon as runner hits null, avoiding any errors with printing
//         while(runner != null) {
//             // step #2) print the values at each iteration before moving the runner!
//             console.log(`The current value is: ${runner.value}`)
//             runner = runner.next
//         }
//         console.log("We have hit the end of the list!")
//         // return 'this' to end function and allow chaining of methods
//         return this
//     }
// }

// const sll = new SLList();
// sll.addToFront(-3)
// sll.addToFront(-122)
// sll.addToFront(41)
// sll.addToBack(48)
// sll.addToBack(-5)
// sll.printValues()

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class SLList {
//     constructor() {
//         this.head = null
//     }

//     addToFront(value) {
//         var newNode = new Node(value)
//         if (this.head == null) {
//             this.head = newNode;
//         } else {
//             newNode.next = this.head;
//             this.head = newNode
//         }
//         return this
//     }

//     // given a value, add it to the back of your singly linked list
//     // what if the list is empty?
//     addToBack(value) {
//         if (this.head == null) {
//             this.addToFront(value);
//             console.log("hello")
//             return this
//         } else {
//             var newNode = new Node(value)
//             console.log("hello1")
//             var findNext = this.head;
//             while (findNext.next != null) {
//                 findNext = findNext.next
//             }
//             findNext.next = newNode
//             console.log(findNext.next)
//         }

//         return this
//     }



// const sll = new SLList();
// sll.addToFront(-3)
// sll.addToFront(-122)
// sll.addToFront(41)
// sll.addToBack(48)
// sll.addToBack(-5)

// removeFromFront(){
//     let newHead = this.head.next
//     this.head = newHead
//     return this
// }
// removeFromBack(){
//     let currentNode = this.head
//     let prevNode = null
//     while(currentNode.next != null){
//         prevNode = currentNode
//         currentNode = currentNode.next;
//     }
//     prevNode.next = null
//     return this
// }
// contains(value){
//     let currentNode = this.head
//     while(currentNode != null){
//         if(currentNode.value === value) return true
//         currentNode = currentNode.next
//     }
//     return false
// }

// // find the location of the lowest value in the list, and move that value to the front
// moveMinToFront(value){
//     var find_next = this.head;
//     while (find_next.next != null){
//         if(find_next.value < find_next.next.value){
//             find_next = find_next.next.value;
//             this.addToFront()
//         }
//     }
//     return this;
//     }


// // find the location of the highest value in the list, and move that value to the back
//     moveMaxToBack(){
//         var find_next = this.head;
//         while(find_next.next != null){
//             if(find_next.value == value){
//                 this.addtoBack()
//             }
//             find_next = find_next.next
//         }
//         return this;
//     }
/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.size = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if( this.size === 0 ){
        this.stack.push([x, x]);
    } else {
        let top = this.stack[this.stack.length-1];
        this.stack.push([x, x< top[1] ? x : top[1]]);
    }
    this.size ++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popped = this.stack.pop();
    this.size --;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let top = this.stack[this.stack.length-1];
    return top[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let top = this.stack[this.stack.length-1]
    return top[1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

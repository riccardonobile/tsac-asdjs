/*-------------------------------------------------------------------
 * Priority Queue
 * -------------------------------------------------------------------*/

function PriorityQueue() {
    this.queue = [];
}

function QueueItem(i, p) {
    this.item = i;
    this.priority = p;
}

PriorityQueue.prototype.enqueue = function(e) {
    var index = 0;
    this.queue.some(function(el, indx) {
        if(e.priority > el.priority){
            index =  indx;
            return true;
        }
    });
    this.queue.splice(index, 0, e);
}

PriorityQueue.prototype.dequeue = function() {
    return this.queue.pop();
}

PriorityQueue.prototype.front = function() {
    return this.queue[this.queue.length - 1];
}

PriorityQueue.prototype.size = function() {
    return this.queue.length;
}

PriorityQueue.prototype.isEmpty = function() {
    return this.queue.length == 0;
}

/*-------------------------------------------------------------------
* Priority Queue with callback
* -------------------------------------------------------------------*/

function PriorityQueueCallback(callback) {
    this.queue = [];
    this.ord = callback;
}

PriorityQueueCallback.prototype.enqueue = function(e) {
    var index = 0;
    this.queue.some(function(el, indx) {
        if(this.ord(e.priority, el.priority) == -1){
            index = indx;
            return true;
        }
    });
    this.queue.splice(index, 0, e);
}

PriorityQueueCallback.prototype.dequeue = function() {
    return this.queue.pop();
}

PriorityQueueCallback.prototype.front = function() {
    return this.queue[this.queue.length - 1];
}

PriorityQueueCallback.prototype.size = function() {
    return this.queue.length;
}

PriorityQueueCallback.prototype.isEmpty = function() {
    return this.queue.length == 0;
}

/*-------------------------------------------------------------------
 * Circular Queue
 * -------------------------------------------------------------------*/

function CircularQueue(n) {
    this.queue = new Array(n);
    this.size = n;
    this.head = 0;
    this.tail = 0;
}

CircularQueue.prototype.enqueue = function(e) {
    var i = (this.head + 1) % this.size;
    if(i != this.tail) {
        this.queue[this.head] = e;
        this.head = i;
    }
}

CircularQueue.prototype.dequeue = function() {
    if(this.head == this.tail) {
        return false;
    } else {
        var el = this.queue[this.tail];
        this.tail = (this.tail + 1) % this.size;
        return el;
    }
}

CircularQueue.prototype.front = function() {
    if(this.head == this.tail) {
        return false;
    } else {
        var el = this.queue[this.tail];
        return el;
    }
}

PriorityQueueCallback.prototype.size = function() {
    return this.queue.length;
}

PriorityQueueCallback.prototype.isEmpty = function() {
    return this.queue.length == 0;
}
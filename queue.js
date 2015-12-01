function Queue() {
    this.queue = [];
}

Queue.prototype.enqueue = function(x) {this.queue.unshift(x);}
Queue.prototype.dequeue = function() {return this.queue.pop();}
Queue.prototype.front = function() {return this.queue[this.queue.length - 1];}
Queue.prototype.size = function() {return this.queue.length;}
Queue.prototype.isEmpty = function() {return this.size() == 0;}


function QueueItem(i, p) {
    this.item = i;
    this.priority = p;
}

var q1 = new QueueItem('Riccardo', 5);
var q2 = new QueueItem('Daniele', 6);
var q3 = new QueueItem('Simone', 1);
var q4 = new QueueItem('Paolo', 3);
var q5 = new QueueItem('Sara', 9);
var q6 = new QueueItem('Nicole', 10);

var queue = new Queue();
queue.enqueue(q1);
queue.enqueue(q2);
queue.enqueue(q3);
queue.enqueue(q4);
queue.enqueue(q5);
queue.enqueue(q6);

function PriorityQueue() {
    this.queue = [];
}

function QueueItem(i, p) {
    this.item = i;
    this.priority = p;
}

PriorityQueue.prototype.enqueue = function(e) {
   var index = 0;
   var found = false;
   while (index < this.queue.length && !found) {
       var item = this.queue[index];
       if(e.priority < item.priority) {
           found = true;
       } else {
           index ++;
       }
   }
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




function PriorityQueueCallback(callback) {
    this.queue = [];
    this.ord = callback;
}

PriorityQueueCallback.prototype.enqueue = function(e) {
    var index = 0;
    var found = false;
    while (index < this.queue.length && !found) {
        var item = this.queue[index];
        if(callback(e.priority < item.priority) == -1 {
            found = true;
        } else {
            index ++;
        }
    }
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
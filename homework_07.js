function ex_1a(myarray) {
    if(myarray.length == 0) {
        return 10;
    } else {
        return 5 * myarray[0] + esercizio1(myarray.slice(1));
    }
}

function ex_1b(myarray) {
    if(myarray.length == 0) {
        return 0;
    } else {
        var x = myarray[0];
        if(x % 2 == 0) {
            return x * x + sommaQuadrati(myarray.slice(1));
        } else {
            return sommaQuadrati(myarray.slice(1));
        }
    }
}

function ex_2(myarray) {
    return myarray.reduce(function(tot, x) {
        if(x % 2 == 0) {
            return x * x + tot;
        } else {
            return tot;
        }
    }, 0);
}

function Stack() {
    this.array = [];
}
Stack.prototype.push = function (insert) {
    this.array.push(insert);
}
Stack.prototype.pop = function () {
    return this.array.pop();
}
Stack.prototype.peek = function () {
    return this.array[this.array.length - 1];
}
Stack.prototype.isEmpty = function () {
    return this.array.length == 0;
}

function ex_3(myarray) {
    var odd = new Stack();
    var even = new Stack();
    myarray.forEach(function(x) {
        if(x % 2 == 0) {
            even.push(x);
        } else {
            odd.push(x);
        }
    });
    var mult = new Stack();
    while(!(odd.isEmpty() || even.isEmpty())) {
        mult.push(odd.pop() * even.pop());
    }
    var tot = 0;
    while(!mult.isEmpty()) {
        tot += mult.pop();
    }
    return tot;
}
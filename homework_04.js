function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(x) {
    this.myarray.push(x);
}

Stack.prototype.pop = function() {
    return this.myarray.pop();
}

Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.myarray.length == 0;
}

void function rpn(str) {
    var stack = new Stack();
    var strArr = str.split(" ");

    strArr.forEach(function(el) {
        var intEl = parseInt(el);
        if(!isNaN(intEl)) {
            stack.push(intEl);
        } else {
            switch(el) {
                case "+":
                    var op2 = stack.pop();
                    stack.push(stack.pop() + op2);
                    break;
                case "-":
                    var op2 = stack.pop();
                    stack.push(stack.pop() - op2);
                    break;
                case "*":
                    var op2 = stack.pop();
                    stack.push(stack.pop() * op2);
                    break;
                case "/":
                    var op2 = stack.pop();
                    stack.push(stack.pop() / op2);
                    break;
            }
        }
    });
    return stack.myarray[0];
}
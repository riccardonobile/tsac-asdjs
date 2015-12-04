/*  Esame 2015 - Riccardo Nobile - 04/12/2015 */
function initialArray() {
    var seed = 1;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return Math.floor(x);
    }

    var a = [];
    for(var i = 0; i < 10000; ++i) {
        a.push(random());
    }
    return a;
}



/*
 * START Esercizio Stack
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
    return callback(_0xd10d[0]);
}

/* END Esercizio Stack */

/*  Verifica che l'array generato da initialArray() */
function verArray(array) {
    if (array.length == 0) {
        return 0;
    } else {
        return array[0] + sumAll(array.slice(1));
    }
}

/*  Esercizio 1 - Ricorsione
 *  Dato l’array A creato dalla funzione initialArray() sviluppare un
 *  algoritmo ricorsivo non di coda in javascript che restituisca il
 *  numero di elementi presenti in A che corrispondono al valore 5070.
 */

function find(array) {
    if (array.length == 0) {
        return 0;
    } else {
        if (array[0] == 5070) {
            return 1 + find(array.slice(1));
        } else {
            return find(array.slice(1));
        }
    }
}

/*  Esercizio 2 - filter/map/reduce
 *  Dato l’array A creato dalla funzione initialArray() sviluppare un
 *  algoritmo in javascript che restituisca la radice quadrata della
 *  somma dei quadrati dei soli elementi positivi (>= 0) pari. Si implementi
 *  l’agoritmo utilizzando almeno una volta tutti i seguenti metodi
 *  dell’oggetto Array: filter, map e reduce.
 */

function filteredSqrt(array) {
    return Math.sqrt(
        array.filter(x => x >= 0).filter(x => x % 2 == 0).map(x => x * x).reduce((acc, x) => acc + x, 0)
    );
}

/*  Esercizio 3 - Esercizio Stack
 *  Si implementi una funzione in javascript che implementi l’algoritmo che
 *  valuta il valore di un’espressione “fully parentherized”, ovvero un’espressione
 *  in cui ogni singola operazione è all’interno di parentesi.
 */

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

function stack() {
    var vStack = new Stack();
    var sStack = new Stack();


}

/*  Esercizio 5 - Tree
 *  Si implementi un albero binario di ricerca in javascript e si inseriscano
 *  gli elementi contenuti nell’array A[0..n-1], ottenuto da initialArray(),
 *  nell’ordine dall’indice 0 all’indice n-1. Si calcoli, mediante l’implementazione
 *  di un algoritmo ricorsivo, il valore massimo all’interno dell’albero.
 */

function Node(i, left, right) {
    this.item = i;
    this.l = left;
    this.r = right;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(currentNode, newNode) {
    if (newNode.item < currentNode.item) {
        var left = currentNode.l;
        if (left == null) {
            currentNode.l = newNode;
        } else {
            this.addNode(currentNode.l, newNode);
        }
    } else {
        var right = currentNode.r;
        if (right == null) {
            currentNode.r = newNode;
        } else {
            this.addNode(currentNode.r, newNode);
        }
    }

}

BST.prototype.add = function (item) {
    if (this.root == null) {
        this.root = new Node(item, null, null);
    } else {
        this.addNode(this.root, new Node(item, null, null));
    }
}

function tree(array) {
    var myTree = new BST();
    array.forEach(function(x) {
        myTree.add(x);
    });
    function searchMax(tree, max) {
        if (tree == null) {
            return max;
        } else {
            max = tree.item;
            return searchMax(tree.r, max);
        }
    }
    return searchMax(myTree.root, 0);
}

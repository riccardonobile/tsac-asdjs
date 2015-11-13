// 1 - Dato un myarray di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo

// Spazio: O(1)
// Tempo: O(n)
function sumwhileneg(myarray) {
    var tot = 0;
    myarray.every(function(x) {
        if (x < 0) {
            return false;
        } else {
            tot += x;
            return true;
        }
    });
    return tot;
}

// 2 - Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari

// Spazio: O(1)
// Tempo: O(n)
function firsrtOdd(n) {

}

// 3 - Dato un array di 10 elementi, calcolarne la media

// Spazio: O(1)
// Tempo: O(n)
function avgAll(myarray) {
    var tot = myarray.reduce(function (acc, x) {
        return acc + x;
    }, 0);
    return tot / myarray.length;
}

// 4 - Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a, calcolare la somma nell’intervallo [b,a]

function sumInterval(x, y) {

}


// 5 - Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo operatore somma

// Spazio: O(1)
// Tempo: O(n)
function mult(x, y) {

}

// 6 - Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite l’utilizzo dei soli operatori somma e sottrazione

// Spazio: O(1)
// Tempo: O(n)
function div(a, b) {

}

// 7 - Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli operatori somma, sottrazione e della funzione mult

// Spazio: O(1)
// Tempo: O(n)
function pow(x, y) {

}

// 8 - Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli oggetti in un array bidimensionale n x n

// Spazio: O(n^2)
// Tempo: O(n^2)
function arrToMatrix(myarray) {
    var n = Math.sqrt(myarray.length);
    if(n % 1 !== 0) {
        return 0;
    }
    var matrix = [];

}

// 9 - Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli elementi

// Spazio: O(1)
// Tempo: O(n)
function invertiList(list) {
    return list.map(function(x, index, array) {
        return array[array.length - 1 - index];
    });
}

// 10 - Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi contenenti a

// Spazio: O(1)
// Tempo: O(n)
function repeatList(el, n) {
    var output = [];
    for(var i = 0; i < n; i++) {
        output.push(el);
    }
    return output;
}

// 11 - Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi dispari precedano nello stesso ordine tutti gli elementi pari

// Spazio: O(1)
// Tempo: O(n)
function orderOdd(myarray) {
    var arrayOdd = myarray.filter(function(x) {
        return x % 2;
    });
    var arrayEven = myarray.filter(function(x) {
        return !(x % 2);
    });
    return arrayOdd.concat(arrayEven);
}

// Per Tiziano
function ex_1_F(myarray) {
    return sumwhileneg(myarray);
}
function ex_2_F(n) {
    return firsrtOdd(n);
}
function ex_3_F(myarray) {
    return avgAll(myarray);
}
function ex_4_F(x, y) {
    return sumInterval(x, y);
}
function ex_5_F(x, y) {
    return mult(x, y);
}
function ex_6_F(x, y) {
    return div(x, y);
}
function ex_7_F(x, y) {
    return pow(x, y);
}
function ex_8_F(myarray) {
    return arrToMatrix(myarray);
}
function ex_9_F(myarray) {
    return invertiList(myarray);
}
function ex_10_F(x, y) {
    return repeatList(x, y);
}
function ex_11_F(myarray) {
    return orderOdd(myarray);
}

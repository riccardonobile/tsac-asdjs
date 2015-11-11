// 1 - Dato un myarray di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo

// Iterative
// Spazio: O(1)
// Tempo: O(n)
function sumwhileneg(myarray) {
	var tot = 0;
	for(i = 0; i < myarray.length; ++i) {
		var x = myarray[i];
		if (x > 0) {
			tot += x;
		} else {
			return tot;
		}
	}
	return tot;
}

// Ricorsive
// Spazio: O(n)
// Tempo: O(n)
function sumwhilenegR(myarray) {
    if(myarray.length == 0 || myarray[0] < 0) {
        return 0;
    } else {
        return myarray[0] + sumwhilenegR(myarray.slice(1));
    }
}

// 2 - Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari

// Iterative
// Spazio: O(1)
// Tempo: O(n)
function firsrtOdd(n) {
    var tot = 0;
    for (var i = 0; i < n; i++) {
        tot += 1 + 2 * i;
    }
    return tot;
}

// Ricorsive
// Spazio: O(n)
// Tempo: O(n)
function firsrtOddR(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + firsrtOddR(n - 1);
    }
}

// 3 - Dato un array di 10 elementi, calcolarne la media

// Iterative
// Spazio: O(1)
// Tempo: O(n)
function avgAll(myarray) {
    var tot = 0;
    for(var i = 0; i < myarray.length; i++) {
        tot += myarray[i];
    }
    return tot / myarray.length;
}

// Ricorsive
// Spazio: O(n)
// Tempo: O(n)
function avgAllRW(myarray) {
    if (myarray.length == 0) {
        return 0;
    } else {
        return myarray[0] + avgAllRW(myarray.slice(1));
    }
}

function avgAllR(myarray) {
    return avgAllRW(myarray) / myarray.length;
}

// 4 - Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a, calcolare la somma nell’intervallo [b,a]

// Iterative
// Spazio: O(1)
// Tempo: O(n)
function sumIntervalW(x, y) {
    var tot = 0;
    for(var i = x; i <= y; i++) {
        tot += i;
    }
    return tot;
}

function sumInterval(x, y) {
    if (x < y){
        return sumIntervalW(x, y);
    } else {
        return sumIntervalW(y, x);
    }
}

// Ricorsive
// Spazio: O(n)
// Tempo: O(n)
function sumIntervalRW(x, y) {
    if (x == y) {
        return x;
    } else {
        return x + sumIntervalRW(x + 1, y);
    }


}

function sumIntervalR(x, y) {
    if (x < y){
        return sumIntervalRW(x, y);
    } else {
        return sumIntervalRW(y, x);
    }
}

// 5 - Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo operatore somma

// Iterative
// Spazio: O(1)
// Tempo: O(n)
function mult(x, y) {
	var tot = 0;
	for (var i = 0; i < y; i++) {
		tot += x;
	}
	return tot;
}

// Ricorsive
// Spazio: O(n)
// Tempo: O(n)
function multR(x, y) {
	if(y == 0) {
		return 0;
	}
	return x + multR(x, y-1)
}

// 6 - Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite l’utilizzo dei soli operatori somma e sottrazione

// Iterative
// Spazio: O(1)
// Tempo: O(n)
function div(a, b) {
	var ris = 0, rest = 0, temp = 0;
	for (ris; temp + b <= a; ris++) {
		temp += b;
	}
	rest = a - temp;
	return ris + ' resto ' + rest;
}

// Ricorsive
// Spazio: O(n)
// Tempo: O(n)
function divR(a, b) {
	function divRIN(a, b) {
		if(a <= 0) {
			return 0;
		}     
		return 1+divRIN(a-b,b);
	}
	var ris = divRIN(a, b);
	var rest = a - (mult(ris, b)); 
	return ris + ' resto ' + rest;
}

// 7 - Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli operatori somma, sottrazione e della funzione mult

// Iterative
// Spazio: O(1)
// Tempo: O(n)
function pow(x, y) {
	var ris = 1;
	for (var i = 0; i < y; i++) {
		ris = mult(ris, x);
	}
	return ris;
}

// Ricorsive
// Spazio: O(n)
// Tempo: O(n)
function powR(x, y) {
	if(y == 0) {
		return 1;
	}
	return mult(x, powR(x, y-1));
}

// 8 - Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli oggetti in un array bidimensionale n x n.

// Iterative
// Spazio: O(n^2)
// Tempo: O(n^2)
function arrToMatrix(myarray) {
	var n = Math.sqrt(myarray.length);
	if(n % 1 !== 0) {
		return 0
	}
	var matrix = [];
	var c = 0;
	for(var i = 0; i < n; i++) {
		for(var l = 0; l < n ; l++) {
			if(!matrix[i]) {
				matrix[i] = [];
			}
			matrix[i][l] = myarray[c];
			c++;
		}
	}
	return matrix;
} 

// Ricorsive
// Spazio: O()
// Tempo: O()
function arrToMatrixR(myarray) {
	var n = Math.sqrt(myarray.length);
	if(n % 1 !== 0) {
		return 0
	}
	result = [];
	function arrToMatrixRIN(myarray, result, n) {
		if(myarray.length == 0) {
			return;
		}
		result = result.push(myarray.slice(n));
		myarray = myarray.splice(0,n);
		return arrToMatrixRIN(myarray, result, n);
	}
	arrToMatrixRIN(myarray, result, n)
}


// Per Tiziano
function ex_1_I(myarray) {
    return sumwhileneg(myarray);
}
function ex_1_R(myarray) {
    return sumwhilenegR(myarray);
}
function ex_2_I(n) {
    return firsrtOdd(n);
}
function ex_2_R(n) {
    return firsrtOddR(n);
}
function ex_3_I(myarray) {
	return avgAll(myarray);
}
function ex_3_R(myarray) {
	return avgAllR(myarray);
}
function ex_4_I(x, y) {
	return sumInterval(x, y);
}
function ex_4_R(x, y) {
	return sumIntervalR(x, y);
}
function ex_5_I(x, y) {
	return mult(x, y);
}
function ex_5_R(x, y) {
	return multR(x, y);
}
function ex_6_I(x, y) {
	return div(x, y);
}
function ex_6_R(x, y) {
	return divR(x, y);
}
function ex_7_I(x, y) {
	return pow(x, y);
}
function ex_7_R(x, y) {
	return powR(x, y);
}
function ex_8_I(myarray) {
	return arrToMatrix(myarray);
}
function ex_8_R(myarray) {
	return arrToMatrixR(myarray);
}

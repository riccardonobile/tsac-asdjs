// Esercizio 1
	function sommaArray(arr) {
		var somma = 0;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] >= 0) {
				somma += arr[i];
			} else {
				return somma;
			}
		}
	}
	sommaArray([0, 5, 2, 7, -3, 9]);	// => 14

// Esercizio 2
	function sommaPrimi(n) {
		var somma = 0;
		for (var i = 0; i < n*2; i++) {
			if(i % 2) {
				somma += i;
			}
		}
		return somma;
	}
	sommaPrimi(3);	// => 9

// Esercizio 3
	function media(arr) {
		var media = 0;
		for(var i = 0; i < arr.length; i++) {
			media += arr[i];
		}
		return media / arr.length;
	}
	media([3, 4, 5]);	// => 4

// Esercizio 4
	function sumInterval(a, b) {
		var somma = 0;
		if (b < a) {
			var scambio = a;
			a = b;
			b = scambio;
		}
		for (var i = a; i <= b; i++) {
			somma += i;
		}
		return somma;
	}
	sumInterval(3, 5);	// => 12
	sumInterval(5, 3);	// => 12

// Esercizio 5
	function mult(x, y) {
		var ris = 0;
		for (var i = 0; i < y; i++) {
			ris += x;
		}
		return ris;
	}
	mult(2, 3);	// => 6

// Esercizio 6
	function div(a, b) {
		var ris = 0, rest = 0, temp = 0;
		for (ris; temp + b <= a; ris++) {
			temp += b;
		}
		rest = a - temp;
		return ris + ' resto ' + rest;
	}
	div(5, 3);	// => 2 resto 1

// Esercizio 7
	function pow(x, y) {
		var ris = 1;
		for (var i = 0; i < y; i++) {
			ris = mult(x, x);
		}
		return ris;
	}
	pow(2, 3);	// => 8
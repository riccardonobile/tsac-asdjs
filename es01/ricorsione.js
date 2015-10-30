// Esercizio 1
	function sommaArray(arr) {
		if(arr[0] < 0) {
			return 0;
		}
		return arr[0] + sommaArray(arr.slice(1, arr.length));
	}
	sommaArray([0, 5, 2, 7, -3, 9]);	// => 14

// Esercizio 2 (Da sistemare)
	function sommaPrimi(n) {
		var somma = n;
		if(n == 1) {
			return 1;
		}
		if(n % 2) {
			somma += sommaPrimi(n - 1);
		}
	}
	sommaPrimi(3);	// => 9
// Esercizio 4

	function sumInterval(a, b) {
		if (b < a) {
			var scambio = a;
			a = b;
			b = scambio;
		}
		function sumIntervalInt(a, b) {
			if(a = b) {
				return b;
			}
			return a + sumIntervalInt(a + 1, b);
		}
	}
	sumInterval(3, 5);	// => 12
	sumInterval(5, 3);	// => 12

// Esercizio 3
	function media(arr) {
		function sommaArray(arr) {
			if(arr.length == 1) {
				return arr[0];
			}
			return (arr[0] + sommaArray(arr.slice(1, arr.length)));
		}
		return sommaArray(arr) / arr.length;		
	}
	media([3, 4, 5]);	// => 4

// Esercizio 5
	function mult(x, y) {
		if(y == 0) {
			return 0;
		}
		return x + mult(x, y-1)
	}
	mult(2, 3);	// => 6

// Esercizio 7
	function pow(x, y) {
		if(y == 0) {
			return 1;
		}
		return mult(x, pow(x, y-1));
	}
	pow(2, 3);	// => 8
describe("PrimosEratostenes", function() {
	
	var primos;
	
	beforeEach(function() {
		primos = new PrimosEratostenes();
	})
	
	describe("Calcular primos", function() {
		it("calculates all primes up to zero", function() {
			expect(primos.calcularPrimos(0)).toEqual([]);
		});

		it("calculates all primes up to two", function() {
			expect(primos.calcularPrimos(2)).toEqual([2]);
		});

		it("calculates all primes up to three", function() {
			expect(primos.calcularPrimos(3)).toEqual([2, 3]);
		});

		it("calculates all primes up to four", function() {
			expect(primos.calcularPrimos(4)).toEqual([2, 3]);
		});

		it("calculates all primes up to five", function() {
			expect(primos.calcularPrimos(5)).toEqual([2, 3, 5]);
		});

		it("calculates all primes up to ten", function() {
			expect(primos.calcularPrimos(10)).toEqual([2, 3, 5, 7]);
		});

		it("calculates all primes up to twenty five", function() {
			expect(primos.calcularPrimos(25)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
		});

		it("calculates all primes up to 130", function() {
			expect(primos.calcularPrimos(130)).toEqual(
					[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 
					37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 
					79, 83, 89, 97, 101, 103, 107, 109, 113, 127]
				);
		});

		it("calculates all primes up to 1000", function() {
			expect(primos.calcularPrimos(1000)).toEqual(
					[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 
					37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 
					79, 83, 89, 97, 101, 103, 107, 109, 113, 
					127, 131, 137, 139, 149, 151, 157, 163, 
					167, 173, 179, 181, 191, 193, 197, 199, 
					211, 223, 227, 229, 233, 239, 241, 251, 
					257, 263, 269, 271, 277, 281, 283, 293, 
					307, 311, 313, 317, 331, 337, 347, 349, 
					353, 359, 367, 373, 379, 383, 389, 397, 
					401, 409, 419, 421, 431, 433, 439, 443, 
					449, 457, 461, 463, 467, 479, 487, 491, 
					499, 503, 509, 521, 523, 541, 547, 557, 
					563, 569, 571, 577, 587, 593, 599, 601, 
					607, 613, 617, 619, 631, 641, 643, 647, 
					653, 659, 661, 673, 677, 683, 691, 701, 
					709, 719, 727, 733, 739, 743, 751, 757, 
					761, 769, 773, 787, 797, 809, 811, 821, 
					823, 827, 829, 839, 853, 857, 859, 863, 
					877, 881, 883, 887, 907, 911, 919, 929, 
					937, 941, 947, 953, 967, 971, 977, 983, 
					991, 997]
				);
		});
	})
	
	describe("Remove multiples from array", function() {
		it("removes multiples of two from arrays up to four", function() {
			var array = primos.init(4);
			primos.removeMultiples(array, 2);
			expect(array).toEqual([2, 3]);
		});

		it("removes multiples of two from arrays up to 6", function() {
			var array = primos.init(6);
			primos.removeMultiples(array, 2);
			expect(array).toEqual([2, 3, 5]);
		});


		it("removes multiples of two and three from arrays up to 10", function() {
			var array = primos.init(10);
			primos.removeMultiples(array, 2);
			primos.removeMultiples(array, 3);
			expect(array).toEqual([2, 3, 5, 7]);
		});
	})
})
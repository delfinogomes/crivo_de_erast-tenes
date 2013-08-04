function PrimosEratostenes() { }

PrimosEratostenes.prototype = {
	
	init: function(number) {
		var numbers = [];
		for (var i = 2; i <= number; i++) {
			numbers.push(i);
		}
		return numbers
	},
	
	removeMultiples : function(numbers, num) {
		
		var idx = numbers.indexOf(num);
		
		for(var i = idx + 1; i < numbers.length; i++) {
			var n = numbers[i];
			if (this.isMultipleOf(n, num)) {
				numbers.splice(i, 1);
				i--;
			}
		}
	},
	
	isMultipleOf : function(n, num) {
		return n % num == 0;
	},
	
	calcularPrimos : function(maxNumber) {
		var numbers = this.init(maxNumber);
		
		for(var i = 0; i < numbers.length; i++) {
			var n = numbers[i];
			this.removeMultiples(numbers, n);
		}
		
		return numbers;
	}
}
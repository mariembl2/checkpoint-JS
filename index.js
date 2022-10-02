function hello() {
	return "hello edabit.com" 
}
//maximum edge of a triangle
function nextEdge(side1, side2) {
	return (side1+side2)-1
}
//Less Than 100?
function lessthanzero(num) {
	let result;
	if (num <= 0) {
	  result = true;
	} else {
	  result = false;
	}
	return result;
  }
  function shiftToLeft(x, y) {
	return x*(2**y)
	
}
//convert minutes into seconds
function convert(minutes) {
	return minutes*60
	
}
function howManySeconds(hours) {
	return	hours*3600
   }

function triArea(base, height) {
	return (base * height) / 2
	
}
//return the sum of two numbers
function addition(a, b) {
	return a+b
}
function findPerimeter(length, width) {
	return (length+width)*2
	
}
//buggy code
function printArray(number) {
	var newArray = [];
  
	for(var i = 1; i <= number;) {
	  newArray.push(i);
	}
  
	return newArray;
  }
//power calculator
function circuitPower(voltage, current) {
	return voltage * current;
  }
  // convert age to days
  function calcAge(age) {
	return age * 365; 
}
//Basketball points
function points(twoPointers, threePointers){
	return twoPointers * 2 + threePointers * 3;
}
//return something to me
function giveMeSomething(a) {
	return "something" + " " + a;
}
//Sum of Polygon Angles
function sumPolygon(n){
	return (n-2) * 180;
}
//Basic Variable Assignment
function nameString(name){
	var b = "Edabit"
	var result = name + b
  	return result
}
//Correct the Mistakes
function squared(a) {
	return a * a
}
//Matchstick Houses
function matchHouses(step) {
	return step === 0 ? 0 : 5 * step + 1;
}
//find the smallest and biggest numbers
function minMax(arr) {
	var returnArr =[];
	var min = arr[0];
	var max = arr[0];
	
	for (var i = 1; i < arr.length; i++) {
	
	  if (arr[i] < min) {
		min = arr[i];
	  } if  (arr[i] > max) {
		max = arr[i];
	  }
	
	
	}
		 returnArr.push(min);
	  returnArr.push(max);
		return returnArr;
	}
	//time for milk and cookies
	function timeForMilkAndCookies(date) {
		let day = date.getDate()
	  let month = date.getMonth();
	  
	  if (day == 24 && month == 11) {
		return true
	  }
	  else {
		console.log('its not xmas :(' )
		return false
	  }
	
		
	}
	//Which Function Returns the Larger Number?
	function whichIsLarger(f, g) {
		if (f() < g()) {
		return "g";
	  } else if (f() > g()) {
		return "f";
	  } else return "neither";
	
		
	}
	//Convert a Number to Base-2
	function binary(decimal) {
		var d= [512,256,128,64,32,16,8,4,2,1], r= '';
		for (var i in d) {
			if (decimal>= d[i]) {
				r +='1';
				decimal -=d[i];
			} else r += '0';
		}
		return '' + (r | 0);
	}
	//Check if One Array can be Nested in Another
	function canNest(arr1, arr2) {
		let firstMax = Math.max(...arr1);
		let secondMax= Math.max(...arr2);
		
		let firstMin= Math.min(...arr1);
		let secondMin= Math.min(...arr2);
		if ((firstMax < secondMax) && (firstMin> secondMin)){
			return true;
			
		}else {
			return false;
		}
	
	}
	//bitwise functions
	function bitwiseAND(n1, n2) {
		return n1 & n2;
		
	}
	
	function bitwiseOR(n1, n2) {
		return n1 | n2;
		
	}
	
	function bitwiseXOR(n1, n2) {
		return n1 ^ n2;
		
	}

	function remainder(minutes) {
		return x % y;
	}

	//redundant function
	function redundant(str) {
		function func() {
				return str;
		}
		return func ;
	
	}
	 //Array of Multiples
	 function arrayOfMultiples (num, length) {
		let output = [];
	 let multiple = 0;
	 for (i = 1; i < length + 1; i++) {
	   multiple = num * i;
	   output.push(multiple);
	 }
	 return output;
   } 

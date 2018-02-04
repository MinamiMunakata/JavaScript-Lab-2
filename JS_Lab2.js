/*
JavaScript Lab 2
Minami Munakata
*/
//Question 1
console.log("Question 1")
function rotateLeft3(array) {
	var lef = array.shift();
	array.push(lef);
	return array
}
console.log(rotateLeft3([1,2,3]))
console.log(rotateLeft3([5,11,9]))
console.log(rotateLeft3([7,0,0]))
//Question 2
console.log("Question 2")
function reverse3(array) {
	var rig = array.pop();
	array.push(array[0]);
	array[0] = rig;
	return array;
}
console.log(reverse3([1,2,3]))
console.log(reverse3([5,11,9]))
console.log(reverse3([7,0,0]))
//Question 3
console.log("Question 3")
function has23(array) {
	return(array.includes(2) || array.includes(3));
}
console.log(has23([2,5]));
console.log(has23([4,3]));
console.log(has23([4,5]));
//Question 4
console.log("Question 4")
function fix23(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] == 2 && array[i+1] == 3) {
			array[i+1] = 0;
		}
	}
	return array;
}
console.log(fix23([1,2,3]));
console.log(fix23([2,0,5]));
console.log(fix23([1,2,1]));
//Question 5
console.log("Question 5")
function maxTriple(array) {
	var max = array.reduce(function(a, b) {
		return Math.max(a, b);
	});
	return max;

}
console.log(maxTriple([1,2,3]));
console.log(maxTriple([1,5,3]));
console.log(maxTriple([5,2,3]));
//Question 6
console.log("Question 6")
function swapEnds(array) {
	var rig = array.pop();
	array.push(array[0]);
	array[0] = rig;
	return array;
}
console.log(swapEnds([1,2,3,4]));
console.log(swapEnds([1,2,3]));
console.log(swapEnds([8,6,7,9,5]));
//Question 7
console.log("Question 7")
function unlucky1(array) {
	var unluck = {};
	for (var i = 0; i < array.length; i++) {
		if (array[i] == 1 && array[i+1] == 3) {
			unluck = array[i];
		}
	}
	return (unluck == array[0] || unluck == array[1] || unluck == array[array.length-2]);

}
console.log(unlucky1([1,3,4,5]))
console.log(unlucky1([2,1,3,4,5]))
console.log(unlucky1([1,1,1]))
//Question 8
console.log("Question 8")
function front11(a,b) {
	var newArr = [];
	if (a.length > 0 && b.length > 0) {
		newArr.push(a[0]);
		newArr.push(b[0]);
	} else if (a.length == 0) {
		newArr.push(b[0]);
	} else if (b.length == 0) {
		newArr.push(a[0]);
	}
	return newArr;
}
console.log(front11([1,2,3],[7,9,8]));
console.log(front11([1],[2]));
console.log(front11([1,7],[]));
//Question 9
console.log("Question 9")
function isEverywhere(array,b) {
	for (var i = 0; i < array.length-1; i++) {
		if (array.includes(b) == false) {
			return false;
			
		} else {
			var temp = [];
			temp.push(array[i])
			temp.push(array[i+1])
			if (temp.includes(b)) {
				temp = [];
			} else {
				return false;
			}

		}
	}
	return true;
}
console.log(isEverywhere([1, 2, 1, 3], 1));
console.log(isEverywhere([1, 2, 1, 3], 2));
console.log(isEverywhere([1, 2, 1, 3, 4], 1));
//Question 10
console.log("Question 10")
function tenRun(array) {
	var newArr = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i-1]%10 != 0) {
			if (newArr[i-1]%10 != 0) {
				newArr.push(array[i]);
			} else {
				if (array[i]%10 == 0) {
					newArr.push(array[i]);
				} else {
					newArr.push(newArr[i-1]);
				}
				
			}
			
		} else {
			newArr.push(array[i-1]);
		}
	}return newArr;
}
console.log(tenRun([2, 10, 3, 4, 20, 5]));
console.log(tenRun([10, 1, 20, 2]));
console.log(tenRun([10, 1, 9, 20]));
//Question 11
console.log("Question 11")

function twoTwo(array) {
	var newArr = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i]==2) {
			if (array[i-1]!=2 && array[i+1]!=2) {
				return false;
			}

		}
	}
	return true;

}
console.log(twoTwo([4, 2, 2, 3]));
console.log(twoTwo([2, 2, 4]));
console.log(twoTwo([2, 2, 4, 2]));

//Question 12
console.log("Question 12")
function shiftLeft(array) {
	var lef = array.shift();
	array.push(lef);
	return array
}
console.log(shiftLeft([6, 2, 5, 3]));
console.log(shiftLeft([1, 2]));
console.log(shiftLeft([1]));

//Question 13
console.log("Question 13")
function evenOdd(array) {
	var e = [];
	var o = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i]%2 == 0) {
			e.push(array[i]);
		} else {
			o.push(array[i]);
		}
	}
	return (e.concat(o));
}
console.log(evenOdd([1, 0, 1, 0, 0, 1, 1]));
console.log(evenOdd([3, 3, 2]));
console.log(evenOdd([2, 2, 2]));
//Question 14
console.log("Question 14")
function fizzBuzz (s,e) { // s = start. e = end.
	var array = [];
	var result = [];
	for (var i = s; i < e; i++) {
		array.push(i);
	}
	for (var i = 0; i < array.length; i++) {
		if (array[i] % 3 == 0 && array[i] % 5 == 0) {
			result.push("FizzBuzz");
		} else if (array[i] % 3 == 0){
			result.push("Fizz");
		} else if (array[i] % 5 == 0) {
			result.push("Buzz");
		} else {
			result.push(array[i].toString());
		}
	}
	return result;
}
console.log(fizzBuzz(1, 6));
console.log(fizzBuzz(1, 8));
console.log(fizzBuzz(1, 11));
//Question 15
console.log("Question 15")
function countClumps(array) {
	var count = 0
	for (var i = 0; i < array.length-1; i++) {
		if (array[i] == array[i+1]) {
			if (array[i-1] != array[i]) {
				count++
			}

		}
	}
	return count;
}
console.log(countClumps([1, 2, 2, 3, 4, 4]));
console.log(countClumps([1, 1, 2, 1, 1]));
console.log(countClumps([1, 1, 1, 1, 1]));

/*
Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):

a) find largest number

b) find longest string

c) find even numbers

d) find odd numbers

e) find words that contain 'is'

f) assert all numbers are divisible by three

g) zip two arrays together

h) sort joined array from smallest to largest

i) remove the first word in the array

j) place a new word at the start of the array

k) replace some elements

l) Over an array with names, find all entries whose firstname starts with 'J',  
create projection combined of only the initials of the name and then sort alphabetically*/

var array = new Array(10);
iniciarArray(array);
var array2 = new Array(3);
iniciarArray2(array2);
var array3 = new Array(3);
iniciarArray3(array3);
var array4 = new Array(3);
iniciarArray4(array4);

document.write("findLargestNumber: " + findLargestNumber(array) + "<br/>");
document.write("findLongestString: " + findLongestString(array2) + "<br/>");
document.write("findEvenNumbers: " + findEvenNumbers(array) + "<br/>");
document.write("findOddNumbers: " + findOddNumbers(array) + "<br/>");
document.write("containsIS: " + containsIS(array2) + "<br/>");
document.write("allDivisibleThree: " + allDivisibleThree(array3) + "<br/>");
document.write("zipArrays: " + zipArrays(array,array3) + "<br/>");
document.write("sortArray: " + sortArray(array) + "<br/>");
document.write("removeFirstWord: " + removeFirstWord(array2) + "<br/>");
document.write("addWordInitArray: " + addWordInitArray(array2,"palabra") + "<br/>");
document.write("replaceElements: " + replaceElements(array2,1,"andalucia") + "<br/>");
document.write("findInitWithJ: " + findInitWithJ(array4) + "<br/>");

function iniciarArray (array) {
	for (var i = 0; i < 10; i++) {
		array[i] = Math.floor(Math.random() * 1000 + 1);
	}
}

function iniciarArray2 (array) {
	array[0] = "hola";
	array[1] = "granada";
	array[2] = "IS";
	
}
function iniciarArray3 (array) {
	array[0] = 3;
	array[1] = 6;
	array[2] = 9;
	
}
function iniciarArray4 (array) {
	array[0] = "Antonio Jimenez";
	array[1] = "Fran Saavedra";
	array[2] = "Javier Jimenez";
	
}

function findLargestNumber (array) {
	return Math.max(...array);//... permite expandir una expresión para poder pasar arrays. 
}
function findLongestString (array) {
	var mayor = "";
	for (var i = 0; i < array.length; i++) {
		if(array[i].length > mayor.length)
			mayor = array[i]
	}
	return mayor;
}
function findEvenNumbers (array) {
	return array.filter(function(element){
		return element % 2 == 0;
	});

}
function findOddNumbers (array) {
	return array.filter(function(element){
		return element % 2 != 0;
	});
}
function containsIS (array) {
	return array.includes("IS");
}
function allDivisibleThree (array) {
	var divisible = true;
	for (var i = 0; i < array.length; i++) {
		if (array[i] % 3 != 0) {
			divisible = false;
			break;
		}
	}
	return divisible;
}
function zipArrays (array1,array2) {
	return array1.concat(array2);
}

function sortArray (array) {
	array.sort(function (a,b){
		return a - b;
	});
	return array;
}
function removeFirstWord (array) {
	array.shift();
	return array; 
}
function addWordInitArray (array,word) {
	array.unshift(word);
	return array;
}
function replaceElements (array,index,newWord) {
	array[index] = newWord;
	return array;
}
function findInitWithJ (array) {
	var newArray = new Array();
	var pos = array.indexOf(" ");
	for (var i = 0; i < array.length; i++) {
		var temporal = array[i].split(" ");
		if (temporal[1].charAt(0) == "J") {
			newArray.unshift(temporal[0]);
		}
	}

	newArray.sort();
	return newArray;
}
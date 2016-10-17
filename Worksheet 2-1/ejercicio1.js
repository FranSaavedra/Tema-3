/*
Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):

a) find largest number

b) find longest string

c) find even numbers

d) find odd numbers

e) find words that contain 'is'

f) assert all numbers are divisible by three

g)  zip two arrays together

h) sort joined array from smallest to largest

i) remove the first word in the array

j) place a new word at the start of the array

k) replace some elements

l) Over an array with names, find all entries whose firstname starts with 'J',  
create projection combined of only the initials of the name and then sort alphabetically*/

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
	var arrayPar = new Array();
	arrayPar = array.filter(function(element,index,array){
		return (index % 2 === 0);
	});
	return arrayPar;

}
function findOddNumbers (array) {
	var arrayImpar = new Array();
	arrayImpar = array.filter(function(element,index,array){
		return (index % 2 != 0);
	});
	return arrayImpar;
}
function containsIS (array) {
	var arrayIS = new Array();
	arrayIS = array.filter(function(element,index,array){
		return (element.contains("IS"));
	});
	return arrayIS;
}
function allDivisibleThree (array) {
	var divisible = true;
	for (var i = 0; i < array.length; i++) {
		if (array[i] % 3 != 0) {
			divisible = false;
			break;
		}

	}
}
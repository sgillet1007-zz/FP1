// 1.
// function tripleFive() {
// for (i=0;i<3;i++) {
// 	console.log("Five!")
// }
// }

// tripleFive()

// 2.
// function lastLetter(word) {
// console.log((word[word.length-1]));
// return (word[word.length-1]);
// }

// lastLetter('hello')
// lastLetter('island')


// 3.
// function square(i) {
// 	var squared = i * i;
// 	console.log(squared)
// 	return squared
// }

// square(2)
// square(5)

// 4.
// function negate(i) {
// 	var negated = i * -1;
// 	console.log(negated);
// 	return negated;
// }

// negate(65)
// negate(-1)

// 5.
// function toArray(i,j,k) {
// 	var Array = [];
// 	Array.push(i);
// 	Array.push(j);
// 	Array.push(k);

// 	console.log(Array);
// 	return Array;
// }

// toArray(3,5,6);

// 6.
// function startsWithA(word){
// 	if (word.charAt(0).toLowerCase() === "a") {
// 		console.log("true");
// 		return true;
// 	}
// 	else {
// 		console.log("false");
// 		return false;
// 	}
// }

// startsWithA('abingo')

// 7.
// function excite(word){
// 	var exclamation = word + "!!!"
// 	console.log(exclamation);
// 	return exclamation;
// }

// excite('super');
// excite('duper');

// 8.
// function sun(word) {
// 	var output = false
// 	for (i=0; i<word.length; i++){
// 		if (word[i].toLowerCase() === 's') {
// 			if (word[i+1].toLowerCase() === 'u') {
// 				if (word[i+2].toLowerCase() === 'n') {
// 					output = true;
// 				}
				
// 			}
// 		}	
// 	}
// 	console.log(output);
// 	return (output);
// }

// sun('sunny')
// sun('night')

// 9.
// function tiny(i){
// 	var tinyResult = false;
// 	if ((i < 1) && (i > 0)){
// 		tinyResult = true;
// 	}
// 	console.log(tinyResult);
// 	return tinyResult;
// }

// tiny(0.4)
// tiny(100)

// 10.
// function getSeconds (timeString){
// 	var minutes = Number(timeString.substring(0,2));
// 	var seconds = Number(timeString.substring(3,5));
// 	var result = ((minutes * 60) + seconds);
// 	console.log(result);
// 	return result;
// }

// getSeconds('10:30')
// getSeconds('01:33')



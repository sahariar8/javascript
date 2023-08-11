// function getNumber( jim,dela,chinku){
    
//    console.log( Math.min(jim, dela, chinku))
    
// }
// getNumber(88,92,97);
// // 
// // function maxInArray(value){
// //     let largest = value[0];
// //    for(let i=0;i<value.length;i++){
// //     const index = i;
// //     const element = value[index];
// //     if(element > largest){
// //         largest = element;
// //     }
// //    }
// //    return largest;
// // }
// // const height = [167,190,120,165,137];
// // const tallest = maxInArray(height);
// // console.log(tallest);
// // 
// function getLargeInArray(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }
// const value = [120,190,210,180,230,270,150,190];
// const tallest = getLargeInArray(value);
// console.log(tallest);

// // reverse string

// const name = "tumi bondhu kala pakhi";
// console.log(name.length);
// function reverse(value){

//     for(let i=0; i<value.length; i++){
//         const element = value[i];
//         console.log(element);

//     }
// }
// const text = "tumi bondhu kala pakhi";
// const reversed = reverse(text);

// function reverseString(value){
//     let reverse = '';
//     for(let i= value.length-1; i>=0; i--){
//         const element = value[i];
//         reverse = reverse + element;
//         console.log(element,reverse);
//     }
//     return reversed;
// }
//  const pakhi = "i am a good boy";
//  reverseString(pakhi);

//  function reverseWord(){
     
//  }
//  function reverseWord(text){
//     const words = text.split(' ');
//     const put = [];
//     // console.log(words);
//     for (let i = words.length-1; i>=0; i--){
//         const element = words[i];
//         put.push(element);
//     }
//     const reverse = put.join(' ');
//      return reverse;
//  }
//  const text2 = "I am a good boy";
//  const send = reverseWord(text2);
//  console.log(reverse);

//  function fibo(){
//     const number = [0,1];
//     for(let i = 2; i <= 15; i++){
//         number[i] = number[i-1] + number[i-2];
//     }
//     console.log(number);
//     return number;
   
//  }
//  fibo();


// console.log(Math.round( Math.random()*10));
// function add(a, b){
//     return a + b;
// }
// console.log(add("adam" + "eve"))



// var a = 5; 
// var b = 8; 
// var c = 4; 
// var d = 6; 
// var highest =Math.max(a, b, c, d);
// console.log(highest);

// var math = - 13;
// console.log(Math.abs(math));

// var number = 10;
// number = 15;
// console.log(number);

// function add(a, b){ 
// 	return sum = a + b;
// }
// console.log(add(5,10));

// const country = "bangladesh";
// const age = 52;
// const isIndependent = true;
// const student = {
// 	name :"sahariar",roll:15, class:11
// }
// const friend = [13,14,12,14];
// console.log(typeof friend);
// console.log(Array.isArray(friend));
// console.log(friend.indexOf(12));
// const newFriends = [11,21,25,27];
// const allFriends = newFriends.concat(friend);
// console.log(allFriends);
// const friends = [12,45,23,33,53,62];

// const view1 = friends.splice(2,4);
// console.log(view1);
// console.log(friends);
// const names = ['abul','kabul','babul','habul','kabul','mokbul','abul'];

// function duplicateRemove(names){
// 	const unique = [];
// 	for(let i=0; i<names.length; i++){
// 		const name = names[i];
// 		if(unique.includes(name) === false){
// 			unique.push(name);
// 		}
// 	}
// 	return unique;
// }
// console.log(duplicateRemove(names));

// const names = ['abul','kabul','mokbul','babul','abul','mokbul','kabul'];

// function duplicateRemove(names){
// 	const unique = [];
// 	for(let i=0; i<names.length; i++){
// 		const name = names[i];
// 		if(unique.includes(name) === false){
// 			unique.push(name);
// 		}
// 	}
// 	return unique;

// }
// console.log(duplicateRemove(names));


// for(let i=1; i<=50; i++){
//     if(i%3 === 0 && i%5 === 0){
// 	console.log('foobar');
//     }
// 	else if(i%3 === 0){
// 		console.log('foo');
// 	}
// 	else if(i % 5 === 0){
// 		console.log('bar');
// 	}
// 	else{
// 		console.log(i);
// 	}
// }

// function woodCaculator(chairquantity,tablequantity,bedquantity){
// 	const perchairwood = 3;
// 	const pertablewood = 10;
// 	const perbedwood = 50;

// 	const chairwood = perchairwood * chairquantity ;
// 	const tablewood = pertablewood * tablequantity ;
// 	const bedwood = perbedwood * bedquantity ;

// 	var totalWood = chairwood + tablewood + bedwood;

// 	return totalWood;
// }

// const requireWood = woodCaculator(2,2,5);
// console.log(requireWood);

// const phones = [
// 	{name:'xiaomi', storage:64, camera:12, price:32000},
// 	{name:'iphone', storage:64, camera:22, price:132000},
// 	{name:'samsung', storage:64, camera:32, price:42000},
// 	{name:'nokia', storage:64, camera:28, price:22000},
// 	{name:'viv0', storage:64, camera:62, price:12000},
// 	{name:'oppo', storage:64, camera:36, price:25000},
// ];

// function findLowPricePhone(phones){
// 	let cheapest = phones[0]
// 	for(let i=0; i<phones.length; i++){
// 		const phone = phones[i];
// 		if(phone.price < cheapest.price){
// 			cheapest = phone;
// 		}
// 	}
// 	return cheapest;
// }
// const result = findLowPricePhone(phones);
// console.log(result);
// const phones = [
// 	{name:'xiaomi', storage:64, camera:12, price:32000 ,quantity:2},
// 	{name:'iphone', storage:64, camera:22, price:132000, quantity:3},
// 	{name:'samsung', storage:64, camera:32, price:42000, quantity:4},
// 	{name:'nokia', storage:64, camera:28, price:22000,quantity:1},
// 	{name:'viv0', storage:64, camera:62, price:12000,quantity:1},
// 	{name:'oppo', storage:64, camera:36, price:25000, quantity:3},
// ];

// function findTotalPrice(phones){
// 	let sum = 0
// 	for(let i=0; i<phones.length; i++){
// 		const phone = phones[i];
// 		const totalprice = phone.price * phone.quantity
// 		sum = sum + totalprice;	
// 	}
// 	return sum;

	
	
// }
// const result = findTotalPrice(phones);
// console.log(result);

// function ticketPrice(ticketquantities){
// 	const first100 = 100;
// 	const second100 = 90;
// 	const restTicketprice = 80;
// 	if(ticketquantities <= 100){
// 		const price = first100 * ticketquantities;
// 		return price;
// 	}else if( ticketquantities <=200){
// 		const first100price = first100 * 100;
// 		const restTicket = ticketquantities - 100;
// 		const restticketPrice = second100 * restTicket;
// 		const total = first100price + restticketPrice;
// 		return total;
// 	}else{
// 		const first100price = first100 * 100;
// 		const second100Price = second100 * 100;
// 		const rest = ticketquantities - 200
// 		const resttickettotalprice  = rest * restTicketprice;
// 		const grandTotal = first100price + second100Price + resttickettotalprice;
// 		return grandTotal;
// 	}

// }
// const totalticketPrice = ticketPrice(320);
// console.log(totalticketPrice);

// function add (num1,num2){
// 	if(typeof num1 !== 'number' || typeof num2 !== 'number'){
// 		return "please enter a number";
// 	}
// 		const sum  = num1 + num2;
// 		return sum;
	
	

// }
// const result = add (12, 45);
// console.log (result);
// function multiply(num1,num2){
// 	const value = num1 * num2;
// 	return value;
// }
// const result1 = multiply (15,10);
// console.log(result1);

// const fruits = ['apple', 'orange', 'mango','banana','guava'];
// fruits[2] = 'pineaple';
// console.log(fruits);
// for(let i = 0; i < fruits.length; i++) {
// 	const fruit =fruits[i];
// 	console.log(i, fruit);
	
// }

// let sum=0; 
// for( let i = 0; i<=3;i++){ 
// sum = sum + i; 
// }
// console.log(sum);
// const name = "sajjad";
// const lenth = name.length;
// console.log(lenth);

// var student = { name : "Yo Mama", age : 17 };
// const result = delete student.age;
// console.log(student);

// const arr = [12,15,27,14,29];
// arr[arr.length - 1] = 5;
// console.log(arr);
// const nayoks=['Bangla Bhai','English Bhai','Korean Bhai','urkish Bhai'];
// for(const  nayok of nayoks){
// 	console.log(nayok);
// }

// function isInteger(value){
// if(typeof value !== 'number'){
// 	return "please enter a number";
//   }
//    if(value % 1 === 0){
// 	return "true";
//    }
//    return false;
// }

// const result = isInteger(6);
// console.log(result);

// function isJavaScriptFile(value){
// 	if(typeof value !== "string"){
// 		return "please enter a string";
// 	}
// 	// 
// 	return value.endsWith(".js")
// }

// const result = isJavaScriptFile("index.js");
// console.log(result);
// // second way
// function isJavaScriptFile(value){
// 	if(typeof value !== "string"){
// 		return "insert a string";
// 	}
// 	const arr = value.split('.');
// 	const lastElement = arr.pop();
// 	return lastElement === "js"

// }
// const result = isJavaScriptFile("index.js");
// console.log(result);

// function mindGame(value){
// 	if(typeof value !== 'number'){
// 		return "please enter a number";
// 	}
// 	if(value <= 0){
// 		return "please enter a positive number";
// 	}
// 	const put = (((value * 3) + 10) /2)-5;
// 	return put;

// }
// const result = mindGame(5)
// console.log(result);

// function isLGSeven(value) {
// 	if(typeof value !== "number"){
// 		return "Enter a Number";
// 	}
// 	const num = value - 7;
// 	if(num < 7 ){
// 		return num;
// 	}
// 	return value*2;
// }

// const result = isLGSeven(-15);
// console.log(result);

// function findingBadData(data){
// 	if(!Array.isArray(data)){
// 		return "please enter an array of data";
// 	}
// 	let badData = 0;
// 	for(let i=0; i<data.length; i++){
// 		if(typeof data[i] !== "number"){
// 			return "data must be a number";
// 		}else{
// 			if(data[i] < 0 ){
// 				badData++;
// 			}
// 		}
		 
// 	}
// 	return badData;

// }
// const x = [5,7,-9,4,-3]
// const result = findingBadData(x);
// console.log(result);

// 



// function printDetails(obj){
// 	if(typeof obj !== "object"){
// 		return "please enter an object";
// 	}
// 	const name = obj.name || "nai";
// 	const age = obj.age || "nai";
// 	const email = obj.email || "nai";
// 	const bou = obj.bou || "nai";
// 	return "amar nam "+name+".amar boyos "+age+".amar email "+email+". amar bou nai";
// }
// const obj = {
// 	name : "sahariar", age:25 , email:"sahariaralam8@gmail.com"
// };
// const result =  printDetails(obj);
// console.log(result);

// function isValidPhotoName(photoName,imageExtensions){
// 	if(typeof photoName !== "string" || !Array.isArray(imageExtensions)){
// 			return "please provide valid inputs";
// 	}else{
// 		for(let item of imageExtensions){
// 			if(photoName.toLowerCase().endsWith(item.toLowerCase())){
// 				return true;
// 			}
// 		}
// 		return false;
// 	}
// }

// const photo = "image.jpg";
// const arr = ['.jpg', '.png', '.jpeg', '.gif'];
// const result = isValidPhotoName(photo,arr)
// console.log(result);

// function pandaCost(singara,samucha,jilapi){

// 	singaraPrice = 7;
// 	samuchaPrice = 10;
// 	jilapiPrice = 15;

// 	totalSingaraprice = singaraPrice * singara;
// 	totalSamuchaprice = samuchaPrice * samucha;
// 	totaljilapiprice = jilapiPrice * jilapi;

// 	totalCost = totalSingaraprice + totalSamuchaprice + totaljilapiprice;

// 	return totalCost;
// }

// const result = pandaCost(3,4,5);
// console.log(result);

// BadData

// 2nd type of solving

// function findingBadData(arr){
	
// 	if(!Array.isArray(arr)){
// 		return "enter an Array";
// 	}
// 	let badData = 0;
// 	for(var i=0; i<arr.length; i++){
// 		if(typeof arr[i] !== "number"){
// 			return "enter a number";
// 		}
// 		if(arr[i]< 0){
// 			badData++;
// 		}
// 	}
// 	return badData;
// }
// const arr = [4,7,-3,5,9-11,6,-9];
// const result =  findingBadData(arr);
// console.log(result);

// const data = 100;
// 	for(let i = 1; i <= data; i++){
// 		if(i % 3 === 0 && i % 5 === 0){
// 			console.log("FizzBuzz");
// 		}else if(i % 3 === 0){
// 			console.log("Fizz");
// 		}else if(i % 5 === 0){
// 			console.log("Buzz");
// 		}else{
// 			console.log(i);
// 		}
// 	}

// function FindLength(data){
// 	let highest = "";
// 	for(let i = 0; i < data.length; i++){
		
// 		if(highest.length < data[i].length){
// 			highest = data[i];
// 		}	
// 	}
// 	return highest;

// }

// const data = ["sahariar","Shova","Sharmin Jahan","Satu","Alam","Nishad"];
// const result = FindLength(data);
// console.log(result);

// doing well

// function findPositiveNumber(arr){
// 	let positive = [];
// 	for(var i=0; i<arr.length; i++){
// 		if(arr[i] >= 0){
// 			positive.push(arr[i]);
// 		}else{
// 			break;
// 		}

// 	}
// 	return positive;
// }
// const arr = [4,7,9,3,-7,-3,8,7];
// const result = findPositiveNumber(arr);
// console.log(result);

// function findPrimeNumber(arr){
// 	let primeNumber = [];

// 	for(let i = 0; i < arr.length; i++){
// 		if(arr[i] % 1 === 0 && arr[i] % arr[i] === 0) {
// 			 primeNumber.push(arr[i]);
// 		}
// 	}
// 	return primeNumber;

// }

// const arr = [1,3,8,6,9,11];
// const result = findPrimeNumber(arr);
// console.log(result);

// function bestFriend(name){
// 	let heighst = "";
// 	for(let i=0; i<arr.length; i++){
// 		if(heighst.length < name[i].length){
// 			heighst = name[i];
// 		}
// 	}
// 	return heighst;
// }
// const arr =["Sahariar","Alam","Nishad","Sharmin Nahar Shova","Sharmin","Shova","Tanzin","Nahar","Tanzin Nahar Shova"];
// const result = bestFriend(arr);
// console.log(result);

// function findPositiveNumber(arr){
// 	let positiveNumber = [];
// 	for(let i=0; i<arr.length; i++){
// 		const individual = arr[i];
// 		if(individual >= 0){
// 			positiveNumber.push(individual);
// 		}else{
// 			break;
// 		}
// 	}
// 	return positiveNumber;
	
// }
// const number = [1,3,5,-7,8,-9];
// const result = findPositiveNumber(number);
// console.log(result);

// 1.

// function cubeNumber(number){
// 	if(typeof number !== "number" || number <=0){
// 		return "Enter a positive number";
// 	}else{

// 		return cubeResult = number**3;		
// 	}	

// }
// const result = cubeNumber(3);
// console.log(result);


// 5.


//  function canPay(changeArray,totalDue){
// 	if(!Array.isArray(changeArray) || changeArray.length === 0){
// 		return "Enter an Array";
// 	}
// 	if(typeof totalDue !== "number"){
// 		return totalDue +' '+"Not a number. please Enter a number";
// 	}
// 		let sum = 0;
// 	for(let i = 0; i < changeArray.length; i++){
// 		 sum += changeArray[i];
// 	}
// 	if(sum >= totalDue){
// 		return "True";
// 	}
// 	return "False";

//  }
//  const arr =[1,5,5];
//  const x= 10;
//  const result = canPay(arr,x);
//  console.log(result);


//  extraa solution

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);


4.


// function findAddress(obj){
// 	const street = obj.street || "__";
// 	const house = obj.house || "__";
// 	const society = obj.society || "__";
// 	return `${street} ,${house} ,${society}`;
	
// }
// const obj = {
// 	street:10,
// 	house:"15A",
// 	society:"Earth Perfect"
// }
//  const result = findAddress(obj);
//  console.log(result);

// -------------------------------others way--------------------------------------

function findAddress(obj){
   
  // for(let element in obj){
  //   console.log(obj[element]);
  // }
  for(let i = 0; i < obj.length; i++){
     
  }
  return obj[i];
  
 
	
}
const obj = {
	street:10,
	house:"15A",
	society:"Earth Perfect"
}
 const result = findAddress(obj);
 console.log(result);


// 2.
  

// function matchFinder(x,y){
// 	if(typeof x !== "string" || typeof y !== "string"){
// 		return "Enter a string";
// 	}
// 	const firstInput = x.split(' ');
// 	if(firstInput === y){
// 		return "true";
// 	}
// 	return "false";
		
// }
// const result = matchFinder("John Doe", "ohn");
// console.log(result);


// 3.

// function  sortMarker(arr){

	
//     if(!Array.isArray(arr) || arr.length != 2){
//         return "Enter an array where exactly two elements";
//     }
   
//     for(let i=0; i<arr.length; i++){
//       if(arr[i] == 0){
//         return "Enter a positive number";
//       }
//     }
    
// 		const newArraay = arr.sort((a, b) => b-a);
//     if(arr[0] == arr[1]){
//       return "equal";
//     }
// 		return newArraay;


// }
// const arr = [5,5];
// const result = sortMarker(arr);
// console.log(result);

// function sortMarker(arr) { 
//         let newArray = [];
//         if(!Array.isArray(arr) || arr.length != 2){
//             return "Enter an array where exactly two elements";
//         }
//         for(let i=0; i<arr.length; i++){
//               if(arr[i] <= 0){
//                 return "Enter a positive number";
//                 }
//               }
//         if(arr[0] < arr[1]){
//           newArray.push(arr[1], arr[0]);
//           return newArray;
//         }
//         return arr;
       
  

// }
// const arr =[7,17]
// const result = sortMarker(arr);
// console.log(result);

// 2.



// function matchFinder(string1, string2) {
//     if(typeof string1 !== "string" || typeof string2 !== "string"){
//       return "Enter String Type Data"; 
//     }
//     if(string1.includes(string2)){
//       return "true";
//     }
//     return "false";

// }

// const result = matchFinder("sahariar Alam", 'hari')
// console.log(result);
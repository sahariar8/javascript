
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





// function  sortMarker(arr){

	
//     if(!Array.isArray(arr) || arr.length != 2){
//         return "Enter an array where exactly two elements";
//     }
   
//     for(let i=0; i<arr.length; i++){
//         if(arr[0] < 0 || arr[1] < 0){
//             return "invalid Number";
//       }
//       if(arr[i] == 0){
//         return "Enter positive number";
//       }
// 	    const newArraay = arr.sort((a, b) => b-a);
//             if(arr[0] == arr[1]){
//             return "equal";
//         }
// 		return newArraay;
//     }

// }
// const arr = [3,5];
// const result = sortMarker(arr);
// console.log(result);


// if sort method is not taken

// function sortMarker(arr) { 
//         let newArray = [];
//         if(!Array.isArray(arr) || arr.length != 2){
//             return "Enter an array where exactly two elements";
//         }
//         if(arr[0] < 0 || arr[1] < 0){
//             return "Invalid Input";
//         }
//         if(arr[0] == arr[1]){
//             return "equal";
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
// const arr =[4,-2]
// const result = sortMarker(arr);
// console.log(result);





// function findAddress(obj){

    
//     	const street = obj.street || "__";
//     	const house = obj.house || "__";
//     	const society = obj.society || "__";

//         if(obj.length > 3){
//             return "please enter three or less then three property in object";
//         }
//     	return `${street} ,${house} ,${society}`;
    
        
//     }
//     const obj = {
//         street:10,
//     	house:"15A",
//     	society:"Earth Perfect"
//     }
//     const result = findAddress(obj);
//     console.log(result);




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
//  const arr =[1,3,5];
//  const x= 10;
//  const result = canPay(arr,x);
//  console.log(result);
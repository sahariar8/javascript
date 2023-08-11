1.

// function takeToDoller(taka){
//     const  doller = taka /115;
//     return doller + "doller";
// }
// const result  = takeToDoller(530);
// console.log(result);

2.

// function barbieKen(string){
//     if(typeof string !== "string"){
//         return "Enter a string";
//     }
//     if(string.length % 2 === 0){
//         return "Hi, Ken!";
//     }
//     return "Hi Barbie";
// }
// const result = barbieKen("Rabbi");
// console.log(result);

3.


// function findBigData(data){
//     let bigData = "";
//     for(let i=0; i<data.length; i++){
//         const element = data[i];
//         if(bigData.length < data[i].length){
//             bigData = data[i];
           
//         }
//     }
//     return bigData;

// }
// const friend = ['sahariar','alam','sharmin jahan','satu','tanjin nahar','shova'];
// const result = findBigData(friend);
// console.log(result);

4.

// function getNumber(value){
//     let num = [];
//     for(var i=0; i<value.length; i++){
//         if(value[i] >= 0 ){
//             num.push(value[i]);
//         }else{
//             break;
//         }
        
       
//     }
//     return num;

// }
// const arr = [5,7,9,11,14,-5,-9,7,9,13,17,-5];
// const result = getNumber(arr);
// console.log(result);

5.


//  function bigString(string) {
//     let bigName ="";
//     for( const element of string){
//        if(bigName.length < element.length){
//             bigName = element
//        }
//     }
//     return bigName;


//  }
//  const arr = ["sahariar","alam","tanjin nahar","satu","shova"]
//  const result = bigString(arr);
//  console.log(result);

6.

// function getNumber(value){
//     let number = [];
//     for( const element of value ){
//         if(element >= 0){
//             number.push(element);
//         }else{
//             break;
//         }
//     }
//     return number;

// }
// const arr = [5,7,9,33,44,-12,14,17,-19];
// const result = getNumber(arr);
// console.log(result);


7.

// function calculate(x,y,z){
//     const singaraPrice = 7;
//     const samuchaPrice = 10;
//     const jilapiPrice = 15;

//     const totalSingaraprice = singaraPrice * x;
//     const totalSamuchaprice = samuchaPrice * y;
//     const totaljilapiprice = jilapiPrice * z;

//     return totalPrice = totalSingaraprice + totalSamuchaprice + totaljilapiprice;
// }
// const result = calculate(3,5,3);
// console.log(result);

8.
// function findingBadData(Data){
//     let badData = [];
//     for(const element of Data ){
//         if(element < 0){
//             badData.push(element);
//         }
//     }
    
//     return "BadDatas Number" + ' ' + badData.length;

// }
// const arr = [3,5,7,9,-3,8,-9,1,-5];
// const result = findingBadData(arr);
// console.log(result);

9.


// function leapYear(value){
//     if(value % 4 == 0){
//         return value +' '+ "is a leap leapYear";
//     }
//     return value +' '+ "is a not a leap leapYear";


// }
// const result = leapYear(2024);
// console.log(result);

// 10.


// function bigNumber(value){
//     let bigData ="";
//     for(const element of value){
//         if(bigData < element){
//             bigData = element;
//         }
//     }
//     return bigData;

// }
// const arr = [120,350,80,370,560,190,50,900];
// const result = bigNumber(arr);
// console.log(result);

// 11.

// function funBizz(value){
//     for(let i = 1; i<= value; i++){

        
//         for(let i = 1; i<=value; i++){
//             if(i % 3 === 0 && i % 5 === 0){
//               console.log("FunBizz");
//             }else if(i % 3 === 0){
//                console.log("Fun");
//             }else if(i % 5 === 0){
//                console.log("Bizz");
//             }else{
//                console.log(i);
//             }
//         }
//     }
// }
//  funBizz(100);

12. 

// function cubeNumber(x){
//     if(typeof x !== "number"){
//         return "pls enter a Number";
//     }
//     if(x <= 0){
//         return "pls enter positive Number";
//     }
//     const cubeResult = Math.pow(x,3)
//     return cubeResult;

// }
// const value = 4;
// const result = cubeNumber(value);
// console.log(result);

// 13.

// function matchFinder(string1, string2){
//     if(typeof string1 !== "string" || typeof string2 !== "string"){
//         return "Please Enter a string";
//     }
//     if(string1.includes(string2)){
//         return "True";
//     }
//     return "False";

// }
// const result = matchFinder("sahariar","hari");
// console.log(result);


14.

// function sortMarker(value){
//     let newValue = [];
//     if(value.length !=2 ){
//         return "Please Enter two values in array";
//     }
//     if(value[0] <= 0 || value[1] <= 0){
//             return "Please Enter Positive value";
//     }
//     if(value[0] == value[1]){
//         return "equal";
//     }
//     if(value[0] < value[1]){
//          newValue.push(value[1], value[0]);
//          return newValue;
//     }else{
//         return value;
//     }

    
// }
// const arr =[133,133];
// const result = sortMarker(arr);
// console.log(result);

15.

// function findAddress(obj){
//     const street = obj.street || "__";
//     const house = obj.house || "__";
//     const society = obj.society || "__";

//     return `${street} ,${house},${society}`;
// }
// const object = {
//     street:10,
//     house:"15A",
//     society:"Earth Perfect"
// }
// const result = findAddress(object);
// console.log(result);


16.


// function canPay(changeArray, totalDue){
//     if(!Array.isArray(changeArray)){
//         return "please enter an array ";
//     }
//     if(changeArray.length == 0){
//         return "array can not be empty";
//     }
//     let sum = 0;
//     for(const element of changeArray){
//             sum+= element;
//     }
//     if(sum>= totalDue){
//         return "True";
//     }
//     return "False";

// }
// const arr = [1,3,5];
// const value = 10;
// const result = canPay(arr,value);
// console.log(result);

17.


// function inchTofeet(inches){
//     const getFeet = inches/12;
//     return getFeet;
// }
// const maInches = 240;
// const maFeet = inchTofeet(maInches);
// console.log(maFeet);

18.


// function getMileCon(kilo){
//     const getMile = kilo/1.6;
//     return getMile;
// }

// const givenkilo = 33;
// const mile = getMileCon(givenkilo);
// console.log(mile);

19.

// function isEven(value){
//     const even = value%2;
//    if(even == 0){
//     console.log("even Number");
//    }else{
//     console.log("odd Number");
//    }
// }
// isEven(521);



20.
// function getLeapYear(value){
//     const year = value%4;
//     if(year == 0){
//         console.log('Leap year');
//     }else{
//         console.log('Not a Leap year');
//     }
// }
// getLeapYear(22);
// getLeapYear(2022);
// getLeapYear(2024);

21.

// function getSum(number){
//     let sum = 0;
//     for(var i=0; i<number.length; i++){
//         const index = i;
//         const element = number[index];
//         sum += element;
//         console.log(index,element,sum);
//     }
//     return sum;
    
// }
// const array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// getSum(array);

22.




// function getOddSum(array) {
//     const oddNumber = [];
//     for(var i = 0; i < array.length; i++) {
//         const index = i;
//         const element = array[index];
//        if(element%2 == 1){
//         console.log(index,element);
//         oddNumber.push(element);
        
//        }
//     }
//     return oddNumber;
// }
// const value = [5,8,9,7,13,27,16,19];
// const oddnumbers = getOddSum(value);
// console.log(oddnumbers);
// getSum(oddnumbers);


23.

// function print(a, b, c){
//     return a+2;
//     return a*b;
//     return b*c+a;
//    }
//    console.log(print(1,2,3));

//    var item = 60;
//    if(item >=50){
//     console.log('true');
//    }else{
//    console.log('false');
//    }


24.

function change(x){
  let lower = x.toUpperCase();
  return lower;
  
}
const string = "Shahariar Alam";
const result =change(string);
console.log(result);

25.

const lyrics ="tumi bondhu kala pakhi ami jeno ki";
const search ="Pakhi";
const doesExit = lyrics.toLowerCase().includes(search.toLowerCase());
console.log(doesExit);


26.


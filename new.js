// const student = {
//     name:"sahariar",
//     id:121,
//     satu:function(){
//         console.log("satur rag din din bere jasse");
//     },
//     status:"single",
//     friends:['alam','nishad','satu','opu','shova'],
//     car:{
//         barand:'tesla',
//         price:5000000,
//         model:2023,
//     } 
// }

// const friends = student.friends;
//  for( let friend of friends ){
//     friends[friend];
//  }

// const car = Object.values(friends);
// console.log(car);
// console.log(student.satu);
// student.satu();


// const products =[
//     {id:1, name:"xiaomi phone", price:12000},
//     {id:2, name:"realme", price:22000},
//     {id:3, name:"iqoo", price:32000},
//     {id:4, name:"i phone", price:62000},
//     {id:5, name:"pixel", price:522000},
//     {id:6, name:"nokia", price:42000}
// ]
// function matchProduct(products,search){
//     let match =[];
//     for (const product of products){
//         if(product.name.includes(search)){
//                 match.push(product.name);
//         }

//     }
//     return match;
// }
// const result = matchProduct(products,"phone");
// console.log(result);


// function get(arr){
//     const newvalue = "Something"+' '+arr;
//     return newvalue;

// }
// const arr ="better then nothing";
// const result =get(arr);
// console.log(result);


// function  sumOfArrayData(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         if(sum<arr[i]){
//             sum = arr[i];
//         }
//     }
//     return sum;

// }
// const array = [1,2,3,4,5,67,8,9,10,11,12,13,14,15];
// const result = sumOfArrayData(array);
// console.log(result);

// var str = "100"

// console.log(parseInt(str));
// console.log(Boolean(''));

// var x=true
// console.log(x.toString())

// var date = new Date();


// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleString());

// var jim=22;
// var rabbi =jim +7;

// if(jim>rabbi){
//    console.log(jim+" is elder than "+ rabbi) ;
// }else{
//     console.log(rabbi+" is elder than "+ jim) ;
// }
// var date = new Date;
// var today = date.getDay();

// switch(today){

//     case 0:
//         console.log("today is sunday")
//         break;

//     case 1:
//         console.log("today is Monday")
//         break;

//     case 2:
//         console.log("today is Tuesday")
//         break;

//     case 3:
//         console.log("today is wednesday")
//         break;

//     case 4:
//         console.log("today is Thursday")
//         break;

//     case 5:
//         console.log("today is Friday")
//         break;
//     case 6:
//         console.log("today is saturday")
//         break;
    
// }

// var a=51;
// var b=40;
// var c=50;
// var d=60;

// if(a>b || c>d){
//     console.log("true");
// }else{
//     console.log("false");
// }

// var resut = a%2==0 ? "even" : "odd";
// console.log(resut);

// var name =false;

//  var fulname = name && "sahariar alam";
// console.log(fulname);
// var name = "sahariar alam";
// for( let i=0 ; i<= 5; i++ ){
//    console.log(name);
// }
// let sum = 0;
// for( var i=1; i<=100; i++ ){
//     if(i%2 == 0){
//         console.log(sum + '+' +i +'='+ (sum +i));
//         sum+=i;
//     }
// }


function trueValue(arr){
   

        // let trueCount = 0;
        // for (const value of arr){
     
        //      if(value === "true"){
        //          trueCount++;
        //      }
        // }
        // return trueCount;
    
        return arr.filter(x=>x == "true").length;
}


const array = ["true", "false", "true", "false", "false", "true"];
const result = trueValue(array);
console.log(result);
    




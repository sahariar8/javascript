const bals = document.querySelectorAll('section')
for(const bal of bals){
    bal.style.border = "2px solid tomato";
    bal.style.borderRadius = "5PX";
    bal.style.marginBottom = "10px";
    bal.style.marginLeft = "10px";
    bal.style.background ="yellowgreen";
}
const newLi = document.createElement('li');
newLi.innerText = "Coxbazar";
// const LI = document.querySelector('#place-title ul');
// console.log(LI);
const ex = document.querySelector("#place-title li")
console.log(ex);
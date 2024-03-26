// Question number 1


// for ( let i=0 ; i<5 ; i++){
//     console.log('hello world');
// }














// Question no 2


// for (let i = 0 ; i <= 10 ; i++){
//     console.log(i);
// }
















// Question no 3




//  const user = +prompt('enter your table number');
//  const times = +prompt('how many times')
// for(let i = 1 ; i <= times ; i++){

// console.log(`${user} * ${i} = ${user*i} ` )
// }



















// Question 4


// let ul=document.querySelector('ul');
// let array=["Nokia" , "Samsung" , "Apple" ,"Sony" , "Huawei"];

// for (let i = 0; i < array.length; i++) {
//     ul.innerHTML += `<li>${array[i]}</li>`
// }










// Question 5


let items=["Apple" , "Banana" , "Mango" , "Orange" , "Strawberry"];

let unorderList=document.querySelector(".unorder-list");
let paragraph=document.querySelector(".para");

for(let i=0 ; i<items.length ; i++){
    unorderList.innerHTML+=`<li>${items[i]}</li>`;
    paragraph.innerHTML+=`<li>Element at index ${i} is ${items[i]}</li>`

}
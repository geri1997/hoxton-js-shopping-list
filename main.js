let items = ['Milk', 'Cocoa', 'Salad', 'Carrots', 'Tomatoes', 'Ready meals'];
let price = [1.20, 2, 2, 2, 2.5, 5];


for(;;){
items.push(prompt('Add new item:'))
price.push(Number(prompt('Add the price of the item:')))
if(!confirm("Do you want to add more items?")){
    break;
}

}

let totalPrice=0;

for(let i =0;i<items.length;i++){
    console.log(`${items[i]}  ${price[i]}`)
    totalPrice+=price[i]
}
console.log(totalPrice)
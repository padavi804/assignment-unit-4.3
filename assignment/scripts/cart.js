console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = ['Nails', 'Screws'];

function addItem(item){
   basket.push(item)
    return true;
}
addItem('Hammer');
console.log(basket);

 function listItems(basket){
    for (let item of basket){
          console.log('basket', item);  
     }
 };
listItems(basket);

// function listItems(basket){
//     for (let i=0; i > basket.legth; i ++);
//     console.log('basket:', basket);
// }
// console.log(listItems(basket));

function empty() {
    for (i= basket.length; i =0; i--);
    console.log(basket);
}


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}

//These variables are used to manipualte the elemetns in the HTML file. 
let productList = document.querySelector('.productList');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let listCart = document.querySelector('.listCart');
let totalItems = document.querySelector('.totalItems');
let totalPrice = document.querySelector('.totalPrice');

let products = [ //Product array
    {
        id:1,
        name: 'Product 1',
        image: "1.png", //See the images in the folder.
        price:  12.50,
        quantity: 1
    },
    {
        id:2,
        name: 'Product 2',
        image: '2.png',
        price:  19.20,
        quantity: 1
    },
    {
        id:3,
        name: 'Product 3',
        image: '3.png',
        price:  20.50,
        quantity: 1
    },
    {
        id:4,
        name: 'Product 4',
        image: '4.png',
        price:  90.99,
        quantity: 1
    }
];
function initApp() { //This function adds the items into the grid list. 
    products.forEach((value, key) => { //loop for each item in the product array
        let newDiv = document.createElement('div'); //Creates new div in the html file
        newDiv.classList.add('item'); //adds a new class="item" object
        //this part edits the HTMl code if the newDiv object. 
        newDiv.innerHTML = ` 
            <img src="${value.image}">
            <div class="title" >${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})"  class="btn btn-primary btn-sm" >Add To Cart</button>`;
        productList.appendChild(newDiv); //connects the newDiv to the productList html element.
    });
}
initApp(); //Initilize the app so the products appear in the screen. 
let listCartArray  = []; //this array is the cart array that we are going to use to add and delete the cart elements.
function addToCart(key){  //function to add to cart
    if(listCartArray[key] == null){ //If the element isn't in the cart, it will add it.
        listCartArray[key] = JSON.parse(JSON.stringify(products[key])); //Adds the element 
        listCartArray[key].quantity = 1; //Sets the quantity to 1
    }
    else {
        listCartArray[key].quantity++; //If the element is already in the cart, it adds 1 to the quantity
    }
    reloadCart(); //Calls reload cart function
}
function reloadCart(){ //The reload cart function's purpose is to add the elements to add or remove elements in the cart. It will always be called when doing anything to the cart.
    listCart.innerHTML = ""; //resets the html code to empty
    let count = 0; //Initialize count variable
    let totalPrice = 0; //initiabilez total price variable
    listCartArray.forEach((value, key) => { //Iterate through each element in the cart array
        totalPrice = totalPrice + value.price; //Adds total price
        count = count + value.quantity; //Adds quantity
        if (value != null){ //Only adds if there is an actual element in the cart array
            let newDiv = document.createElement('li'); //Create new html list
            //this part adds the html code to the file. 
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})"  class="btn btn-primary btn-sm">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})"  class="btn btn-primary btn-sm">+</button>
                </div>`; //Sets the buttons, the name, price and image
        listCart.appendChild(newDiv); //Adds to the cart list in the html file. 
        }
    });
    let newDiv = document.createElement('div'); //This feature doesn't work. I wanted to implement tbe display for total price and total items, but I ran out of time. 
    newDiv.innerHTML = `
        <div>${totalPrice.toLocaleString()}</div>
        <div>${count.toLocaleString()}</div>`;

} 
function changeQuantity(key, quantity){ //simple function to add and subtract from the quantity value
    if(quantity == 0){ //If the quantity is 1, delete the item from the crart
        delete listCartArray[key];
    }else{ 
        listCartArray[key].quantity = quantity; //Adds or subtracts one more to the amount of items
        listCartArray[key].price = quantity * products[key].price; //Adds or subtracts the total price of that single item. 
    }
    reloadCart(); //Call reload cart
}

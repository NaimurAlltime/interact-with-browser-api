const addProduct = () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const name = productName.value;
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';
    // console.log(name, quantity);
    displayProduct(name, quantity);
    saveProductToLocalStorage(name, quantity);
}

const displayProduct = (name, quantity) => {
   const ul = document.getElementById('product-container');
   const li = document.createElement('li');
   li.innerHTML = `${name}: ${quantity}`;
   ul.appendChild(li);
} 

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCard = localStorage.getItem('cart');
    if(storedCard){
        cart = JSON.parse(storedCard);
    }
    return cart;
}

const saveProductToLocalStorage = (name, quantity) => {
    const cart = getStoredShoppingCart();
    cart[name] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const displayProductsFromLocalStorage = () => {
    const saveCart = getStoredShoppingCart();
    for(const product in saveCart){
        const quantity = saveCart[product];
        console.log(product, quantity);
        displayProduct(product, quantity);
    }
}

displayProductsFromLocalStorage();
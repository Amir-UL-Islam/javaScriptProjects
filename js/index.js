// getting the DOM

const navbar = document.querySelector('.navbar');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.card');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');
//
// const  = document.querySelector("");
// const  = document.querySelector("");
// const  = document.querySelector("");
// const  = document.querySelector("");
// const  = document.querySelector("");

// cart
let cart = [];

// gets the products
class Products {
  async getProducts() {
    try {
      let result = await fetch('../js/products.json');
      let data = await result.json();
      let products = data.items;
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const  idc  = item.sys;

        const  image  = item.fields.image.fields.file.url;
        return {  idc,title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

// display products, gets from local storage
class UI {
  displayProducts(products) {
    console.log(products);
  }
}
// local storage
class Storage {}

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  const products = new Products();
  // get Products

  products.getProducts().then((products) => {
    ui.displayProducts(products);
  });
});

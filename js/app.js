import productApi from './products-api.js';
import addProduct from './add-product.js';
import productList from './product-list.js';
// import customerProductList from './customer-products.js';


const products = productApi.getAll();

productList.init(products, function(product) {
    productApi.remove(product);
});

addProduct.init(function(product) {
    productApi.add(product);
    productList.add(product);
    // customerProductList.add(product);
});

// console.log(products);
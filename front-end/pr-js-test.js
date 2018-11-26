"use strict";

var category = 'Earrings',
    ProductTitle = 'Gold studs',
    productMeta = 'Delivery 2-3 weeks';

function Changeproduct(prodct) {
    var productData = product;
    let productCount = 10;
    const productSize = 'large';

    for(var i=0; i<productCount; i++) {
        productSize += ' will mean ' + i + ' days delivery';
    }

    return productSize;
}

function switchProduct(product, changed) {
    $('.product').on('click', (ev) => {
        ev.preventDefault();
        ev.addClass('switched');
        ev.innerText(changed);
        console.log(product);
    });
}

$(document).ready(() => {
    const product = Changeproduct();
    switchProduct(product);
};

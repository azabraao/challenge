let products = {};
let total = 0;

$(document).ready(function(){   
    $.ajax({
        url: 'assets/products.json',
        success: function(data) {
            products = data;
            products.forEach(a => $('.js-products').append(
                "<div class='last-products__shelf-item js-product' data-price="+a.Value+"><div class='last-products__shelf-item-img'><picture><img src='"+a.images[0].imageUrl+"' class='js-product-image' alt='Last product item'></picture></div><div class='last-products__shelf-item-title'><p class='is-uppercase js-product-name'>"+a.name+"</p></div><div class='last-products__shelf-item-price'><p>R$ <span class='js-item-price'>"+a.Value.toLocaleString()+"</span></p></div></div>"));
        },
        complete: function() {
            $('.js-product').on('click', function(){
                total += parseFloat(this.dataset.price);
                $('.js-cart-total').text(total.toLocaleString());
                $('.site-header__cart-total').show();
            });
        }
    });

    $('.js-hamburguer-toggle').on('click',function(e){
        $('.site-header__responsive-nav').toggle();
        $('.background-overlay').toggle();
    });
    $('.background-overlay').on('click',function(e){
        $('.site-header__responsive-nav').toggle();
        $('.background-overlay').toggle();
    });

});
// Lấy tất cả sản phẩm từ localStorage và hiển thị lên trang shop.html
var products = GetAllProducts();
var content = "";
for (var i = 0;i<products.length;i++)
{
	content += '<div class="col-md-3 col-sm-6">';
		content += '<div class="single-shop-product">';
			content += '<div class="product-upper">';
				content += '<img src="'+products[i].thumbnail+'" alt="" class="pp">';
			content += '</div>';
			
			content += '<h2><a onclick="ChangeIdForSingleProduct('+i+')" href="single-product.html">'+products[i].name+'</a></h2>';
			
			content += '<div class="product-carousel-price">';
				content += '<ins>'+products[i].new_price+'</ins><del>'+products[i].old_price+'</del>';
			content += '</div>';

			content += '<div class="product-option-shop">';
				content += '<a onclick="AddToCartIndex('+i+')" class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="cart.html">Thêm vào giỏ hàng</a>';
			content += '</div>';

		content += '</div>';
	content += '</div>';
}
document.getElementById("all_products").innerHTML = content;
/* ##########################################################
* Để file này nằm dưới file loadDatabase.js
* File này thực hiện việc lấy dữ liệu từ localStorage và đổ ra các phần trong trang index.html
 ############################################################ */

// Tải tất cả sản phẩm
var products = GetAllProducts();
var content = "";
for (var i = 0;i<products.length;i++)
{
    content += '<div class="single-product">';
        content += '<div class="product-f-image">';
            content += '<img src="'+products[i].thumbnail+'" alt="">';
            content += '<div class="product-hover">';
            content += '<a onclick="AddToCartIndex('+i+')" href="cart.html" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng</a>';
            content += '<a onclick="ChangeIdForSingleProduct('+i+')" href="single-product.html" class="view-details-link"><i class="fa fa-link"></i> Chi tiết</a>';
            content += '</div>';
        content += '</div>';
        content += ' <h2><a onclick="ChangeIdForSingleProduct('+i+')" href="single-product.html">'+products[i].name+'</a></h2>';
        content += '<div class="product-carousel-price">';
            content += '<ins>'+products[i].new_price+'</ins><del>'+products[i].old_price+'</del>';
        content += '</div>';
    content += '</div>';
}
document.getElementsByClassName("product-carousel")[0].innerHTML = content;

// ********************************************************
// Mục bán chạy
// ********************************************************
var best_selled = '<h2 class="product-wid-title">Bán chạy</h2><a href="" class="wid-view-more">Xem tất cả</a>';
content = "";
for (var i = products.length-1;i>= products.length - 3;i--)
{
	content += ''
	content += '<div class="single-wid-product">';
	    content += '<a onclick="ChangeIdForSingleProduct('+i+')" href="single-product.html"><img src="'+products[i].thumbnail+'" alt="" class="product-thumb"></a>';
	    content += '<h2><a onclick="ChangeIdForSingleProduct('+i+')" href="single-product.html">'+products[i].name+'</a></h2>';
	    content += '<div class="product-wid-rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></div>';
	    content += '<div class="product-wid-price">';
	        content += '<ins>'+products[i].old_price+'</ins><del>'+products[i].new_price+'</del>';
	    content += '</div>';
	content += '</div>';
}
best_selled += content;
document.getElementsByClassName("single-product-widget")[0].innerHTML = best_selled;

// ********************************************************
// Mục đã xem gần đây
// ********************************************************
var last_seen = '<h2 class="product-wid-title">Đã xem gần đây</h2><a href="" class="wid-view-more">Xem tất cả</a>';
last_seen += content;
document.getElementsByClassName("single-product-widget")[1].innerHTML = last_seen;

// ********************************************************
// Mục món mới
// ********************************************************
var newest = '<h2 class="product-wid-title">Món mới</h2><a href="" class="wid-view-more">Xem tất cả</a>';
newest += content;
document.getElementsByClassName("single-product-widget")[2].innerHTML = newest;
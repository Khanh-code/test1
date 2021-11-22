/* ##########################################################
* Để file này nằm dưới file loadDatabase.js
* File này thực hiện việc tải thông tin chi tiết của sản phẩm nào đó nhờ
* vào giá trị localStorage.IdForSingleProduct
############################################################ */

/* ----------------------------------------------------------
* Lấy chi tiết sản phẩm qua localStorage.IdForSingleProduct *
----------------------------------------------------------- */
// Id mặc định sẽ là 0 (sản phẩm đầu tiên trong danh sách sản phẩm)
if (localStorage.IdForSingleProduct == "undefined" || localStorage.IdForSingleProduct == null || localStorage.IdForSingleProduct == "")
{localStorage.IdForSingleProduct = 0;}
// Thay đổi Id 
function ChangeIdForSingleProduct(id){localStorage.IdForSingleProduct = id;}

/* ---------------------------------------------------------------
* Lấy thông tin sản phẩm dựa vào localStorage.IdForSingleProduct *
---------------------------------------------------------------- */
 var products = GetAllProducts();
 var single_product = products[localStorage.IdForSingleProduct];

/* -------------------------------------------------------------- 
* Hiển thị các thông tin sản phẩm lên trang single-product.html * 
--------------------------------------------------------------- */
// Thanh tiêu đề
document.getElementsByClassName("single-product__head__category")[0].innerHTML = single_product.category;
document.getElementsByClassName("single-product__head__name")[0].innerHTML = single_product.name;
// Hình đại diện
document.getElementsByClassName("src")[0].src = single_product.thumbnail;
// Tên sản phẩm
document.getElementsByClassName("product-name")[0].innerHTML = single_product.name;
// Giá mới, giá cũ
document.getElementById("old_price").innerHTML = single_product.old_price;
document.getElementById("new_price").innerHTML = single_product.new_price;
// Category và tags
document.getElementsByClassName("single-product__info__category")[0].innerHTML = single_product.category;
document.getElementsByClassName("single-product__info__tags")[0].innerHTML = single_product.tags;
// Mô tả sản phẩm
document.getElementById("home").innerHTML = single_product.description;

/* ################################################################
* Tải các thông tin khác trong trang single-product
################################################################# */
// Sản phẩm xem gần đây
var content = '<h2 class="sidebar-title">Xem gần đây</h2><ul>';
for (var i = 0;i<5;i++)
{
	content += '<li><a onclick="ChangeIdForSingleProduct('+i+')" href="single-product.html">'+products[i].name+'</a></li>';
}
content += '</ul>';
document.getElementsByClassName("single-sidebar")[1].innerHTML = content;

// Sản phẩm gợi ý
content = "";
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
		content += '<h2><a onclick="ChangeIdForSingleProduct('+i+')" href="single-product.html">'+products[i].name+'</a></h2>';
		
		content += '<div class="product-carousel-price">';
			content += '<ins>'+products[i].new_price+'</ins>';
			content += '<del>'+products[i].old_price+'</del>';
		content += '</div>';
		
	content += '</div>';
}
document.getElementsByClassName("related-products-carousel")[0].innerHTML = content ;
/* ##########################################################
* Để file này nằm dưới file loadDatabase.js
* File này thực hiện việc thêm sản phẩm vào giỏ hàng, bỏ bớt sản phẩm
* và hiển thị chi tiết giỏ hàng tại trang cart.html
############################################################ */
// Bỏ sản phẩm ra khỏi giỏ hàng
function RemoveFromCart(id)
{
	var key = "product"+id;
	var product = JSON.parse(localStorage.getItem(key));
	product.incart = 0;
	localStorage.setItem(key,ProductToJSON(product));
}
// Hiển thị chi tiết giỏ hàng
var products = GetAllProducts();
var content = "";
for (var i = 0;i < products.length;i++)
{
	if (products[i].incart > 0)
	{
		var product = products[i];
		content += '<tr class="cart_item">';
			content += '<td class="product-remove">';
				content += '<a title="Remove this item" class="remove" onclick="RemoveFromCart('+i+')" href="cart.html">×</a> ';
			content += '</td>';
			content += '<td>';
				content += '<a onclick="ChangeIdForSingleProduct('+i+')" href="single-product.html"><img width="145" height="145" alt="poster_1_up" class="shop_thumbnail" src="'+product.thumbnail+'"></a>';
			content += '</td>';
			content += '<td class="product-name">';
				content += '<a onclick="ChangeIdForSingleProduct('+i+')" href="single-product.html">'+product.name+'</a>';
			content += '</td>';
			content += '<td class="product-price">';
				content += '<span class="amount">'+product.new_price+'</span>';
			content += '</td>';
			content += '<td class="product-quantity">';
				content += '<div class="quantity buttons_added">';
					content += '<a onclick="DecreaseFromCart('+i+')" type="button" class="minus" href="cart.html">-</a>';
					content += '<input type="number" size="4" class="input-text qty text" title="Qty" value="'+product.incart+'" min="0" step="1">';
					content += '<a onclick="AddToCartIndex('+i+')" type="button" class="minus" href="cart.html">+</a>';
				content += '</div>';
			content += '</td>';
			content += '<td class="product-subtotal">';
				content += '<span class="amount">'+product.new_price*product.incart+'</span>';
			content += '</td>';
		content += '</tr>';
	}
	document.getElementById("cart__detail").innerHTML = content;
}

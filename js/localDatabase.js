/* --------------------------------------------------------------------------
* Các sản phẩm và hàm chuyển thông tin sản phẩm thành chuỗi JSON để lưu trữ *
--------------------------------------------------------------------------- */
// Hàm chuyển sản phẩm thành chuỗi JSON
function ProductToJSON(product)
{
	var json = '{"id":'+product.id+',"name":"'+product.name+'","old_price":'+product.old_price+',"new_price":'+product.new_price+',"thumbnail":"'+product.thumbnail+'","description":"'+product.description+'","category":"'+product.category+'","tags":"'+product.tags+'","incart":'+product.incart+'}';
	return json;
}
// Các sản phẩm ở dạng Object
var product0 = {
	id : 0,
	name : "Bánh Sôcôla sốt cam",
	old_price : 140000,
	new_price : 80000,
	thumbnail : "img/product-1.jpg",
	description : "Sản phẩm này chưa có mô tả ",
	category : "Bánh Sôcôla",
	tags : "sôcôla,sốt cam",
	incart : 0
};
var product1 = {
	id : 1,
	name : "Cheesecake",
	old_price : 210000,
	new_price : 120000,
	thumbnail : "img/product-2.jpg",
	description : "Sản phẩm này chưa có mô tả ",
	category : "Cheese",
	tags : "cheese,cheesecake",
	incart : 0
};
var product2 = {
	id : 2,
	name : "Trà hoa cúc",
	old_price : 54000,
	new_price : 30000,
	thumbnail : "img/product-3.jpg",
	description : "Sản phẩm này chưa có mô tả",
	category : "Trà",
	tags : "trà,hoa cúc",
	incart : 0
};
var product3 = {
	id : 3,
	name : "Bánh kem hoa hồng",
	old_price : 450000,
	new_price : 300000,
	thumbnail : "img/product-4.jpg",
	category : "Bánh kem",
	tags : "bánh kem,hoa hồng",
	incart : 0
};
var product4 = {
	id : 4,
	name : "Bánh bông lan sốt cam",
	old_price : 104000,
	new_price : 43000,
	thumbnail : "img/product-5.jpg",
	category : "Bánh bông lan",
	tags : "bánh bông lan,sốt cam",
	incart : 0
};
var product5 = {
	id : 5,
	name : "Bánh Matcha kem mềm",
	old_price : 138000,
	new_price : 138000,
	thumbnail : "img/product-6.jpg",
	category : "Matcha",
	tags : "matcha,kem mềm",
	incart : 0
};
var product6 = {
	id : 6,
	name : "Sandwiches",
	old_price : 96000,
	new_price : 50000,
	thumbnail : "img/product-thumb-1.jpg",
	category : "Sandwiches",
	tags : "sandwiches",
	incart : 0
};
var product7 = {
	id : 7,
	name : "Bánh bông lan trứng muối",
	old_price : 120000,
	new_price : 80000,
	thumbnail : "img/product-thumb-2.jpg",
	category : "Bánh bông lan",
	tags : "bánh bông lan,trứng muối",
	incart : 0
};
var product8 = {
	id : 8,
	name : "Bánh Flan cà phê",
	old_price : 15000,
	new_price : 10000,
	thumbnail : "img/product-thumb-3.jpg",
	category : "Bánh Flan",
	tags : "bánh flan,cà phê",
	incart : 0
};
var product9 = {
	id : 9,
	name : "Cupcake kem dâu",
	old_price : 150000,
	new_price : 100000,
	thumbnail : "img/product-thumb-4.jpg",
	category : "Cupcake",
	tags : "cupcake,kem dâu",
	incart : 0
};

// Lưu trữ sản phẩm vào localStorage dưới dạng JSON 
if (localStorage.product0 == "undefined" || localStorage.product0 == null){localStorage.product0 = ProductToJSON(product0);}
if (localStorage.product1 == "undefined" || localStorage.product1 == null){localStorage.product1 = ProductToJSON(product1);}
if (localStorage.product2 == "undefined" || localStorage.product2 == null){localStorage.product2 = ProductToJSON(product2);}
if (localStorage.product3 == "undefined" || localStorage.product3 == null){localStorage.product3 = ProductToJSON(product3);}
if (localStorage.product4 == "undefined" || localStorage.product4 == null){localStorage.product4 = ProductToJSON(product4);}
if (localStorage.product5 == "undefined" || localStorage.product5 == null){localStorage.product5 = ProductToJSON(product5);}
if (localStorage.product6 == "undefined" || localStorage.product6 == null){localStorage.product6 = ProductToJSON(product6);}
if (localStorage.product7 == "undefined" || localStorage.product7 == null){localStorage.product7 = ProductToJSON(product7);}
if (localStorage.product8 == "undefined" || localStorage.product8 == null){localStorage.product8 = ProductToJSON(product8);}
if (localStorage.product9 == "undefined" || localStorage.product9 == null){localStorage.product9 = ProductToJSON(product9);}

// Lấy dữ liệu từ localStorage và chuyển thành mảng để sử dụng
function GetAllProducts()
{
	var array = [];
	array[0] = JSON.parse(localStorage.product0);
	array[1] = JSON.parse(localStorage.product1);
	array[2] = JSON.parse(localStorage.product2);
	array[3] = JSON.parse(localStorage.product3);
	array[4] = JSON.parse(localStorage.product4);
	array[5] = JSON.parse(localStorage.product5);
	array[6] = JSON.parse(localStorage.product6);
	array[7] = JSON.parse(localStorage.product7);
	array[8] = JSON.parse(localStorage.product8);
	array[9] = JSON.parse(localStorage.product9);
	return array;
}

// Thêm vào giỏ hàng (trang single-product)
function AddToCart()
{
	var quantity = document.getElementById("quantity_to_cart").value;
	var id = localStorage.IdForSingleProduct;
	var key = "product"+id;
	var product = JSON.parse(localStorage.getItem(key));
	product.incart = parseInt(quantity) + parseInt(product.incart);
	localStorage.setItem(key,ProductToJSON(product));
}
// Thêm vào giỏ hàng (trang index và các trang khác)
function AddToCartIndex(id)
{
	var key = "product"+id;
	var product = JSON.parse(localStorage.getItem(key));
	product.incart = 1 + parseInt(product.incart);
	localStorage.setItem(key,ProductToJSON(product));
}
// Giảm số lượng sản phẩm trong giỏ hàng
function  DecreaseFromCart(id)
{
	var key = "product"+id;
	var product = JSON.parse(localStorage.getItem(key));
	if (product.incart > 0){product.incart -= 1;}
	localStorage.setItem(key,ProductToJSON(product));
}

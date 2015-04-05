var itemList = [
	{
		"id":"0001",
		"name":"WEB+DB PRESS Vol.85",
		"price":1598,
		"img":"http://ecx.images-amazon.com/images/I/81xFBNF4hHL.jpg"
	},
	{
		"id":"0002",
		"name":"Scala逆引きレシピ (PROGRAMMER’S RECiPE)",
		"price":3456,
		"img":"http://ecx.images-amazon.com/images/I/51sSPtHuICL.jpg"
	},
	{
		"id":"0003",
		"name":"エリック・エヴァンスのドメイン駆動設計",
		"price":5616,
		"img":"http://ecx.images-amazon.com/images/I/51rgnUkmlzL.jpg"
	},
	{
		"id":"0004",
		"name":"Java言語で学ぶデザインパターン入門",
		"price":4104,
		"img":"http://ecx.images-amazon.com/images/I/712RxXxBpZL.jpg"
	}
];
$(function () {
  console.log('start readItemList');
  readItemList();
  console.log('end readItemList');
})
function readItemList () {
  $.each(itemList, function(index, item) {
    console.log(item.name);
		$('.subBody').append(createHtmlTagItemList(index, item));
  });
}
function flashItemList() {
	$('.subBody').html('<p>let\'s coding!!</p>');
}
function createHtmlTagItemList(index, item) {
	var htmlItemList = '<div id="' + item.id + '">';
	htmlItemList += item.name;
	htmlItemList += ' \\';
	htmlItemList += item.price;
	htmlItemList += '</div>';
	htmlItemList += '<img src="' + item.img + '" alt="サンプル" width="70" height="100">';
	htmlItemList += '<button onclick="intoCart(' + index + ')">カートに入れる</button>';
	return htmlItemList;
}
function intoCart(id) {
	pushItemToCart(id);
	flashItemList();
	readCartItemList();
}
var cartItemList = new Array();
function pushItemToCart(index) {
	cartItemList.push(itemList[index]);
}
function popItemToCart(index) {
	return cartItemList.pop(itemList[index]);
}
function readCartItemList() {
	$('.subBody').append('<button onclick="returnShopping()">買い物を続ける</button>');
	$.each(cartItemList, function(index, cartItem) {
		$('.subBody').append(createHtmlTagCartItemList(index, cartItem));
	});
}
function createHtmlTagCartItemList(index, item) {
var htmlItemList = '<div id="' + index + '">';
htmlItemList += item.name;
htmlItemList += ' \\';
htmlItemList += item.price;
htmlItemList += '</div>';
htmlItemList += '<img src="' + item.img + '" alt="サンプル" width="70" height="100">';
htmlItemList += '<button onclick="alert(\'購入手続き処理は未実装です\')">購入する</button>';
htmlItemList += '<button onclick="cancel()">キャンセルする</button>';
return htmlItemList;
}
function returnShopping() {
	flashItemList();
  readItemList();
}
function cancel(index) {
	popItemToCart(index);
	flashItemList();
	readCartItemList();
}

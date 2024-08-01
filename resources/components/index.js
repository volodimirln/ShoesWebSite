function showHeader() {
	document.write(`<div class="start">
			<button class="header_burger-btn" id="burger" onclick="blockFix()">
				<span></span><span></span><span></span>
			</button>
			<label class="title"><a href="https://obuvashka23.ru/" style="all:unset; cursor: pointer;">PLANTAGENET</a></label>

			<input align="center" type="text"  name="search" id="search" placeholder="Поиск" class="form-control">
			<button class="btnSearch" style="margin-top: 1%;
		    margin-bottom: 1%;
		    margin-left: 7%;
		    border-radius: 10px;
		    borber: none;
		    border-color: #fff;
		    border-style: solid;
		    background: #FFF;
		    width: 35%;
		    padding-left: 2%;
		    font-size: 12pt;
		    color: #706f6f;">
		    <a href="https://obuvashka23.ru/search/index.html">
					<img src="https://obuvashka23.ru/img/search.png" style="width:30px;"/>
		    </a></button>
			<button class="btnCart" style="margin-top: 1%;
		    margin-bottom: 1%;
		    border-radius: 10px;
		    borber: none;
		    border-color: #fff;
		    border-style: solid;
		    background: #FFF;
		    padding-left: 2%;
		    font-size: 12pt;
		    color: #706f6f;"
			width: 5px;
			z-index:1;">
		    <a href="https://obuvashka23.ru/cart">
					<img src="https://obuvashka23.ru/img/cart.png" style="width:30px;"/>
		    </a>
			<p id="countInCart" style="margin: 0;
			margin-top: -50%;
			background: #1da1f2;
			font-size: 14pt;
			width: 24px;
			border-radius: 12px;
			color: #fff;
			display: flex;
			justify-content: center;
			z-index:2;
			position: relative;
			">1</p>
			</button>
		</div>
		<ul class="list-group" id="result"></ul>
		<br>
		<div class="menu" >
			<a href="https://obuvashka23.ru/catalogs/accessories/">АКСEССУАРЫ</a>
			<a href="https://obuvashka23.ru/catalogs/shoes/?d=1">СКИДКИ</a>
			<a href="https://obuvashka23.ru/catalogs/bag/">РЮКЗАКИ</a>
			<a href="https://obuvashka23.ru/catalogs/shoes/">ОБУВЬ</a>
			<a href="https://obuvashka23.ru/catalogs/shoes/?markdown=1">УЦЕНКА</a>
		</div>
		`);
}

	let html = document.documentElement;
	let j = 0;
	function blockFix() {
	 	j++;
	 		if(j%2 == 1){
	 			document.body.style.overflowY = 'hidden';
	 			html.style.overflowY = 'hidden';
	 			document.body.style.overflowX = 'hidden';
	 		} else {
	 		html.style.overflowX = 'hidden';
	 		html.style.overflowY = 'scroll';
	 		document.body.style.overflowY = 'scroll';
	 	}
	}	
  

let dataLoadCount = {};

	function countProductInCart(){
		let countCart = 0;
		dataLoadCount = JSON.parse(localStorage.getItem('cart'));
		for(let value of dataLoadCount){
			countCart++;
		}
		return countCart;
	}
	function countProductInCart(){
		
		dataLoadCount = JSON.parse(localStorage.getItem('cart'));

	let countCart = 0;
	if(dataLoadCount != null && dataLoadCount.length > 0){
		document.getElementById('countInCart').style.display = "block";

	for(let value of dataLoadCount){
			countCart++;
		}
  }else{
	document.getElementById('countInCart').style.display = "none";

  }
		let count = document.getElementById('countInCart');
		count.innerHTML = countCart;
	}
{/*<a target="_blank" href="https://yandex.ru/maps/org/obuvashka/125348855465/?ll=39.032365%2C45.057568&z=16" class="logo_name"><h6 style="">г. Краснодар, ул. Героев-Разведчиков, д. 21/2</h6></a>
					<a id="logo-detailsPhone"  class="logo_name" style="text-decoration: underline;" href="tel:+79892648236">+7 989 264-82-36</a>*/}
				
				//	<ul class="box">
				//	<li class="link_name" id="ulMargin">О нас</li>
				//	<li><a href="https://obuvashka23.ru/info_company/o_nas/#contact">Контакты</a></li>
				//	<li><a href="https://obuvashka23.ru/info_company/o_nas/#timeToWork">Время работы</a></li>
				//	<li><a href="https://obuvashka23.ru/info_company/o_nas/#map">Как нас найти</a></li>
				//</ul>
function showFooter() {
	document.write(`<footer>
		<div class="content">
			<div class="top">
				<div class="logo-details" style="text-align: center;">
					<a href="https://obuvashka23.ru" class="logo_name">Plantagenet</a> <br>
					
					</div>
				<div class="media-icons">
					<a target="_blank" href="https://t.me/obuvashka23"><i class="telegram"><img src="https://obuvashka23.ru/img/backgroundTelegram.png"></i></a>
				</div>	
			</div>
			<div class="link-boxes">
				<ul class="box" style="padding-left: 0;">
					<li class="link_name">Покупателям</li>
					<li><a href="https://obuvashka23.ru/info_company/relationship/#delivery">Доставка</a></li>
					<li><a href="https://obuvashka23.ru/info_company/relationship/#return">Обмен и возврат</a></li>
					<li><a href="https://obuvashka23.ru/info_company/relationship/#pay">Оплата</a></li>
					<li><a href="https://obuvashka23.ru/info_company/howpayment">Как купить?</a></li>
				</ul>
				
			</div>
			<div class="link-boxes" style="display: flex;flex-direction: column;">
				<p style="align-self:center; text-align:center;"><a href="https://obuvashka23.ru/info_company/politic_privacy">Политика конфиденциальности</a></p>
				<p style="align-self:center; text-align:center;"><a href="https://obuvashka23.ru/info_company/dogovor_offer">Договор оферты</a></p>
			</div>
		</div>
		<div class="bottom-details">
			<div class="bottom_text">
				<span class="copyright_text">Программное решение Plantagenet</span>
			</div>
		</div>
		</footer>`
		);
}
 function  getApiPhotoShoes(id){
	var request = new XMLHttpRequest();
	request.open('GET', 'https://api.obuvashka23.ru/ImagesShoes?productId='+id+'&status=1', false);
	request.send(null);

	let result = "";
	if (request.status === 200) {
		let arrayResponse = JSON.parse(request.responseText);
		if(arrayResponse != null){
		result = arrayResponse[0].photoPath;
		}
	}
	return result;
}
function  getApiPhotoBags(id){
	var request = new XMLHttpRequest();
	request.open('GET', 'https://api.obuvashka23.ru/ImagesBags?bagsId='+id+'&status=1', false);
	request.send(null);

	let result = "";
	if (request.status === 200) {
		let arrayResponse = JSON.parse(request.responseText);
		if(arrayResponse != null){
		result = arrayResponse[0].photoPath;
		}
	}
	return result;
}
function  getApiPhotoAccessories(id){
	var request = new XMLHttpRequest();
	request.open('GET', 'https://api.obuvashka23.ru/ImagesAccessories?accessoriesId='+id+'&status=1', false);
	request.send(null);
	let result = "";
	if (request.status === 200) {
		let arrayResponse = JSON.parse(request.responseText);
		if(arrayResponse != null){
			result = arrayResponse[0].photoPath;
		}
	}
	return result;
}
async function clickAddCart(id){
	document.getElementsByClassName('product')[id].style.border = "4px solid #91BFBC";//product
	document.getElementsByClassName('product')[id].innerHTML += `<div style="width: 100%;font-family: 'Alegreya Sans', sans-serif;margin-bottom:5px;font-weight: 600;font-size: 85%;background-color: #91BFBC;margin-left: 10px;margin-right: 10px;height: 24px;border-radius: 7px;text-align: center;display: flex;justify-content: space-around;align-items: center;margin-top: 8px;">Товар в корзине</div>`;
	let idHTML = "btnAddCart";
	document.getElementsByClassName(idHTML)[id].src="https://obuvashka23.ru/img/check.png";
	document.getElementsByClassName("js-open-modal")[id].classList.add("active");
	

}
function showProductShoes(title, price, gender, season, type, brands, num, discont, id, vendorCode, cart) {
	num = num - 1;
	let priceOld = "";
	if(discont != 0){
		priceOld = price + `₽`;
	}
	price =  price - (discont * price);
	let discountProcent = "";
	if(discont != 0){
		discountProcent = discont * 100 + '%';
		discountProcent = 'Скидка: ' + discountProcent;
	}
	let style = "";
	let addDiv = "";
	let colorItem = vendorCode.slice(-1);
	if(isNaN(parseInt(colorItem))){
		switch(colorItem){
			case "W":
				colorItem = "белые";
				break;
			case "R":
				colorItem = "красные";
				break;
			case "G":
				colorItem = "зеленые";
				break;
			case "B":
				colorItem = "синие";
				break;
			default:
				colorItem = "";
		}
	}else{
		colorItem = "";
	}
	let imgCart = "https://obuvashka23.ru/img/products/basket.png";
	let buttonOnclick = `addToCart(`+id+`, '`+title+`', `+price+`, '`+vendorCode+`', `+num+`)`;
	if(cart){
		style = "border: 4px solid #91BFBC";
		imgCart = "https://obuvashka23.ru/img/check.png";
		addDiv = `<div style="font-family: 'Alegreya Sans', sans-serif;width: 100%;margin-bottom:5px;font-weight: 600;font-size: 85%;background-color: #91BFBC;margin-left: 10px;margin-right: 10px;height: 24px;border-radius: 7px;text-align: center;display: flex;justify-content: space-around;align-items: center;margin-top: 8px;">Товар в корзине</div>`;
		buttonOnclick = ``;
	}
	let productHTTML = `
	<div class="product" data-num=`+num+` style="display: flex;flex-wrap: wrap;align-items: flex-start;	`+style+`">
						<div class="productImg">
							<a href="https://obuvashka23.ru/catalogs/shoes/product/?vendorCode=`+vendorCode+`"><img src="https://api.obuvashka23.ru/image/`+getApiPhotoShoes(id)+`" style="width:100%; margin-bottom: -12px; border-radius: 10px 10px 0px 0px; background:#E5E3E4;"></a>

							<button class="js-open-modal" data-modal="1" onclick="`+buttonOnclick+`"><img class="btnAddCart" id="btnBasketImg" src="`+imgCart+`"></img>
							</button><div style="margin-left: 10px; margin-right: 10px;"><a class="infoProductA" href="https://obuvashka23.ru/catalogs/shoes/product/?vendorCode=`+vendorCode+`">
							<h3 style=" font-size: 100%;">` +title+` `+colorItem+`</h3><h3 style='margin-top: 7%;font-size: 90%;margin-bottom: 7%;'><s>`+priceOld+`</s> ` +price+` ₽</h3><h3 style='font-size: 75%;margin-bottom: 5%;'>Сезон: ` +season+`</h3><h3 style='font-size: 75%;margin-bottom: 5%;'>Тип: ` +type+`</h3><h3 style='font-size: 75%;margin-bottom: 5%;'>Бренд: ` +brands+`</h3><h3 style='font-size: 75%;margin-bottom: 10%;'>` +discountProcent+`</h3></a></div></div>
							</a>`+addDiv+`</div>`;
	return productHTTML;
}


function showProductBag(title, price, gender, brands, color, num, discont, id, vendorCode, cart) {
	num = num - 1;
	let priceOld = "";
	if(discont != 0){
		priceOld = price + (discont * price);
	}
	price =  price;
	let discountProcent = "";
	if(discont != 0){
		discountProcent = discont * 100 + '%';
		discountProcent = 'Скидка: ' + discountProcent;
	}
	console.log('https://api.obuvashka23.ru/ImagesBags?bagsId='+id+'&status=1');
	let style = "";
	let addDiv = "";
	let imgCart = "https://obuvashka23.ru/img/products/basket.png";
	if(cart){
		style = "border: 4px solid #91BFBC";
		imgCart = "https://obuvashka23.ru/img/check.png";
		addDiv = `<div style="font-family: 'Alegreya Sans', sans-serif;width: 100%;margin-bottom:10px;font-weight: 600;font-size: 85%;background-color: #91BFBC;margin-left: 10px;margin-right: 10px;height: 24px;border-radius: 7px;text-align: center;display: flex;justify-content: space-around;align-items: center;margin-top: 5px;">Товар в корзине</div>`;
	}
	let productHTTML = `<div class="product" data-num=`+num+` style="display: flex;flex-wrap: wrap;align-items: flex-start;	`+style+`">
						<div class="productImg">
							<a href="https://obuvashka23.ru/catalogs/bag/product/?vendorCode=`+vendorCode+`"><img src="https://api.obuvashka23.ru/image/`+getApiPhotoBags(id)+`" style="width:100%; margin-bottom: -12px; border-radius: 10px 10px 0px 0px; background:#E5E3E4;"></a>
							<button class="js-open-modal" onclick="addToCart(`+id+`, '`+title+`', `+price+`, '`+vendorCode+`', `+num+`)"><img class="btnAddCart" id="btnBasketImg" src="`+imgCart+`"></img>
							</button><div style="margin-left: 10px"><a class="infoProductA" href="https://obuvashka23.ru/catalogs/bag/product/?vendorCode=`+vendorCode+`"><h3 style=" font-size: 100%;">` +title +`</h3><h3 style='margin-top: 7%;font-size: 90%;margin-bottom: 5%;'><s>`+priceOld+`</s>` +price+`₽</h3><h3 style='font-size: 75%;margin-bottom: 3%;'>` +gender+`</h3><h3 style='font-size: 75%;margin-bottom: 3%;'>` +color+`</h3><h3 style='font-size: 75%;margin-bottom: 3%;'> </h3><h3 style='font-size: 75%;margin-bottom: 3%;'>` +brands+`</h3><h3 style='font-size: 75%;margin-bottom: 3%;'>` +discountProcent+`</h3></div></a></div>
					</a>`+addDiv+`</div>`;
	return productHTTML;
}

function showProductAccessories(title, price, brands, color, num, discont, id, vendorCode, cart) {
	num = num - 1;
	let priceOld = "";
	if(discont != 0){
		priceOld = price  + (discont * price) + `₽`;
	}
	price =  price;
	let discountProcent = "";
	if(discont != 0){
		discountProcent = discont + '%';
		discountProcent = 'Скидка: ' + discountProcent;
	}
	let style = "";
	let addDiv = "";
	let imgCart = "https://obuvashka23.ru/img/products/basket.png";
	if(cart){
		style = "border: 4px solid #91BFBC";
		imgCart = "https://obuvashka23.ru/img/check.png";
		addDiv = `<div style="font-family: 'Alegreya Sans', sans-serif;width: 100%;margin-bottom:5px;font-weight: 600;font-size: 85%;background-color: #91BFBC;margin-left: 10px;margin-right: 10px;height: 24px;border-radius: 7px;text-align: center;display: flex;justify-content: space-around;align-items: center;margin-top: 8px;">Товар в корзине</div>`;
	}
	let productHTTML = `<div class="product" data-num=`+num+` style="display: flex;flex-wrap: wrap;align-items: flex-start;	`+style+`">
						<div class="productImg">
							<a href="https://obuvashka23.ru/catalogs/accessories/product/?vendorCode=`+vendorCode+`"><img src="https://api.obuvashka23.ru/image/`+getApiPhotoAccessories(id)+`" style="width:100%; margin-bottom: -12px; border-radius: 10px 10px 0px 0px; background:#E5E3E4;"></a>
							<button class="js-open-modal" onclick="addToCart(`+id+`, '`+title+`', `+price+`, '`+vendorCode+`', `+num+`)"><img id="btnBasketImg" class="btnAddCart" src="`+imgCart+`"></img>
							</button><div style="margin-left: 10px"><a class="infoProductA" href="https://obuvashka23.ru/catalogs/accessories/product/?vendorCode=`+vendorCode+`"><h3 style=" font-size: 100%;">` +title +`</h3><h3 style='margin-top: 7%;font-size: 90%;margin-bottom: 5%;'><s>`+priceOld+`</s> ` +price+`₽</h3><h3 style='font-size: 75%;margin-bottom: 3%;'></h3><h3 style='font-size: 75%;margin-bottom: 3%;'></h3><h3 style='font-size: 75%;margin-bottom: 3%;'> </h3><h3 style='font-size: 75%;margin-bottom: 3%;'></h3><h3 style='font-size: 75%;margin-bottom: 3%;'>` +discountProcent+`</h3></div></a></div>
					</a>`+addDiv+`</div>`;
	return productHTTML;
}


$(document).ready(function(){
 $.ajaxSetup({ cache: false });
 $('#search').keyup(function(){
  $('#result').html('');
  $('#state').val('');
  var searchField = $('#search').val();
  var expression = new RegExp(searchField, "i");
  $.getJSON('https://api.obuvashka23.ru/Shoes', function(data) {
   $.each(data, function(key, value){
   	if(search.value != ""){
 if (value.title.search(expression) != -1 || value.description.search(expression) != -1 || value.brands.search(expression) != -1 || value.vendorCode.search(expression) != -1)
    {
		$('#result').append('<li class="list-group-item link-class"><a href="https://obuvashka23.ru/catalogs/shoes/product/?vendorCode='+value.vendorCode+'" style="all:unset;"> '+value.title+' | <span class="text-muted">'+value.vendorCode+'</span><span class="text-muted"> | '+value.price+'₽</a></span></li>');
    }
   	}
   
   });   
  });
 });
 
 $('#result').on('click', 'li', function() {
  var click_text = $(this).text().split('|');
  $('#search').val($.trim(click_text[0]));
  $("#result").html('');
 });
});

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("burger").addEventListener("click", function() {
		document.querySelector("header").classList.toggle("open");
		let menuHeight = window.innerHeight +'px';
		let menuWidth = '-' + window.innerWidth-0 +'px';

            document.querySelector(".menu").style.height = menuHeight;
            document.querySelector(".menu").style.width = '100%';
            document.querySelector(".menu").style.left = menuWidth;
        
	})
})
function showCartElement(cart){
	let html ="";
	let nm = 0;

	html+= '<div class="submini-cart" style="font-size: 11pt; color:#FFF;  background: #A0C4DC;  border-radius: 20px; padding: 15px; margin-top: 45px;">';
	html += '<h2 style="margin: 0;font-size: 22pt;font-family: Alegreya Sans, sans-serif;">Корзина</h2><br>';
	for (let value of cart.values()) {
		nm += value[4]*value[2];

		let sizeLabel = "";
		if(value[3] != 0){
			sizeLabel = '(размер '+value[3]+')';
		}
		html += '<label style="font-size: 16pt;">'+value[1] +' '+sizeLabel+' --- '+ value[4]+' * '+value[2]+'₽ - '+ value[4]*value[2]+'₽</label><br>';
	}
	html += '<label style="font-size: 16pt;">Итог: '+nm+'₽</label><br>'
	html += '<div id="btnBlockBasket"><h2 style="margin-bottom: 0;margin-right:7px;"><a href="https://obuvashka23.ru/cart/">Открыть корзину</a></h2><br>';
	html += '<h2 style="margin-bottom: 0;"><a href="https://obuvashka23.ru/ordering/">Оформить заказ</a></h2><br></div>';

	html += '<div id="btnBlockBasketMobile"><h2 style="margin-bottom: 0;"><a href="https://obuvashka23.ru/cart/">Открыть корзину</a></h2><br>';
	html += '<h2 style="margin-bottom: 0;"><a href="https://obuvashka23.ru/ordering/">Оформить заказ</a></h2><br></div>';

	return html;
}
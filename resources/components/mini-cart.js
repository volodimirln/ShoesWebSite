async	function cartBorderProduct(NumProduct) {
		NumProduct = NumProduct + 1;
			document.body.innerHTML += '<style>.product:nth-child('+NumProduct+'){border: 3px solid #03A9F4;}</style>';
		
		
			

		}


  var cart = [];
		
  async function getChoiceSize(id){
	let choiceSize = document.getElementById('choiceSize');
	choiceSize.innerHTML="";

let resSize = await  fetch('https://api.obuvashka23.ru/ShoesSize?idShoes='+id);
let size = await  resSize.json();
size.forEach((data) =>{
count = data.count;
choiceSize.innerHTML += "<option value='"+data.size+"'>Размер обуви: "+data.size+"</option>";
}); 
  }

  let idWn = 0;
  let nameWn = "";
  let priceWn = 0;
  let size = 0;
  let vendorCodeWn = "";
  let idElementLocal = 0;
  var cart = new Map(); 

    function addToCart(id, name, price, vendorCode, idElement) {
		
   		let div = document.getElementsByClassName("js-open-modal")[idElement];	
			if(div.classList.contains('active') == false) {

				getChoiceSize(id);
				idElementLocal = idElement;
				//clickAddCart(idElement);
				//clickAddCart(idElementLocal);
				openModalWindows();
		
				idWn = id;
  				nameWn = name;
   				priceWn = price;
   				vendorCodeWn = vendorCode;
			}
    }

	

function openModalWindows(){
	var overlay      = document.querySelector('.js-overlay-modal');
	var modalElem = document.querySelector('.modal[data-modal="1"]');
	
	var close = false;

   modalElem.classList.add('active');
   overlay.classList.add('active');

   var  closeModal = document.getElementById('closeModal');
  /* closeModal.click = function(){
   }*/



return close;
}
let dataLoad = {};


	var  closeButtons = document.querySelectorAll('#closeModal');
	var  closeButtonsAndSave = document.querySelectorAll('#closeModalAndSave');
	var overlay      = document.querySelector('.js-overlay-modal');
	var  closeModal = document.getElementById('closeModal');


closeButtons.forEach(function(item){
item.addEventListener('click', function(e) {
   var parentModal = this.closest('.modal');
   parentModal.classList.remove('active');
   overlay.classList.remove('active');
});
});

closeButtonsAndSave.forEach(function(item){
item.addEventListener('click', function(e) {
   var parentModal = this.closest('.modal');
   parentModal.classList.remove('active');
   overlay.classList.remove('active');
   closeModalAndAddToCart();

});
});

function closeModalAndAddToCart(){
	var  closeButtons = document.querySelectorAll('#closeModal');
	var overlay      = document.querySelector('.js-overlay-modal');
	var modal      = document.getElementsByClassName('modal')[0];
	let choiceSize = document.getElementById('choiceSize');
	size = choiceSize.options[choiceSize.selectedIndex].value;
	let choiceCountProduct = document.getElementById('countProduct');
	let countProduct = choiceCountProduct.options[choiceCountProduct.selectedIndex].value;

	





dataLoad = JSON.parse(localStorage.getItem('cart'));

if(dataLoad != null){
	clickAddCart(idElementLocal);
	for(let value of dataLoad){
 	cart.set(value[0], value[1]);

  }
 }
 if (cart.has(vendorCodeWn)==false) {

elements = [];

elements.push(idWn);
elements.push(nameWn);
elements.push(priceWn);
elements.push(size);
elements.push(1);
elements.push(3);

 
cart.set(vendorCodeWn, elements);

}
else {

}





var out="";
var nm = 0;

	out+= '<div class="submini-cart" style="font-size: 11pt; color:#FFF;  background: #A0C4DC;  border-radius: 20px; padding: 15px; margin-top: 45px;">';
out += '<h2 style="margin: 0;font-size: 22pt;font-family: Alegreya Sans, sans-serif;">Корзина</h2><br>';
for (let value of cart.values()) {

	nm += value[4]*value[2];
out += '<label style="font-size: 16pt;">'+value[1] +'(размер '+value[3]+') --- '+ value[4]+' * '+value[2]+'₽ - '+ value[4]*value[2]+'₽</label><br>';
}
out += '<label style="font-size: 16pt;">Итог: '+nm+'₽</label><br>'
out += '<div id="btnBlockBasket" style="display: flex;"><h2 style="margin-bottom: 0;margin-right:7px;"><a href="https://obuvashka23.ru/cart/">Открыть корзину</a></h2><br>';
out += '<h2 style="margin-bottom: 0;"><a href="https://obuvashka23.ru/ordering/">Оформить заказ</a></h2><br></div>';

$('.mini-cart').html(out);

/*****************************/
let cartArray = [];
cartArray = Array.from(cart, ([name, value]) => ({ name, value }));
var cartMap = new Map();
cartMap = Array.from(cartArray, ({name, value}) => ([ name, value ]));
console.log(cartMap[0][1]);
/*****************************/

//console.log(cart);

localStorage.setItem('cart', JSON.stringify(cartMap));
//countProductInCart();

//closeButtons.forEach(function(item){
item.addEventListener('click', function(e) {
   var parentModal = this.closest('.modal');

   parentModal.classList.remove('active');
   overlay.classList.remove('active');

});

//});
}

	


	countProductInCart();

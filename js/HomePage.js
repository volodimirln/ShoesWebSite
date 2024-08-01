let main_page;
let div_num;
let cnt;

let lastFunCalled;
let sortType = '&sortType=1&sortField=popularity';


function clickSort(intTypeSort, field) {
			sortType = '&sortType=' + intTypeSort + '&sortField=' + field;
				getApiProduct();
			
		}
		document.addEventListener('DOMContentLoaded', function () {
        const slider = new ChiefSlider('.slider', {
            loop: false
        });
        });





function loaded() {
			document.getElementById('pr').innerHTML = `<h1 style="font-family: 'Alegreya Sans', sans-serif;font-style: italic;font-weight: 700;font-size: 200%;">Загрузка товаров...</h1>`;
			document.getElementsByClassName('paginator')[0].style.display = "none";
		}

  async function getApiProduct() {
	loaded();

	let cartBorder = new Map(); 
  	let count = 0;

	dataLoadBorder = JSON.parse(localStorage.getItem('cart'));

if(dataLoadBorder != null){
	for(let value of dataLoadBorder){
		cartBorder.set(value[0], value[1]);
  }
 }
 if (localStorage.getItem("cart") === null) {
	localStorage.setItem('cart', "[]");

  }
 
  	let res = await fetch('https://api.obuvashka23.ru/Shoes/filter?limitRec=12'+sortType);
  	let products = await res.json();
  	products.forEach((data) =>{
		if (count == 0) {
						document.getElementById('pr').innerHTML = "";
					}
			count++;	
  			document.getElementById('pr').innerHTML += showProductShoes(data.title, data.price, data.gender, data.season, data.type, data.brands, count, data.discount, data.id, data.vendorCode, cartBorder.has(data.vendorCode));	
		
		
  			}); 	
  	
  }

    	
getApiProduct();

$(document).ready(function(){
  $(".burgerSortBtn").click(function(){
    $(".buttonPanelSort").slideToggle();
  });
});
	
	
	var slides = document.querySelectorAll('#slides .slide');
	var currentSlide = 0;

	function aheadSlide(){
		goSlide(currentSlide+1);
	}
	function backSlide(){
		 goSlide(currentSlide-1);
		
	}
	function goSlide(n){
	slides[currentSlide].className = 'slide';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slide showing';
	}

	function nextSlide() {
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
	

	}	


  var circle1 = document.getElementById('cirk1');
  var circle2 = document.getElementById('cirk2');
  var circle3 = document.getElementById('cirk3');
 // circle = document.querySelector('circle');
var radius = 20;

//var radius = circle1.r.baseVal.value;
var circumference = radius * 2 * Math.PI;


function setProgress(percent) {
  const offset = circumference - percent / 1000 * circumference;
  circle1.style.strokeDashoffset = offset;
  circle2.style.strokeDashoffset = offset;
  circle3.style.strokeDashoffset = offset;
  
}


var slideIntervalLoop = setInterval(myLoop,100);


    var i = 0;   
                    
function clcAheadSlide(){
	i = 0;
		goSlide(currentSlide+1);
		myLoop ();
	}
	function clcbackSlide(){
		i = 0;
		goSlide(currentSlide-1);
		myLoop ();
	}

function myLoop () { 
       
   setTimeout(function bh() {    
              
      i += 10;  
      setProgress(i); 

      
      if(i > 1000){
      	i = 0;
      	setProgress(0);
      	aheadSlide();
      	clearInterval();
      }                       
   }, 1000);

}




		async function cartBorderProduct(NumProduct) {
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
elements.push(countProduct);
elements.push(3);

 
cart.set(vendorCodeWn, elements);

}
else {

}


$('.mini-cart').html(showCartElement(cart));

/*****************************/
let cartArray = [];
cartArray = Array.from(cart, ([name, value]) => ({ name, value }));
var cartMap = new Map();
cartMap = Array.from(cartArray, ({name, value}) => ([ name, value ]));
console.log(cartMap[0][1]);
/*****************************/

//console.log(cart);

localStorage.setItem('cart', JSON.stringify(cartMap));
countProductInCart();

}
countProductInCart();

const locationMarkdown = window.location.search;
const paramsMarkdown = new URLSearchParams(locationMarkdown);
let markdown = 0;
if(paramsMarkdown.get("markdown") == 1){
    markdown = 1;
    document.getElementById('MainLabel').innerText = "УЦЕНКА";
}




function clearFilter() {
    let genderSelecter = document.getElementById('gender');
    let seasonSelecter = document.getElementById('season');
    let typeShoesSelecter = document.getElementById('typeShoes');
    let brandSelecter = document.getElementById('brand');
    let discountSelecter = document.getElementById('discount');
    let materialsSelecter = document.getElementById('materials');
    byPrice(1000);
    genderSelecter.value = "";
    seasonSelecter.value = "";
    typeShoesSelecter.value = "";
    brandSelecter.value = "";
    discountSelecter.value = "0";
    materialsSelecter.value = "";
}
function byPrice(byInt) {
        let priceUp = document.getElementById("priceUp");
        priceUp.value = byInt;
        update();
    }

getPriceShoes();
function getPriceShoes() {
var request = new XMLHttpRequest();
request.open('GET', 'https://api.obuvashka23.ru/Shoes/shoesBorderPrice', false);
request.send(null);

let result = "";
if (request.status === 200) {
let arrayResponse = JSON.parse(request.responseText);
if (arrayResponse != null) {
let priceUp = document.getElementById("priceUp");
let priceDown = document.getElementById("priceDown");

priceDown.value = arrayResponse[0].maxprice;
priceUp.value = arrayResponse[0].minprice;
}
}
request = new XMLHttpRequest();
request.open('GET', 'https://api.obuvashka23.ru/Shoes/shoesSizeBorderPrice', false);
request.send(null);

result = "";
if (request.status === 200) {
let arrayResponse = JSON.parse(request.responseText);
if (arrayResponse != null) {
let sizeUp = document.getElementById("sizeUp");
let sizeDown = document.getElementById("sizeDown");

sizeUp.value = arrayResponse[0].minsize;
sizeDown.value = arrayResponse[0].maxsize;
}
}

}





var main_page;
var div_num;
var cnt;

let lastFunCalled;
let sortType = '';
let sortDiscountsUp = 0;
let sortDiscountsDown = 0.5;



function discountSort() {
switch (document.getElementById('discount').value) {
case "1":
sortDiscountsUp = 0.05;
sortDiscountsDown = 1;
break;
case "2":
sortDiscountsUp = 0.0;
sortDiscountsDown = 0.06;
break;
case "3":
sortDiscountsUp = 0.05;
sortDiscountsDown = 0.10;
break;
case "4":
sortDiscountsUp = 0.10;
sortDiscountsDown = 0.20;
break;
case "5":
sortDiscountsUp = 0.20;
sortDiscountsDown = 0.30;
break;
case "0":
sortDiscountsUp = 0.0;
sortDiscountsDown = 0.50;
break;
default:
sortDiscountsUp = 0.0;
sortDiscountsDown = 0.5;
}
}

let firstProduct = 0;
let lastProduct = 12;
let i = 0;
let id = "page0";

function clicToNextPage() {
i++;
firstProduct = (i * 12) + 1;
getApiProduct();

}
function clicToOldPage() {
i--;
firstProduct = (i * 12) + 1;
getApiProduct();

}

async function getApiType() {
let option = document.getElementById("typeShoes");
let request = new XMLHttpRequest();
request.open('GET', 'https://api.obuvashka23.ru/Type?typeObject=shoes', false);
request.send(null);

let result = "";
if (request.status === 200) {
let arrayResponse = JSON.parse(request.responseText);
if(arrayResponse != null){
arrayResponse.forEach(data => {
option.innerHTML += `<option value="` + data.id + `">` + data.title + `</option>`;
});
const location1 = window.location.search;
const params = new URLSearchParams(location1);
if(params.get("t") != null){
selectElement('typeShoes', params.get("t"));
if(arrayResponse[params.get("t")] != null){
    document.getElementById("MainLabel").innerText = arrayResponse[params.get("t") - 1].title;
}
}
}
}
}
getApiType();

function getApiSeason() {
let option = document.getElementById("season");
let request = new XMLHttpRequest();
request.open('GET', 'https://api.obuvashka23.ru/Seasons', false);
request.send(null);

let result = "";
if (request.status === 200) {
let arrayResponse = JSON.parse(request.responseText);
if(arrayResponse != null){
arrayResponse.forEach(data => {
option.innerHTML += `<option value="` + data.id + `">` + data.title + `</option>`;
});
const location1 = window.location.search;
const params = new URLSearchParams(location1);
if(params.get("s") != null){
    selectElement('season', params.get("s"));
    if(arrayResponse[params.get("s")] != null){
        document.getElementById("MainLabel").innerText = arrayResponse[params.get("s") - 1].title;
    }
    }
}
}


}

getApiSeason();

async function getApiBrand() {
let option = document.getElementById("brand");
let request = new XMLHttpRequest();
request.open('GET', 'https://api.obuvashka23.ru/Brands', false);
request.send(null);

let result = "";
if (request.status === 200) {
let arrayResponse = JSON.parse(request.responseText);
if(arrayResponse != null){
arrayResponse.forEach(data => {
option.innerHTML += `<option value="` + data.id + `">` + data.title + `</option>`;
});
const location1 = window.location.search;
const params = new URLSearchParams(location1);
if(params.get("b") != null){
    selectElement('brand', params.get("b"));
    if(arrayResponse[params.get("b")] != null){
        document.getElementById("MainLabel").innerText = arrayResponse[params.get("b") - 1].title;
    }
    }
}
}
// let res = await fetch('https://api.obuvashka23.ru/Brands');
// let type = await res.json();
// type.forEach((data) => {
// 	option.innerHTML += `<option value="` + data.id + `">` + data.title + `</option>`;
// });

}

getApiBrand();

function getApiGender() {
let option = document.getElementById("gender");
let request = new XMLHttpRequest();
request.open('GET', 'https://api.obuvashka23.ru/Genders', false);
request.send(null);

let result = "";
if (request.status === 200) {
let arrayResponse = JSON.parse(request.responseText);
if(arrayResponse != null){
arrayResponse.forEach(data => {
option.innerHTML += `<option value="` + data.id + `">` + data.gender + `</option>`;
});
const location1 = window.location.search;
const params = new URLSearchParams(location1);
if(params.get("g") != null){
selectElement('gender', params.get("g"));
}
if(params.get("g") != null){
    selectElement('gender', params.get("g"));
    if(arrayResponse[params.get("g")] != null){
        document.getElementById("MainLabelDiv").innerHTML += '</br><label id="MainLabel" style="font-size: 34pt; text-transform: uppercase;">'+arrayResponse[params.get("g") - 1].gender+'</label>';
    }
    }
    if(params.get("g") == 3){
        document.getElementById("MainLabelDiv").innerHTML += '</br><label id="MainLabel" style="font-size: 34pt; text-transform: uppercase;">Для мальчиков</label>';
    }
}
}

}

function selectElement(id, valueToSelect) {    
let element = document.getElementById(id);
element.value = valueToSelect;

}
getApiGender();

const locationDiscount = window.location.search;
const paramsDiscount = new URLSearchParams(locationDiscount);
if(paramsDiscount.get("d") != null){
selectElement('discount', paramsDiscount.get("d"));
document.getElementById('MainLabel').innerText = "СКИДКИ";
}



let cnt_page;

async function getApiMaterials() {
let option = document.getElementById("materials");
let res = await fetch('https://api.obuvashka23.ru/Materials');
let type = await res.json();
type.forEach((data) => {
option.innerHTML += `<option value="` + data.id + `">` + data.title + `</option>`;
});

}
getApiMaterials();

function loaded() {
document.getElementById('pr').innerHTML = `<h1 style="font-family: 'Alegreya Sans', sans-serif;font-style: italic;font-weight: 700;font-size: 200%;">Загрузка товаров...</h1>`;
document.getElementsByClassName('paginator')[0].style.display = "none";
}
let count;
function update() {
id = "page0";
firstProduct = 0;
lastProduct = 12;
getApiProduct();
}
let countNum = 0;
let nextBlockPage = false;
let f = 1;
let uy = true;
async function getApiProduct() {
loaded();


let cartBorder = new Map();
let count = 0;

dataLoadBorder = JSON.parse(localStorage.getItem('cart'));

if (dataLoadBorder != null) {
for (let value of dataLoadBorder) {
cartBorder.set(value[0], value[1]);
}
}
if (localStorage.getItem("cart") === null) {
	localStorage.setItem('cart', "[]");

  }
discountSort();
lastFunCalled = arguments.callee.name;
let res = await fetch('https://api.obuvashka23.ru/Shoes/filter?markdown='+markdown+'&gender=' + document.getElementById('gender').value + '&season=' + document.getElementById('season').value + '&typeShoes=' + document.getElementById('typeShoes').value + '&brand=' + document.getElementById('brand').value + '&materials=' + document.getElementById('materials').value + '&outmaterial=&priceUp=' + document.getElementById('priceUp').value + '&priceDown=' + document.getElementById('priceDown').value + '' + sortType + '&discountUp=' + sortDiscountsUp + '&discountDown=' + sortDiscountsDown + '&sizeUp=' + document.getElementById('sizeUp').value + '&sizeDown=' + document.getElementById('sizeDown').value + "&limitRec=12&оffsetRec=" + firstProduct);
let products = await res.json();
if (products != null) {

products.forEach((data) => {
if (count == 0) {
document.getElementById('pr').innerHTML = "";
}
count++;

document.getElementById('pr').innerHTML += showProductShoes(data.title, data.price, data.gender, data.season, data.type, data.brands, count, data.discount, data.id, data.vendorCode, cartBorder.has(data.vendorCode));


}
);
} else {
document.getElementsByClassName('paginator')[0].style.display = "none";
document.getElementById('pr').innerHTML = `<h1 style="font-family: 'Alegreya Sans', sans-serif;font-style: italic;font-weight: 700;font-size: 200%;">Ничего не найдено</h1>`;
countAllProduct = 0;
}
let countAllProduct = 0;
let request = new XMLHttpRequest();
request.open('GET', 'https://api.obuvashka23.ru/Shoes/filter?markdown='+markdown+'&gender=' + document.getElementById('gender').value + '&season=' + document.getElementById('season').value + '&typeShoes=' + document.getElementById('typeShoes').value + '&brand=' + document.getElementById('brand').value + '&materials=' + document.getElementById('materials').value + '&outmaterial=&priceUp=' + document.getElementById('priceUp').value + '&priceDown=' + document.getElementById('priceDown').value + '' + sortType + '&discountUp=' + sortDiscountsUp + '&discountDown=' + sortDiscountsDown + '&sizeUp=' + document.getElementById('sizeUp').value + '&sizeDown=' + document.getElementById('sizeDown').value + "&count=1", false);
request.send(null);

let result = "";
if (request.status === 200) {
let arrayResponse = JSON.parse(request.responseText);
if (arrayResponse != null) {
countAllProduct = arrayResponse[0].count;
}
}


var counts = countAllProduct; //всего 
cnt = 12; //отображение
cnt_page = Math.ceil(counts / cnt);
var paginator = document.querySelector(".paginator");
var page = "";
let lastNum = "";
for (var i = 0; i < cnt_page; i++) {
if(i < 5){
page += `<span onclick="pagination(event, `+f+`)" class="setcolorless"  data-page=` + i * cnt + `  id="page` + i + `">` + (i + 1) + `</span>`;
}else{
lastNum = `<span onclick="nextPages(true)" class="setcolorless" >&#10095;</span>`;
countNum = i;
}
}

if(!nextBlockPage){
page += lastNum;
paginator.innerHTML = page;
}else{
nextPages(false);
uy = false;
}
document.getElementsByClassName('paginator')[0].style.display = "flex";
tyr();



if (window.innerWidth > 966) {
let we = document.getElementById('rgPn').scrollHeight;
let re = document.getElementById('pr').scrollHeight;
let yt = re;
document.getElementById('ltPl').style.height = yt + "px";
}

}

let ty = true;
function pagination(event, m) {
var e = event || window.event;
var target = e.target;
id = target.id;
var num_ = id.substr(4);
f = m;
ty = false;
clicToSelectPage(num_);
main_page = document.getElementById(id);
main_page.classList.add("paginator_active");
window.scroll({
left: 0,
top: 0,
behavior: 'auto'
});


}
function nextPages(call){
nextBlockPage = true;
if(call){
f++;
}
document.getElementsByClassName('paginator')[0].style.display = "flex";
var paginator = document.querySelector(".paginator");
let countDivision = Math.round(countNum/4) ;//
let count = (countNum + 1) - (countDivision * f);
let nextPages ="";
let page = "";
if((f*5) - 5 > 0){
page += `<span onclick="oldPages()" class="setcolorless" >&#10094;</span>`;
}
let k = 0;
let allcount =  f*5 + 1;


for (var i = (f*5) - 5; i < allcount; i++) {
if(i <= countNum){
if(i < (f*5) ){
page += `<span onclick="pagination(event, `+f+`)" class="setcolorless"  data-page=` + i * cnt + `  id="page` + i + `">` + (i + 1) + `</span>`;
}else{
nextPages = `<span onclick="nextPages(true)" class="setcolorless" >&#10095;</span>`;
}
}
}
page += nextPages;
paginator.innerHTML = page;
tyr();
}

function oldPages(){
nextBlockPage = true;
// if(uy){
f--;
// } else{
// 	f++;
// }
uy = true;
var paginator = document.querySelector(".paginator");
var page = "";
let lastNum = "";
let nextPages ="";
if((f*5) - 5 != 0){
page += `<span onclick="oldPages()" class="setcolorless" >&#10094;</span>`;
}
for (var i = (f*5) - 5; i < f*5 + 1; i++) {
if(i <= countNum){
if(i < (f*5) ){
page += `<span onclick="pagination(event, `+f+`)" class="setcolorless"  data-page=` + i * cnt + `  id="page` + i + `">` + (i + 1) + `</span>`;
}else{
nextPages = `<span onclick="nextPages(true)" class="setcolorless" >&#10095;</span>`;
}
}
}
page += lastNum;
page += nextPages;
paginator.innerHTML = page;
tyr();
}

function clicToSelectPage(l) {
for (var i = 0; i < cnt_page; i++) {
let colorless = document.getElementById("page" + i);

}
main_page = document.getElementById(id);
main_page.classList.add("paginator");
firstProduct = (l * 12);
getApiProduct();

}

function tyr() {
if (count != 0) {
main_page = document.getElementById(id);
main_page.classList.add("paginator_active");
}
}





function clickSort(intTypeSort, field) {
sortType = '&sortType=' + intTypeSort + '&sortField=' + field;
if (lastFunCalled == "getApiProduct") {
getApiProduct();
}
}

getApiProduct();
getPriceShoes();



$(document).ready(function () {
$(".burgerSortBtn").click(function () {
$(".buttonPanelSort").slideToggle();
});
});

$(document).ready(function () {
$(".openFilter").click(function () {
$("#ltPl").slideToggle();
});
});
//openFilter

if (window.innerWidth < 966) {
$('.leftPanel').addClass('leftPanelMobile');
$('.leftPanelMobile').removeClass('leftPanel');
$("#ltPl").hide();
}



var cart = [];

async function getChoiceSize(id) {
let choiceSize = document.getElementById('choiceSize');
choiceSize.innerHTML = "";

let resSize = await fetch('https://api.obuvashka23.ru/ShoesSize?idShoes=' + id);
let size = await resSize.json();
size.forEach((data) => {
count = data.count;
choiceSize.innerHTML += "<option value='" + data.size + "'>Размер обуви: " + data.size + " RU</option>";
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
if (div.classList.contains('active') == false) {
getChoiceSize(id);
idElementLocal = idElement;
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

let cartArray = [];
cartArray = Array.from(cart, ([name, value]) => ({ name, value }));
var cartMap = new Map();
cartMap = Array.from(cartArray, ({name, value}) => ([ name, value ]));

localStorage.setItem('cart', JSON.stringify(cartMap));
countProductInCart();

}



countProductInCart();
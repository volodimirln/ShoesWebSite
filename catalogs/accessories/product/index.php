<? 
 $dataJson = file_get_contents("https://api.obuvashka23.ru/vendorAccessories?vendorCode={$_GET['vendorCode']}");
 $data = json_decode($dataJson);
$id = $data[0]->{"id"};
$countProduct = $data[0]->{"num"};

$dataImageJson = file_get_contents("https://api.obuvashka23.ru/ImagesAccessories?accessoriesId={$id}&status=0");
$dataImage = json_decode($dataImageJson);

?>
<!DOCTYPE html>
<html style="overflow-x: hidden;">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="icon" type="icon" href="https://obuvashka23.ru/img/logoObuvashkaWeb.png">
	<title><?echo $data[0]->{"title"}; ?> | Обувашка</title>
	<link rel="stylesheet" type="text/css" href="https://obuvashka23.ru/css/styleProductPage.css">
	<link rel="stylesheet" type="text/css" href="https://obuvashka23.ru/css/style.css">
	<link rel="stylesheet" type="text/css" href="https://obuvashka23.ru/css/fontstyle.css">
	<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
	<script src="https://obuvashka23.ru/resources/components/index.js"></script>
</head>
<body>
	<header class="header">
		<script>
			showHeader();
		</script>
	</header>
<div class="mini-cart"></div>

		<div class="containerProduct" style="margin-top: 5%;">
			<div class="boxProduct">
				<div class="images">
					<div class="img-holder active">
						<img draggable="false" id="imgMain" src="<? echo "https://obuvashka23.ru/img/?filename=".$dataImage[0]->{"photoPath"}; ?>">
					</div>
					<div class="img-holder">
						<img draggable="false" id="imgFirst" src="<? echo "https://obuvashka23.ru/img/?filename=".$dataImage[0]->{"photoPath"}; ?>" onclick="imgsrc(0);">
					</div>
					<div class="img-holder">
						<img draggable="false" id="imgSecond" src="<? echo "https://obuvashka23.ru/img/?filename=".$dataImage[1]->{"photoPath"}; ?>" onclick="imgsrc(1);">
					</div>
					<div class="img-holder">
						<img draggable="false" id="imgThird" src="<? echo "https://obuvashka23.ru/img/?filename=".$dataImage[2]->{"photoPath"}; ?>" onclick="imgsrc(2);">
					</div>
					<div class="img-holder">
						<img draggable="false" id="imgFourth" src="<? echo "https://obuvashka23.ru/img/?filename=".$dataImage[3]->{"photoPath"}; ?>" onclick="imgsrc(3);">
					</div>
				</div>

				<div class="basic-info">
					<h3><?echo $data[0]->{"title"}; ?></h3>
					<?echo "<h4 style='color: green;font-size: 135%;margin-bottom: 3%;'>Количество: ".$countProduct." штук.</h4>"; ?>
					<?
					if($data[0]->{"realdiscount"} == 0){
						echo "<span>Цена: ".$data[0]->{"price"}."₽</span>"; 
					}else{
						echo " <span> Цена: <s>".$data[0]->{"price"}."₽ </s></span>";
						echo " <span>Со скидкой: ".($data[0]->{'price'}-($data[0]->{'price'} * $data[0]->{'realdiscount'}))."₽ </span>";
					}
					?>						<div class="options">
						<a onclick="addToCart(<? echo  $id; ?>, `<? echo $data[0]->{'title'}; ?>`, <? echo $data[0]->{'price'}; ?>, `<?echo $data[0]->{'vendorCode'}; ?>`);location.href=`https://obuvashka23.ru/ordering/`;">Купить сейчас</a>
						<a id="AddCart" onclick="addToCart(<? echo  $id; ?>, `<? echo $data[0]->{'title'}; ?>`, <? echo $data[0]->{'price'}; ?>, `<?echo $data[0]->{'vendorCode'}; ?>`)" >Добавить в корзину</a>
						<br/> <br/>
						<br/> <br/>
					</div>
				</div>

				<div class="description">
					<h4>Описание</h4>
					<p><?echo $data[0]->{"description"}; ?></p>
				</div>
				<ul class="features">
					<h4 >Характеристики</h4>
					<table style="height: 100%; width: 100%;">
						<tbody>
							<tr class="trBorderFirst">
								<td>Тип: </td>
								<td>Цвет: </td>
								<td>Размер: </td>
								<td>Артикул: </td>
							</tr>
							<tr class="trBorderSecond">
								<td><?echo $data[0]->{"type"}; ?></td>
								<td><?echo $data[0]->{"color"}; ?></td>
								<td><?echo $data[0]->{"sizeHead"}; ?></td>
								<td><?echo $data[0]->{"vendorCode"}; ?></td>
							</tr>
						</tbody>
					</table>
				</ul>
			</div>
		</div>

	<script type="text/javascript">
		var i = 0;
		var imageMain = document.getElementById("imgMain");
		var imgFirst = document.getElementById("imgFirst");
		var imgSec = document.getElementById("imgSecond");
		var imgThird = document.getElementById("imgThird");
		var imgFourth = document.getElementById("imgFourth");
		var imgs = new Array('<? echo "https://obuvashka23.ru/img/?filename=".$dataImage[0]->{"photoPath"}; ?>', '<? echo "https://obuvashka23.ru/img/?filename=".$dataImage[1]->{"photoPath"}; ?>', '<? echo "https://obuvashka23.ru/img/?filename=".$dataImage[2]->{"photoPath"}; ?>', '<? echo "https://obuvashka23.ru/img/?filename=".$dataImage[3]->{"photoPath"}; ?>');
		function imgsrc(i) {
			imageMain.src = imgs[i];
		}
	</script>

	<script>
		showFooter();
	</script>
	
	<script>
		let idWn = 0;
  let nameWn = "";
  let priceWn = 0;
  let size = 0;
  let vendorCodeWn = "";
  var cart = new Map(); 
  function IsProductInCart(){
	dataLoadCart = JSON.parse(localStorage.getItem('cart'));

	if(dataLoadCart != null){
		for(let value of dataLoadCart){
			cart.set(value[0], value[1]);		
  		}
 	}
	 if (cart.has("<?echo $data[0]->{"vendorCode"}; ?>")==true) {
		let button = document.getElementById("AddCart");
		button.style.backgroundColor = "red";
		button.style.color = "#FFF";
		button.style.borderColor = "transparent";
		button.innerHTML = "Товар в корзинe"
	 }
}
IsProductInCart();

    function addToCart(id, name, price, vendorCode) {
		openMobileCart();

			idWn = id;
  		nameWn = name;
   		priceWn = price;
   		vendorCodeWn = vendorCode;

		   IsProductInCart();

    
    }
	
let dataLoad = {};

function openMobileCart(){
	


dataLoad = JSON.parse(localStorage.getItem('cart'));

if(dataLoad != null){
	for(let value of dataLoad){
	
cart.set(value[0], value[1]);
		
  }
 }
 console.log(cart);
 if (cart.has(vendorCodeWn)==false) {

elements = [];

elements.push(<? echo  $id; ?>);
elements.push("<? echo $data[0]->{'title'}; ?>");
elements.push(<? echo ($data[0]->{'price'}-($data[0]->{'price'} * $data[0]->{'realdiscount'})); ?>);
elements.push(0);
elements.push(1);
elements.push(1);
 
cart.set("<?echo $data[0]->{'vendorCode'}; ?>", elements);

}
else {

}





$('.mini-cart').html(showCartElement(cart));


/*****************************/
let cartArray = [];
console.log(cart);
cartArray = Array.from(cart, ([name, value]) => ({ name, value }));
console.log(cartArray);
var cartMap = new Map();
cartMap = Array.from(cartArray, ({name, value}) => ([ name, value ]));
//cartMap.delete('');
console.log(cartMap[0][1]);
/*****************************/

//console.log(cart);

localStorage.setItem('cart', JSON.stringify(cartMap));
countProductInCart();


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
 if (value.title.search(expression) != -1 || value.description.search(expression) != -1)
    {
		$('#result').append('<li class="list-group-item link-class"><a href="https://obuvashka23.ru/catalogs/shoes/product/?vendorCode='+value.vendorCode+'" style="all:unset;"> '+value.title+' | <span class="text-muted">'+value.description+'</span><span class="text-muted"> | '+value.price+'₽</a></span></li>');
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
countProductInCart();

	</script>
</body>
</html>
<? 
$req = urlencode($_GET['vendorCode']);
 $dataJson = file_get_contents("https://api.obuvashka23.ru/vendorShoes?vendorCode={$req}");
 $data = json_decode($dataJson);
$id = $data[0]->{"id"};
$dataSizeJson = file_get_contents("https://api.obuvashka23.ru/ShoesSize?idShoes={$id}");
$dataSize = json_decode($dataSizeJson);

$dataImageJson = file_get_contents("https://api.obuvashka23.ru/ImagesShoes?productId={$id}&status=0");
$dataImage = json_decode($dataImageJson);

$sizeHtml = "";
$countSize = "";
for ($i = 0; $i < count($dataSize); $i++) {
	$countSize += $dataSize[$i]->{"num"};
	$sizeHtml .= "<option value='".$dataSize[$i]->{"size"}."'>".$dataSize[$i]->{"size"}."</option>";
}


?>
<!DOCTYPE html>
<html style="overflow-x: hidden;">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="icon" type="icon" href="https://obuvashka23.ru/img/logoObuvashkaWeb.png">
	<title><?echo $data[0]->{"title"}.$markdown; ?> | Обувашка</title>
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

<div class="mini-cart" ></div>

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
				<? 
				$colorItem = substr($data[0]->{"vendorCode"}, -1);
				if(!(int)$colorItem){
					switch($colorItem){
						case "W":
							$colorItem = "белые";
							break;
						case "R":
							$colorItem = "красные";
							break;
						case "G":
							$colorItem = "зеленые";
							break;
						case "B":
							$colorItem = "синие";
							break;
						default:
						$colorItem = "";
					}
				}else{
					$colorItem = "";
				}
				?>
				<h3><?echo $data[0]->{"title"}." ".$colorItem; ?></h3>
				

				<?echo  ($data[0]->{"markdown"} == 1) ? "<h4 style='color: red;font-size: 155%;'>Уценка</h4>" : "";?>
				<?echo "<h4 style='color: green;font-size: 135%;margin-bottom: 3%;'>Количество: ".$countSize." пар.</h4>"; ?>
					<!-- <div class="rate">
						<i class="filled fas fa-star"></i>
						<i class="filled fas fa-star"></i>
						<i class="filled fas fa-star"></i>
						<i class="filled fas fa-star"></i>
						<i class="filled fas fa-star"></i>
						<i class="filled fas fa-star"></i>
					</div> -->
					<?
					if($data[0]->{"realdiscount"} == 0){
						echo "<span>Цена: ".$data[0]->{"price"}."₽</span>"; 
					}else{
						echo " <span> Цена: <s>".$data[0]->{"price"}."₽ </s></span>";
						echo " <span>Со скидкой: ".($data[0]->{'price'}-($data[0]->{'price'} * $data[0]->{'realdiscount'}))."₽ </span>";
					}
					?>
					<div class="options">
						<script>
							function clearLocalstorage(){
								localStorage.clear();
								dataLoadCart = "";
								cart = new Map(); 
								 dataLoad = {};

 dataLoadCart = {};
 cart1 = new Map();
 cartArray = [];
							}
						</script>
						<a href="#" onclick="clearLocalstorage();document.getElementsByClassName('mini-cart')[0].style.display = 'none';addToCart(<? echo  $id; ?>, `<? echo $data[0]->{'title'}; ?>`, <? echo ($data[0]->{'price'}-($data[0]->{'price'} * $data[0]->{'realdiscount'})); ?>, `<?echo $data[0]->{'vendorCode'}; ?>`);location.href=`https://obuvashka23.ru/ordering/`;">Купить сейчас</a>
						<a id="AddCart" onclick="addToCart(<? echo  $id; ?>, `<? echo $data[0]->{'title'}; ?>`, <? echo ($data[0]->{'price'}-($data[0]->{'price'} * $data[0]->{'realdiscount'})); ?>, `<?echo $data[0]->{'vendorCode'}; ?>`)" >Добавить в корзину</a>
						<br/> <br/>
						<label class="namelabel-select" for="standard-select">Выберите размер</label>
						<br/> <br/>
						<div class="select">
						  <select id="standard-select">
						  	<?php
								echo $sizeHtml;
						  		 
						  	?>
						  </select>
						  <span class="focus"></span>
						</div>
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
								<td>Бренд: </td>
								<td>Пол: </td>
								<td>Сезон: </td>
								<td class="infoMaterialUp">Материал верха: </td>
								<td class="infoMaterialLining">Материал подкладки: </td>
								<td class="infoMaterialInsole">Материал подошвы: </td>
								<td>Артикул: </td>
								<td>Уценка: </td>
								<td>Количество: </td>
							</tr>
							<tr class="trBorderSecond">
								<td><?echo $data[0]->{"brand"}; ?></td>
								<td><?echo $data[0]->{"gender"}; ?></td>
								<td><?echo $data[0]->{"season"}; ?></td>
								<td class="infoMaterialUpValue"><?echo $data[0]->{"material"}; ?></td>
								<td class="infoMaterialLiningValue"><?echo $data[0]->{"outmaterial"}; ?></td>
								<td class="infoMaterialInsoleValue"><?echo isset($data[0]->{"insoleMaterial"}) ? $data[0]->{"insoleMaterial"} : "Не указано"; ?></td>
								<td><?echo $data[0]->{"vendorCode"}; ?></td>
								<td><?echo ($data[0]->{"markdown"} == 1) ? "Да" : "Нет";?></td>
								<td><?echo $countSize;?></td>
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
		async	function cartBorderProduct(NumProduct) {
			NumProduct = NumProduct + 1;
			document.body.innerHTML += '<style>.product:nth-child('+NumProduct+'){border: 3px solid #03A9F4;}</style>';
		}
	</script>

	<script>
		let idWn = 0;
  	let nameWn = "";
  	let priceWn = 0;
  	let size = 0;
  	let vendorCodeWn = "";
  	let idElementLocal = 0;
  	var cart = new Map(); 
	
  	  function addToCart(id, name, price, vendorCode) {
	
			openMobileCart();
	
				idWn = id;
  			nameWn = name;
  	 		priceWn = price;
  	 		vendorCodeWn = vendorCode;
			  IsProductInCart();
				console.log(vendorCodeWn);
  	  
  	  }
	
let dataLoad = {};

let dataLoadCart = {};
var cart1 = new Map(); 


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
let choiceSize = document.getElementById('standard-select');
	size = choiceSize.options[choiceSize.selectedIndex].value;
elements.push(<? echo  $id; ?>);
elements.push("<? echo $data[0]->{'title'}; ?>");
elements.push(<? echo ($data[0]->{'price'}-($data[0]->{'price'} * $data[0]->{'realdiscount'})); ?>);
elements.push(size);
elements.push(1);
elements.push(3);
 
cart.set("<?echo $data[0]->{'vendorCode'}; ?>", elements);

}
else {

}





$('.mini-cart').html(showCartElement(cart));

/*****************************/
let cartArray = [];
console.log(cart);
cartArray = Array.from(cart, ([name, value]) => ({ name, value }));
var cartMap = new Map();
cartMap = Array.from(cartArray, ({name, value}) => ([ name, value ]));
//cartMap.delete('');
console.log(cartMap[0][1]);
/*****************************/

//console.log(cart);

localStorage.setItem('cart', JSON.stringify(cartMap));
countProductInCart();

}

countProductInCart();

	</script>
</body>
</html>
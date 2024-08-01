<?php


	$method = $_SERVER['REQUEST_METHOD'];
	//if($_SERVER["HTTP_ORIGIN"] == "https://obuvashka23.ru"){ }
	//echo var_dump($_SERVER);

	$c = true;
	if ( $method === 'POST' && $_SERVER["HTTP_ORIGIN"] == "https://obuvashka23.ru") {//
	
		$project_name = trim("Обувашка");
		$admin_email  = trim("getorder@obuvashka23.ru");
		$form_subject = trim("Заказ");
		$email = trim($_POST['email']);
		$dataProduct = trim(urldecode($_POST['dataProduct']));
		$data = json_decode($dataProduct);
		$FIO = trim($_POST['FIO']);
		$phone = trim($_POST['phone']);

		$count = 0;
		for($i = 0; $i < count($data); $i++){

			if($data[$i]->{'value'}[5] == 1){
				$dataRecordJson = file_get_contents("https://api.obuvashka23.ru/Accessories");
				$dataRecord = json_decode($dataRecordJson);
				for ($j = 0; $j < count($dataRecord); $j++) {
					if($data[$i]->{'name'} == $dataRecord[$j]->{"vendorCode"}){
						if($data[$i]->{'value'}[4] > 0 && $data[$i]->{'value'}[4] < 5){
							$amount = $dataRecord[$j]->{"price"} * $data[$i]->{'value'}[4];
									$count += $amount;
									$itms[$i] = array(
											"Name" => $dataRecord[$j]->{"vendorCode"}." ".$dataRecord[$j]->{"title"},
											"Price"  =>$dataRecord[$j]->{"price"} * 100,
											"Quantity" => $data[$i]->{'value'}[4],
											"Amount" => $amount * 100,
											"PaymentMethod" => "full_prepayment",
											"PaymentObject" => "commodity",
											"Tax" => "none"
								);
						}
					}
				}
			}elseif($data[$i]->{'value'}[5] == 2){
				$dataRecordJson = file_get_contents("https://api.obuvashka23.ru/Bags/filter");
				$dataRecord = json_decode($dataRecordJson);
				for ($j = 0; $j < count($dataRecord); $j++) {
					if($data[$i]->{'name'} == $dataRecord[$j]->{"vendorCode"}){
						if($data[$i]->{'value'}[4] > 0 && $data[$i]->{'value'}[4] < 5){
							$amount = $dataRecord[$j]->{"price"} * $data[$i]->{'value'}[4];
									$count += $amount;
									$itms[$i] = array(
											"Name" => $dataRecord[$j]->{"vendorCode"}." ".$dataRecord[$j]->{"title"},
											"Price"  =>$dataRecord[$j]->{"price"} * 100,
											"Quantity" => $data[$i]->{'value'}[4],
											"Amount" => $amount * 100,
											"PaymentMethod" => "full_prepayment",
											"PaymentObject" => "commodity",
											"Tax" => "none"
								);
						}
					}
				}
			
			}elseif($data[$i]->{'value'}[5] == 3){
				$dataRecordJson = file_get_contents("https://api.obuvashka23.ru/Shoes");
				$dataRecord = json_decode($dataRecordJson);
				for ($j = 0; $j < count($dataRecord); $j++) {
					if($data[$i]->{'name'} == $dataRecord[$j]->{"vendorCode"}){
						$id = $dataRecord[$j]->{"id"};
						$dataSizeJson = file_get_contents("https://api.obuvashka23.ru/ShoesSize?idShoes={$id}");
						$dataSize = json_decode($dataSizeJson);
						for ($k = 0; $k < count($dataSize); $k++) {
							if($data[$i]->{'value'}[3] == $dataSize[$k]->{"size"}){
								if($data[$i]->{'value'}[4] > 0 && $data[$i]->{'value'}[4] < 5){
									$amount = ($dataRecord[$j]->{"price"} - ($dataRecord[$j]->{"price"} * $dataRecord[$j]->{"realdiscount"})) * $data[$i]->{'value'}[4];
									$count += $amount;
									$itms[$i] = array(
											"Name" => $dataRecord[$j]->{"vendorCode"}." ".$dataRecord[$j]->{"title"}.". Размер ".$dataSize[$k]->{"size"},
											"Price"  =>($dataRecord[$j]->{"price"} - ($dataRecord[$j]->{"price"} * $dataRecord[$j]->{"realdiscount"})) * 100,
											"Quantity" => $data[$i]->{'value'}[4],
											"Amount" => $amount * 100,
											"PaymentMethod" => "full_prepayment",
											"PaymentObject" => "commodity",
											"Tax" => "none"
									);
								}
							}		
						}
					}
				}
			}
		}
		$dateTime = date("Y-m-d H:i:s");
		$paymentInShop =  (bool)$_POST['paymentInShop'] ? "интернет-эквайринг" : "при получении";
		connDB("INSERT INTO `Order`(`name`, `phone`, `email`, `regdate`, `paymentMethod`, `sum`) VALUES ( '$FIO','$phone','$email', '$dateTime', '$paymentInShop', $count)");
		$OrderId = resultDB("SELECT `id`, `name`, `phone`, `email`, `regdate` FROM `Order` WHERE `name` = '$FIO' and `phone` = '$phone' and `email` = '$email' and `regdate` = '$dateTime' ")[0]["id"];

		$dataJSON = array(
			"TerminalKey" => "000000",
    		"Amount" => $count * 100,
    		"OrderId" => "$OrderId",
    		"Description" => "Оплата заказа №$OrderId на сумму $count рублей",
			"DATA" => array(
				"Phone" => $phone,
				"Email" => $email
			),
			"Receipt" => array(
				"Email" => $email,
				"Phone" =>  $phone,
				"Taxation" =>  "usn_income",
				"Items" => $itms)
		);
		 
		$addressFirst = trim($_POST['addressFirst']);
		$addressSecond = trim($_POST['addressSecond']);
		$inputDomofon = trim($_POST['inputDomofon']);

		$message = "<h1 style='margin:0px; padding:0px;font-size:16pt;'>$FIO</h1><br>";
		$message .= "<h1 style='margin:0px; padding:0px;font-size:16pt;'>$phone</h1><br>";
		if($addressFirst != ""){
			$message .= "<h1 style='margin:0px; padding:0px;font-size:16pt;'>$addressFirst</h1><br>";
			$message .= "<h1 style='margin:0px; padding:0px;font-size:16pt;'>$addressSecond</h1><br>";
			$message .= "<h1 style='margin:0px; padding:0px;font-size:16pt;'>$inputDomofon</h1><br>";
		}
		$message .= "<h1 style='margin:0px; padding:0px;font-size:16pt;'>$email</h1><br>";
		$message .= "<h1 style='margin:0px; padding:0px;font-size:16pt;'>Номер заказа: $OrderId</h1><br>";
		$message .= "<h1 style='margin:0px; padding:0px;font-size:16pt;'>Способ оплаты: $paymentInShop</h1><br>";

		$totalCoast = 0;
		for($j = 0; $j < count($itms);$j++ ){
			$message .= "<table style='width: 100%;margin-top:5%;'>";
			foreach ( $itms[$j] as $key => $value ){
				if($value != "" && $key != "Tax" && $key != "Tax" && $key != "PaymentObject" && $key != "PaymentMethod" && $key != "Ean13"){
					if($key == "Amount"){
						$totalCoast += $value/100;

					}
					if($key == "Price" || $key == "Amount"){
						$value = $value / 100;
						$value = $value."₽";
					}
					switch($key){
						case "Name":
							$key = "Наименование";
							break;

						case "Price":
							$key = "Цена";
							break;

						case "Quantity":
							$key = "Количество";
							break;

						case "Amount":
							$key = "Итог";
							break;
					}
						$message .= "
		 		" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
		 			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
		 			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		 		</tr>
				";
					
					
					
				}
			}
			$message .= "<table style='width: 100%;'>";
			
		}
	}
		$totalCoast = $totalCoast."₽";
		$message .= "<h1 style='margin:0px; padding:0px;font-size:16pt;'>Итого: $totalCoast </h1><br>";
	function adopt($text) {
		return '=?UTF-8?B?'.Base64_encode($text).'?=';
	}

		
	$headers = "MIME-Version: 1.0" . PHP_EOL .
	"Content-Type: text/html; charset=utf-8" . PHP_EOL .
	'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
	'Reply-To: '.$admin_email.'' . PHP_EOL;

	if($itms != null && $_SERVER["HTTP_ORIGIN"] == "https://obuvashka23.ru"){
		if((bool)$_POST['paymentInShop']){
			$response = sendPostRequest("https://securepay.tinkoff.ru/v2/Init", $dataJSON);
			 if ($response) {
				$decodedResponse = json_decode($response, true);
			 	$url = $decodedResponse["PaymentURL"];
				if($decodedResponse["Success"]){
					mail($admin_email, adopt($form_subject), $message, $headers);
					echo "<script>window.location.replace(`".$url."`);</script>";
				}else{
					$headers = "MIME-Version: 1.0" . PHP_EOL .
								"Content-Type: text/html; charset=utf-8" . PHP_EOL .
								'From: '.adopt("Ошибка оплаты заказа - $OrderId").' <'.$admin_email.'>' . PHP_EOL .
								'Reply-To: '.$admin_email.'' . PHP_EOL;
					$message = "Была предпринята неудачная попытка создания и оплаты заказа";
					mail($admin_email, adopt($form_subject), $message, $headers );
	
					echo "<script>window.location.replace(`https://obuvashka23.ru/`);</script>";
				}
			 } else {
			 }
		}else{
			mail($admin_email, adopt($form_subject), $message, $headers );
			echo "<script>window.location.replace(`https://obuvashka23.ru/thxForOrder.html`);</script>";
		}
			

	}else{
		http_response_code(503);
	}
	function sendPostRequest($url, $jsonData) {
		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($jsonData));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array(
			'Content-Type: application/json',
			'Content-Length: ' . strlen(json_encode($jsonData))
		));
	
		$response = curl_exec($ch);
	
		curl_close($ch);
	
		return $response;
	}
	 function connDB($qr){
		$conn = mysqli_connect("localhost", "0000", "0000", "0000");
		$query = mysqli_query($conn, $qr);
		while ($res = mysqli_fetch_assoc($query)) {
			$queryList[] = $res;
	}
	}

	function resultDB($qr){
		$queryList = [];
		$conn = mysqli_connect("localhost", "0000", "0000", "0000");
		$query = mysqli_query($conn, $qr);
		while ($res = mysqli_fetch_assoc($query)) {
			$queryList[] = $res;
	}
	return $queryList;
	}
	

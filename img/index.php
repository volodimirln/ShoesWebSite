<?php
$filename = "/home/c/cx07681/api.obuvashka23/public_html/image/".$_GET["filename"];
header('Content-Type: image/jpeg');

$percent = 0.3;
$info   = getimagesize($filename);
$type   = (int)$info[2];
$r = $_GET["R"];
$g = $_GET["G"];
$b = $_GET["B"];
switch ($type) { 
    case 3: 
        $percent = 0.5;
        list($width, $height) = $info;
        $newwidth = $width * $percent;
        $newheight = $height * $percent;

        $source = imageCreateFromPng($filename);
        $whiteBackground = imagecreatetruecolor($newwidth, $newheight);
        $color = imagecolorallocate($whiteBackground, 255, 255, 255); 
        if($r != "" && $g != "" && $b != ""){
            $color = imagecolorallocate($whiteBackground, $r, $g, $b); 
        }else{
            $color = imagecolorallocate($whiteBackground, 255, 255, 255); 
        }
        imagefill($whiteBackground, 0, 0, $color);

        imagecopyresized($whiteBackground, $source, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);
        imagepng($whiteBackground);

         
        break;
    
	case 2: 
        list($width, $height) = $info;
        $newwidth = $width * $percent;
        $newheight = $height * $percent;

        $thumb = imagecreatetruecolor($newwidth, $newheight);
        $source = imagecreatefromjpeg($filename);

        imagecopyresized($thumb, $source, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);
        imagejpeg($thumb);
        break;
    }

?>
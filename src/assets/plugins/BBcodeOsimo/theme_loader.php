<?php
if(isset($_POST['theme'])){
	$basepath = "http://".$_SERVER['SERVER_NAME'];
	$path = pathinfo($_SERVER['PHP_SELF'],PATHINFO_DIRNAME);
	define("THEMEPATH",$basepath.$path."/themes/".$_POST['theme']."/");

	echo "<div class=\"osimo-editor\">";
	include("themes/".$_POST['theme']."/template.php");
	echo "</div>";
}

function getFontSelectorItems(){
	$fonts = array(
		"Arial",
		"Comic Sans MS",
		"Georgia",
		"Helvetica",
		"Impact",
		"Tahoma",
		"Times New Roman",
		"Trebuchet MS",
		"Verdana"
	);

	echo "<option value='' selected>Rodzaj czcionki</option>";

	foreach($fonts as $font){
		echo "<option value='$font' style='font-family:\"$font\",sans-serif'>$font</option>";
	}
}

function getFontSizeItems(){
	$sizes = array("Mały"=>10,"Normalny"=>16,"Duży"=>24,"Ogromny"=>30);

	echo "<option value='' selected>Rozmiar czcionki</option>";

	foreach($sizes as $name=>$size){
		echo "<option value='$size' style='font-size:{$size}px'>$name</option>";
	}
}

function getColorPickerItems(){
	/* Might as well stick to the W3C/CSS Standards */
	$colors = array(
		'aqua' => 'aqua',
		'black' => 'czarny',
		'blue' => 'niebieski',
		'fuchsia' => 'fuchsia',
		'gray' => 'szary',
		'green' => 'zielony',
		//'lime' => '',
		'maroon' => 'kasztanowy',
		'navy' => 'morski',
		'olive' => 'oliwkowy',
		'purple' => 'purpurowy',
		'red' => 'czerwony',
		'silver' => 'srebrny',
		//'teal' => '',
		'white' => 'biały',
		'yellow' => 'żółty'
	);

	echo "<option value='' selected>Kolor czcionki</option>";

	foreach($colors as $color => $name){
		if($color!='white'){
			echo "<option value='$color' style='color:$color;'>".ucfirst($name)."</option>";
		}
		else{
			echo "<option value='$color'>".ucfirst($name)."</option>";
		}
	}
}

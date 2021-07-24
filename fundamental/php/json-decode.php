<?php

//ambil data dari file
$contents = file_get_contents('../json/coba.json');
//ubah standar encodingnya
$contents = utf8_encode($contents);

// ubah string json menjadi array
$result = json_decode($contents, true); // kalau pakai true akan jadi array assoc
//kalau tidak pakai true akan menjadi object

// var_dump($result);

echo $result[0]["pembimbing"]["pembimbing 1"];//ambil data pembimbing <i class="fas fa-wifi-1    "></i>

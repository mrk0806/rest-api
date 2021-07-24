<?php

$dbh = new PDO('mysql:host=localhost; dbname=pw_043040023', 'root', '');

// ambil data menggunakan pdo
$db = $dbh->prepare('select * from mahasiswa');
$db->execute();

$mhs = $db->fetchAll(PDO::FETCH_ASSOC); //pengembalian array associative

$mhs1 = [
  [
    "nama" => "sandhika galih",
    "nrp" => "08190822",
    "email" => "sandikha@gmail.com"
  ], [
    "nama" => "sandhika galih",
    "nrp" => "08190822",
    "email" => "sandikha@gmail.com"
  ]
];
// var_dump($mhs);

$data = json_encode($mhs);
echo $data;

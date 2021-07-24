<?php
$data = file_get_contents('data/pizza.json');
$menu = json_decode($data, true);
// var_dump($menu["menu"][0]["nama"]);//karna json dikasih object menu. maka harus di tambah di dpn array menu

// var_dump($menu);
// die;
$menu = $menu["menu"]; //untuk mempersingkat supaya tidak di tulis di dpnnya array menu

// var_dump($menu);
// echo $menu[0]["nama"];
// die;

function rupiah($angka)
{
  // $h_rupiah = "Rp " . number_format($angka, 2, ',', '.');
  $h_rupiah = "Rp " . number_format($angka);
  return $h_rupiah;
}
?>

<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

  <title>WPU Hut</title>
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">

      <a class="navbar-brand" href="#">
        <img src="img/logo.png" width="120">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">All Menu </a>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>All Menu</h1>
      </div>
    </div>
    <div class="row">
      <?php foreach ($menu as $row) : ?>
        <div class="col-md-4">
          <div class="card mb-3">
            <img src="img/pizza/<?= $row["gambar"]; ?>" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title"><?= $row["nama"]; ?></h5>
              <p class="card-text"><?= $row["deskripsi"]; ?>.</p>
              <h5><?= rupiah($row['harga']); ?></h5>
              <a href="#" class="btn btn-primary">Pesan sekarang</a>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <!-- jquery slim tidak ada fitur ajax. karna sudah di compress -->
  <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
  <!-- pakai yang jquery yg minified kalo ga yg uncompress -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</body>

</html>
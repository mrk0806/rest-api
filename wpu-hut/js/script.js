function rupiah(angka) {
    var number_string = angka.toString(),
        sisa = number_string.length % 3,
        rupiah = number_string.substr(0, sisa),
        ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
        separator = sisa ? ',' : '';
        rupiah += separator + ribuan.join('.');
    }
    return 'Rp. ' + rupiah;
}

function tampilkanSemuaMenu() {

    $.getJSON('data/pizza.json', function(data) {
        // console.log(data);
        let menu = data.menu;
        // console.log(menu);
        $.each(menu, function(i, data) {
            // console.log(data);
            $('#daftar-menu').append('<div class = "col-md-4"> <div class = "card mb-3"> <img src = "img/pizza/' + data.gambar + '"class = "card-img-top"> <div class = "card-body"> <h5 class = "card-title" >' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '.</p> <h5>' + rupiah(data.harga) + '</h5><a href="#" class="btn btn-primary">Pesan sekarang</a></div></div></div>');
        });
    });
}

function clear() {
    $('#daftar-menu').html('');
}
tampilkanSemuaMenu();

$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    // console.log(kategori);
    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        clear();
        tampilkanSemuaMenu();
        return;
    }


    $.getJSON('data/pizza.json', function(data) {
        let menu = data.menu;
        let content = '';
        $.each(menu, function(i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class = "col-md-4"> <div class = "card mb-3"> <img src = "img/pizza/' + data.gambar + '"class = "card-img-top"> <div class = "card-body"> <h5 class = "card-title" >' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '.</p> <h5>' + rupiah(data.harga) + '</h5><a href="#" class="btn btn-primary">Pesan sekarang</a></div></div></div>'
            }
        });
        $('#daftar-menu').html(content);
    });

});
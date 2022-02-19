function searchMovie() {
    $('#movie-list').html('');
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'df79b536',
            's': $('#search-input').val()
        },
        success: function(result) {
            // console.log(result);
            if (result.Response == "True") {
                let movies = result.Search;

                // console.log(movies);
                // kemudian kita looping menggunakan each
                $.each(movies, function(i, data) {
                    $('#movie-list').append(`
                    <div class="col-md-4">
                        <div class="card mb-3" >
                            <img src="` + data.Poster + `" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">` + data.Title + `</h5>
                            <h6 class="card-subtitle mb-2 text-muted">` + data.Year + `</h6>
                            <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-no="` + data.imdbID + `">See Detail</a>
                            </div>
                        </div>
                    </div>
                    `);
                });
                $('#search-input').val('');
            } else {
                $('#movie-list').html(`
                <div class="col-md-12">
                    <h1 class=" text-center text-danger"> ` + result.Error + `</h1>
                    </div>
                `)
                $('#search-input').val('');
            }

        }
    });
}

$('#search-button').on('click', function() {
    searchMovie();
});

$('#search-input').on('keyup', function(e) {
    if (e.keyCode === 13) {
        searchMovie();
    }
});


$('#movie-list').on('click', '.see-detail', function() {
    // cek data id nya sudah dikirim blm
    // console.log($(this).data('no'))
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'df79b536',
            'i': $(this).data('no')
        },
        success: function(result) {
            if (result.Response === "True") {
                $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                    <div class="col-md-4">
                        <img src="` + result.Poster + `" class="card-img-top" alt="...">
                    </div>
                    <div class="col-md-8">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong> Title : ` + result.Title + `</strong></li>
                    <li class="list-group-item"> 
                    Released : ` + result.Released + ` <br> 
                    Genre    : ` + result.Genre + ` <br> 
                    Plot     :  ` + result.Plot + ` <br> 
                    </li>
                   
                    </ul>
                    </div>
                    </div>
                </div>
                
                `);

            }
        }
    });
});

$('#movie-list').on('click', '.see-detail', '.modal-close', function() {
    $('.modal-body').html("");
});
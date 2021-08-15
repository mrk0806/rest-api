$('#search-button').on('click', function() {

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
                console.log(movies);
            } else {
                $('#movie-list').html(`
                    <h1 class="text-center"> ` + result.Error + `</h1>
                `)
            }

        }
    });
});
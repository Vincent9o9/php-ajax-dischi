$(document).ready(function () {
    $.ajax(
    {
        'url' : 'http://localhost/esercizi_php/18-09-2020/php-ajax-dischi/server.php',
        'method' : "GET",
        'success' : function (database) {
            var source = $('#entry-template').html();
            var template = Handlebars.compile(source);
            for (var i = 0; i < database.length; i++) {
                var context = {
                    "title" : database[i].title,
                    "author" : database[i].author,
                    "year" : database[i].year,
                    "poster" : database[i].poster,
                };
                var html = template(context);
                $(".cds-container").append(html);
            }
        },
        'error' : function () {
            alert('errore');
        }
    }
    );
})

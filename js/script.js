$(document).ready(function () {
    // bootstrap tab
    $('#myTab a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show')
    });

    // ajax task 1
        var url = 'http://ajaxtesting.somee.com/api/values/';
        var tableBody = $('.user-info tbody');


        $.ajax({
            url: url+'getusers',
            type:'GET',
            success: function (response) {
                response.forEach(function (index,i) {
                        var $tr = $('<tr>').append(
                            $('<td>').text(i+1),
                            $('<td>').text(index.Id),
                            $('<td>').text(index.username),
                            $('<td>').text(index.password)
                        );
                        $tr.appendTo(tableBody);
                })
            }




    });




});
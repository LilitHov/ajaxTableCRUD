$(document).ready(function () {
    // bootstrap tab
    $('#myTab a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show')
    });


    var url = 'http://ajaxtesting.somee.com/api/values/';
    var tableBody = $('.user-info tbody');

    function getUsers() {

        $.ajax({
            url: url+'getusers',
            type:'GET',
            success: function (response) {
                response.forEach(function (index,i) {
                    var tr = $('<tr>').append(
                        $('<td>').text(i+1),
                        $('<td>').text(index.Id),
                        $('<td>').text(index.username),
                        $('<td>').text(index.password)
                    );
                    tr.appendTo(tableBody);
                });
            }
        });
    }
    getUsers();
    function sendAjax(type,username,password) {
        $.ajax({
            url: url + type,
            type: 'POST',
            data: {
                username:username,
                password:password },
            success: function (response) {
                if (type === 'login') {
                    if (response) {
                        alert('ok')
                    } else {
                        alert('error')
                    }
                } else if (type === 'registration') {
                    tableBody.html('');
                    alert();
                    getUsers();
                }
            }
        });
    }

    // console.log(userDetails);
$('.login').on('click',function () {
    var username = $('input[name="username"]').val();
    var password = $('input[name="password"]').val();
    // console.log(username,password);
        sendAjax('login',username,password);
});
    $('.registration').on('click',function () {
        var username = $('input[name="regUsername"]').val();
        var password = $('input[name="regPassword"]').val();
        // console.log(username,password);
        sendAjax('registration',username,password);
    });


});
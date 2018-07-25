$(document).ready(function () {
    // bootstrap tab
    $('#myTab a').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show')
    });


    // ajax
    var url = 'http://ajaxtesting.somee.com/api/values/';
    // get table
    var tableBody = $('.user-info tbody');

    // get all users
    function getUsers() {
        $.ajax({
            url: url+'getusers',
            type:'GET',
            success: function (response) {
                response.forEach(function (index,i) {
                    var tr =
                        $('<tr>').append(
                        $('<td>').text(i+1),
                        $('<td>').text(index.Id),
                        $('<td>').text(index.username),
                        $('<td>').text(index.password));
                        tr.appendTo(tableBody);
                });
            }
        });
    }


    // login and registration
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
                        window.location.replace("success.html");
                    } else {
                        window.location.replace("error.html");
                    }
                } else if (type === 'registration') {
                    tableBody.html('');
                    $('.reg-success-message').css('display','block');
                    getUsers();
                }
            }
        });
    }

    getUsers();

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
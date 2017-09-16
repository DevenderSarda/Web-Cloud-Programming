function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var xhttp = new XMLHttpRequest();
   // xhttp.onreadystatechange = function() {
     //  return this;
    //};
    xhttp.open("GET", "https://api.github.com/users/" + user, false);
    xhttp.send();

    return xhttp;
}

function showUser(user) {

    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content

    $('.avatar').html('');
    $('.information').html('');
    $('h2').html('');
    $('h2').text(user.login);
    $('.avatar').append('<img src="' + user.avatar_url +'" alt="User Image" style="width:200px;height:175px;">');
    $('.information').append('<div>User Information</div><span style="display: block">User Profile: <a href="'+ user.html_url +'">' + user.html_url + '</a></span><span style="display: block;">subscriptions_url: ' + user.subscriptions_url + '</span>');
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    $('.avatar').html('');
    $('.information').html('');
    $('h2').html('');
    $('h2').html('There is no user '+ username +' on GitHub. Please type the correct username.');
}


$(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});

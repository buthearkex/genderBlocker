$(".profile-picture").hide();

$(".full-name, .connections-name, .title.main-headline").each(function () {
    var fullNameStr = $(this).text();
    var firstNameStr = fullNameStr.substr(0, fullNameStr.indexOf(' ')).charAt(0) + ".";
    var lastNameStr = fullNameStr.substr(fullNameStr.indexOf(' ') + 1);
    var updatedNameStr = firstNameStr + " " + lastNameStr;
    $(this).text(updatedNameStr);
});

$('.name').each(function () {
    var fullNameStr = $(this).text();
    var firstNameStr = fullNameStr.substr(0, fullNameStr.indexOf(' ')).charAt(0) + ".";
    var lastNameStr = fullNameStr.substr(fullNameStr.indexOf(' ') + 1);
    var updatedNameStr = firstNameStr + " " + lastNameStr;

    $(this).children().text(updatedNameStr);
});

$(".browse-map-photo").each(function(){
    $(this).parent().css("height","60px");
    $(this).hide();
});


window.setInterval(function () {
    $('a[href$="name"]').each(function () {
        var fullNameStr = $(this).text();
        var firstNameStr = fullNameStr.substr(0, fullNameStr.indexOf(' ')).charAt(0) + ".";
        var lastNameStr = fullNameStr.substr(fullNameStr.indexOf(' ') + 1);
        var updatedNameStr = firstNameStr + " " + lastNameStr;
        $(this).text(updatedNameStr);
    });

    $('.new-miniprofile-container').each(function () {
        var fullNameStr = $(this).text();
        var firstNameStr = fullNameStr.substr(0, fullNameStr.indexOf(' ')).charAt(0) + ".";
        var lastNameStr = fullNameStr.substr(fullNameStr.indexOf(' ') + 1);
        var updatedNameStr = firstNameStr + " " + lastNameStr;
        //console.log(updatedNameStr);
        $(this).children().children().text(updatedNameStr);
    });

    $(function () {
        if (document.location.href.indexOf('&trk=vsrp_people_sel') > -1) {
            $('.new-miniprofile-container').each(function () {
                var fullNameStr = $(this).text();
                var firstNameStr = fullNameStr.substr(0, fullNameStr.indexOf(' ')).charAt(0) + ".";
                var lastNameStr = fullNameStr.substr(fullNameStr.indexOf(' ') + 1);
                var updatedNameStr = firstNameStr + " " + lastNameStr;
                console.log(updatedNameStr);
                $(this).children().children().text(updatedNameStr);
            });
        }
    });

}, 1000);

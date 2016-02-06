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


$('.discovery-results li').each(function(){
    var back = ["#D0021B","#F5A623","#F8E71C","#4A90E2","#50E3C2","#7ED321","#9013FE"];
    var rand = back[Math.floor(Math.random() * back.length)];
    $(this).css("background-color",rand)
    var link = $(this).first().children();
    console.log(link);
    var letter = link.next().children().first().children().first().text().slice(0,1);
    link.children().first().remove();
    link.append('<p style=" font-size: 40px;padding-top: 20px;text-align: center;color: #FFF;">'+letter+'</p>');

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

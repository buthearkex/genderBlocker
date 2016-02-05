$(".profile-picture").hide();

$(".full-name").each(function () {
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


/*var name = $(".full-name").text();
var first = name.slice(0, name.indexOf(" "));
console.log(first);
var second = name.slice(1, name.indexOf(" "));
console.log(second);
var shortened = first.charAt(0);

$(".full-name").html(shortened + "." + second);*/
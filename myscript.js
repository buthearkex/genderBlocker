$(".profile-picture").hide();

var profileName = $('.full-name').text();
profileName = profileName.substr(0, profileName.indexOf(" "));
var shortProfileName = profileName.charAt(0) + ".";

$('.endorse-v2').hide();
$('#right-rail').hide();

$(".full-name, .connections-name, .title.main-headline, .inbox-item-wonton .item-content.actions-left .participants").each(function () {
	$(this).text(replacedStr = replaceFirstName($(this)));
});

$('.name').each(function () {
    $(this).children().text(replacedStr = replaceFirstName($(this)));
});

$(".browse-map-photo").each(function () {
    $(this).parent().css("height", "60px");
    $(this).hide();
});

$('.discovery-results li').each(function () {
    var back = ["#D0021B", "#F5A623", "#F8E71C", "#4A90E2", "#50E3C2", "#7ED321", "#9013FE", "#B8E986", "#BD10E0"];
    var rand = back[Math.floor(Math.random() * back.length)];
    $(this).css("background-color", rand)
    var link = $(this).first().children();
    console.log(link);
    var letter = link.next().children().first().children().first().text().slice(0, 1);
    link.children().first().remove();
    link.append('<p style=" font-size: 40px;padding-top: 20px;text-align: center;color: #FFF;">' + letter + '</p>');
});

$('.endorse-skills-title').each(function () {
    var fullNameStr = $(this).text();
    var startStr = fullNameStr.substr(0, fullNameStr.indexOf(' '));
    var firstNameStr = fullNameStr.substr(fullNameStr.indexOf(' ') + 1).charAt(0) + ".";
    var remainingStr = fullNameStr.substr(fullNameStr.indexOf(' ') + 2);
    var updatedNameStr = startStr + " " + firstNameStr + " " + remainingStr;
    console.log(updatedNameStr);
    $(this).children().text(updatedNameStr);
});

$(".result.people .result-image img").each(function () {
    if (!$(this).attr("kitten")) {
        $(this).attr("src", "http://clementhamon.com/host/kittens/" + (Math.floor(Math.random() * 14) + 1) + ".jpg")
        $(this).attr("kitten", true);
    }
});

window.setInterval(function () {
    $('a[href$="name"], a[href^="http"][href$="people_cluster"]').each(function () {
        $(this).text(replacedStr = replaceFirstName($(this)));
    });

    console.log(document.getElementById('search-autocomplete-container').innerHTML);

    $('.new-miniprofile-container').each(function () {
        $(this).children().children().text(replacedStr = replaceFirstName($(this)));
    });

	$("[id^=mynetwork-item-]").each(function(){
		$(this).children('img').hide();
		$(this).children('.item-headline').text(replacedStr = replaceFirstName($(this)));
	});

    $(function () {
        if (document.location.href.indexOf('&trk=vsrp_people_sel') > -1) {
            $('.new-miniprofile-container').each(function () {
                var fullNameStr = element.text().trim();
                var firstNameStr = fullNameStr.substr(0, fullNameStr.indexOf(' ')).charAt(0) + ".";
                var lastNameStr = fullNameStr.substr(fullNameStr.indexOf(' ') + 1);
                var updatedNameStr = firstNameStr + " " + lastNameStr;
                console.log(updatedNameStr);
                $(this).children().children().text(updatedNameStr);
            });
        }
    });

    $(".image.member img").each(function () {
        if (!$(this).attr("kitten")) {
            $(this).attr("src", "http://clementhamon.com/host/kittens/" + (Math.floor(Math.random() * 14) + 1) + ".jpg")
            $(this).attr("kitten", true);
        }
    });

    $('.cardstack-container > ul > li > a.connections-photo').each(function () {
        $(this).hide();
    });

    $(".result.people .result-image img").each(function () {
        if (!$(this).attr("kitten")) {
            $(this).attr("src", "http://clementhamon.com/host/kittens/" + (Math.floor(Math.random() * 14) + 1) + ".jpg")
            $(this).attr("kitten", true);
        }
    });

    $('.endorser').each(function(){
        if (!$(this).attr("kitten")) {
            $(this).attr("src", "http://clementhamon.com/host/kittens/" + (Math.floor(Math.random() * 14) + 1) + ".jpg")
            $(this).attr("kitten", true);
        }
    });

}, 50);

function replaceFirstName(element) {
    var fullNameStr = element.text().trim();
    var firstNameStr = fullNameStr.substr(0, fullNameStr.indexOf(' ')).charAt(0) + ".";
    var lastNameStr = fullNameStr.substr(fullNameStr.indexOf(' ') + 1);
    var updatedNameStr = firstNameStr + " " + lastNameStr;
    return updatedNameStr;
};

//replaceFirstNameOnPage();
function replaceFirstNameOnPage() {
	var re = new RegExp(profileName,"g");
	$("body").html($("body").html().replace(re, shortProfileName));
	console.log(profileName);	
};
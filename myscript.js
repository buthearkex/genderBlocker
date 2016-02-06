replaceFirstNameOnPage();

$(".profile-picture").hide();
$('.endorse-v2').hide();

$(".full-name, .connections-name, .title.main-headline").each(function () {
	$(this).text(replacedStr = replaceFirstName($(this)));
});

$('.name').each(function () {
    $(this).children().text(replacedStr = replaceFirstName($(this)));
});

$(".browse-map-photo").each(function(){
    $(this).parent().css("height","60px");
    $(this).hide();
});

$('.endorse-skills-title').each(function(){
	var fullNameStr = $(this).text();
	var startStr = fullNameStr.substr(0,fullNameStr.indexOf(' '));
	var firstNameStr = fullNameStr.substr(fullNameStr.indexOf(' ')+1).charAt(0) + ".";
	var remainingStr = fullNameStr.substr(fullNameStr.indexOf(' ')+2);
	var updatedNameStr = startStr + " " + firstNameStr + " " + remainingStr;
	console.log(updatedNameStr);
	$(this).children().text(updatedNameStr);
});

window.setInterval(function () {
    $('a[href$="name"], a[href^="http"][href$="people_cluster"]').each(function () {
		$(this).text(replacedStr = replaceFirstName($(this)));
    });

    $('.new-miniprofile-container').each(function () {
        $(this).children().children().text(replacedStr = replaceFirstName($(this)));
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


function replaceFirstName(element) {
	var fullNameStr = element.text();
	var firstNameStr = fullNameStr.substr(0,fullNameStr.indexOf(' ')).charAt(0) + ".";
	var lastNameStr = fullNameStr.substr(fullNameStr.indexOf(' ')+1);
	var updatedNameStr = firstNameStr + " " + lastNameStr;
	return updatedNameStr;	
}

function replaceFirstNameOnPage() {
	var profileName = $('.full-name').text();
	profileName = profileName.substr(0, profileName.indexOf(" "));
	var shortProfileName = profileName.charAt(0) + ".";

	var re = new RegExp(profileName,"g");
	$("body").html($("body").html().replace(re, shortProfileName));
	console.log(profileName);	
}

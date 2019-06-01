// Opens accordion automatically if accessed via anchor tag
function openAnchorAccordion() {
    if (window.location.hash) {
        var jQuerytarget = jQuery('body').find(window.location.hash);
        //console.log( jQuerytarget );
        if (jQuerytarget.hasClass('collapse')) {
            var jQuerytargetAccordion = jQuerytarget.find('.collapse');
            console.log( jQuerytargetAccordion );
            jQuerytarget.collapse('show');
        }
    }
}

openAnchorAccordion();
jQuery("body").on("click", "a", openAnchorAccordion);

//Scroll to top of accordion
$('#teamProfiles').on('shown.bs.collapse', function () {
    var panel = $(this).find('.show');

    $('html, body').animate({
        scrollTop: panel.offset().top
    }, 500);

});
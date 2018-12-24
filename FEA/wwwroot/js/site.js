// init controller
var controller = new ScrollMagic.Controller({ globalSceneOptions: { duration: 2000 } });

// build scene
var scene1 = new ScrollMagic.Scene({ triggerElement: "#rangeOfServices" })
    // trigger animation by adding a css class
    .setClassToggle("#service1", "servicesBox1Animate")
    //.addIndicators({ name: "1 - Animate services boxes" })
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({ triggerElement: "#rangeOfServices" })
    // trigger animation by adding a css class
    .setClassToggle("#service2", "servicesBox2Animate")
    .addTo(controller);

var scene3 = new ScrollMagic.Scene({ triggerElement: "#rangeOfServices" })
    // trigger animation by adding a css class
    .setClassToggle("#service3", "servicesBox3Animate")
    .addTo(controller);

var scene4 = new ScrollMagic.Scene({ triggerElement: "#rangeOfServices" })
    // trigger animation by adding a css class
    .setClassToggle("#service4", "servicesBox4Animate")
    .addTo(controller);

var scene5 = new ScrollMagic.Scene({ triggerElement: "#rangeOfServices" })
    // trigger animation by adding a css class
    .setClassToggle("#service5", "servicesBox5Animate")
    .addTo(controller);

var scene6 = new ScrollMagic.Scene({ triggerElement: "#rangeOfServices" })
    // trigger animation by adding a css class
    .setClassToggle("#service6", "servicesBox6Animate")
    .addTo(controller);

var w = window.innerWidth;
var h = window.innerHeight;
var controller2;

function setSlides() {
    // init
    controller2 = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // get all slides
    var slides = document.querySelectorAll(".stickyPanel");

    // create scene for every slide
    for (var i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
            .setPin(slides[i])
            //.addIndicators()
            .addTo(controller2);
    }
}

function destroySlides() {
    controller2.destroy(true);
    //controller2 = null;
}

$(function () {
    w = window.innerWidth;
    h = window.innerHeight;
    if (w >= 1000 && h >= 800) {
        setSlides();
    }
    else {
        destroySlides();
    }

    $(window).resize(function () {
        w = window.innerWidth;
        h = window.innerHeight;
        //disable slide effect on smaller screens
        if (w >= 1000 && h >= 800) {
            destroySlides();
            setSlides();
        }
        else {
            destroySlides();
        }
    });
});

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
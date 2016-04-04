var mn = $(".main-nav");
    mns = "main-nav-scrolled";
	singleNav = $(".singleNav");
    singleNavScrolled = "singleNavScrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
    singleNav.addClass(singleNavScrolled);
  } else {
    mn.removeClass(mns);
    singleNav.removeClass(singleNavScrolled);
  }
});


$("#brandingFilter").click(function(){
	console.log("hello");
    $('html, body').animate({
        scrollTop: $(".filter").offset().top
    }, 500);
    $("#dropdown-menu-branding").toggleClass('expand');
    $("#dropdown-menu-printed").removeClass('expand');
    $("#dropdown-menu-digital").removeClass('expand');
    $("#dropdown-menu-frontEnd").removeClass('expand');
});


$("#printingFilter").click(function(){
    console.log("clicked printed");

    $('html, body').animate({
        scrollTop: $(".filter").offset().top
    }, 500);

    $("#dropdown-menu-branding").removeClass('expand');
    $("#dropdown-menu-printed").toggleClass('expand');
    $("#dropdown-menu-digital").removeClass('expand');
    $("#dropdown-menu-frontEnd").removeClass('expand');
});


$("#digitalFilter").click(function(){
    console.log("clicked digital");

    $('html, body').animate({
        scrollTop: $(".filter").offset().top
    }, 500);

    $("#dropdown-menu-branding").removeClass('expand');
    $("#dropdown-menu-printed").removeClass('expand');
    $("#dropdown-menu-digital").toggleClass('expand');
    $("#dropdown-menu-frontEnd").removeClass('expand');
});

$("#frontEndFilter").click(function(){
	console.log("clicked frontEnd");

    $('html, body').animate({
        scrollTop: $(".filter").offset().top
    }, 500);

    $("#dropdown-menu-branding").removeClass('expand');
    $("#dropdown-menu-printed").removeClass('expand');
    $("#dropdown-menu-digital").removeClass('expand');
    $("#dropdown-menu-frontEnd").toggleClass('expand');
});

// // fix the body 
// $("#fenetreLightbox").click(function(){
//     $('html, body').toggleClass('noscrolling');
// });


// nav function
$("#homeNav").click(function(){
    $('html, body').animate({
        scrollTop: $('header').offset().top
    }, 500);
});

$("#aboutNav").click(function(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500);
});

$("#workNav").click(function(){
    $('html, body').animate({
        scrollTop: $(".filter").offset().top
    }, 500);
});

$("#contactNav").click(function(){
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 500);
});

$("#CrosseDeviceButton").click(function(){
    window.open('http://info.yieldify.com/the-busy-marketers-guide-to-cross-device-optimisation-0?__hssc=159293925.2.1436463757041&__hstc=159293925.8cc96bf573be55d736875c5703e7acc6.1435062940405.1435676660228.1436463757041.6&hsCtaTracking=3b909406-4850-41e5-981a-1e0b73780d1f%7C2d78a888-fb0e-4e7d-98d1-3efb5f77ea59', '_blank');
    console.log("GO TO URL");
});

$("#CrosseDeviceButtonMobile").click(function(){
    window.open('http://info.yieldify.com/the-busy-marketers-guide-to-cross-device-optimisation-0?__hssc=159293925.2.1436463757041&__hstc=159293925.8cc96bf573be55d736875c5703e7acc6.1435062940405.1435676660228.1436463757041.6&hsCtaTracking=3b909406-4850-41e5-981a-1e0b73780d1f%7C2d78a888-fb0e-4e7d-98d1-3efb5f77ea59', '_blank');
    console.log("GO TO URL");
});

$("#LuxuryButton").click(function(){
    window.open('http://info.yieldify.com/the-luxury-ecommerce-blueprint-0?__hssc=159293925.4.1436479439501&__hstc=159293925.7d0d2c581a94a100851c80fd521ae850.1405611140938.1435504368095.1436479439501.17&hsCtaTracking=4f89bdfb-7ffa-4cca-96bc-8ee34d38e3fa%7Caf9bbbff-a044-4754-8331-a60ecb4bf200', '_blank');
});

$("#LuxuryButtonMobile").click(function(){
    window.open('http://info.yieldify.com/the-luxury-ecommerce-blueprint-0?__hssc=159293925.4.1436479439501&__hstc=159293925.7d0d2c581a94a100851c80fd521ae850.1405611140938.1435504368095.1436479439501.17&hsCtaTracking=4f89bdfb-7ffa-4cca-96bc-8ee34d38e3fa%7Caf9bbbff-a044-4754-8331-a60ecb4bf200', '_blank');
});

$("#FashionButton").click(function(){
    window.open('http://info.yieldify.com/a-la-mode-fashion-ecommerce-in-2015-1-0-1?__hssc=159293925.8.1436479439501&__hstc=159293925.7d0d2c581a94a100851c80fd521ae850.1405611140938.1435504368095.1436479439501.17&hsCtaTracking=5bfb8fac-253c-4eb4-9fcc-7192d124cf3b%7Cee10f122-83b9-47c4-8077-e3fa48c7e19f', '_blank');
});

$("#AirplaneModeButton").click(function(){
    window.open('http://airplanemode.eu', '_blank');
});

$("#FashionButtonMobile").click(function(){
    window.open('http://info.yieldify.com/a-la-mode-fashion-ecommerce-in-2015-1-0-1?__hssc=159293925.8.1436479439501&__hstc=159293925.7d0d2c581a94a100851c80fd521ae850.1405611140938.1435504368095.1436479439501.17&hsCtaTracking=5bfb8fac-253c-4eb4-9fcc-7192d124cf3b%7Cee10f122-83b9-47c4-8077-e3fa48c7e19f', '_blank');
});

$("#insuranceButton").click(function(){
    window.open('http://info.yieldify.com/insurance-marketing-the-personalization-portfolio-1-0?__hssc=159293925.11.1436479439501&__hstc=159293925.7d0d2c581a94a100851c80fd521ae850.1405611140938.1435504368095.1436479439501.17&hsCtaTracking=aa5bc712-80ee-4d79-875c-1ce2af393c23%7Cb5b81623-f993-427d-b47e-f3a66dca5d44', '_blank');
});

$("#insuranceButtonMobile").click(function(){
    window.open('http://info.yieldify.com/insurance-marketing-the-personalization-portfolio-1-0?__hssc=159293925.11.1436479439501&__hstc=159293925.7d0d2c581a94a100851c80fd521ae850.1405611140938.1435504368095.1436479439501.17&hsCtaTracking=aa5bc712-80ee-4d79-875c-1ce2af393c23%7Cb5b81623-f993-427d-b47e-f3a66dca5d44', '_blank');
});

$("#travelButton").click(function(){
    window.open('http://info.yieldify.com/the-travel-marketers-guide-to-optimisation-0-0?__hssc=159293925.17.1436479439501&__hstc=159293925.7d0d2c581a94a100851c80fd521ae850.1405611140938.1435504368095.1436479439501.17&hsCtaTracking=c016b84a-618f-4ade-bcda-74a8c07734c4%7Cb9c88f45-9554-4744-a7ab-b9b24dd5f46c', '_blank');
});

$("#travelButtonMobile").click(function(){
    window.open('http://info.yieldify.com/the-travel-marketers-guide-to-optimisation-0-0?__hssc=159293925.17.1436479439501&__hstc=159293925.7d0d2c581a94a100851c80fd521ae850.1405611140938.1435504368095.1436479439501.17&hsCtaTracking=c016b84a-618f-4ade-bcda-74a8c07734c4%7Cb9c88f45-9554-4744-a7ab-b9b24dd5f46c', '_blank');
});

$("#linkedinIcon").click(function(){
    window.open('https://uk.linkedin.com/pub/gaia-di-gregorio/44/660/bb9', '_blank');
});

$("#airplanemode").click(function(){
    window.open('http://airplanemode.eu/', '_blank');
});


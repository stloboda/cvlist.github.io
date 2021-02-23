$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .header-nav').toggleClass('active');
        $('body').toggleClass('lock')
    })
})

$('.nav-link').click(function(event) {
    if ($('.header-nav').css('display', 'none'));
    ($('.header-burger, .header-nav').toggleClass('active').css('display', 'block'))
})






// $(document).ready(function() {
//     $(".li-menu").click(function() {
//         $(".menu").show();
//         $(".jq").show();
//     });
// });
// $(".jq").click(function() {
//     $(".menu").hide();
//     $(".jq").hide();
// });
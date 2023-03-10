$('.hamburger').click(()=>{
    $('nav').toggleClass('active') 
})
$('.close-btn').click(()=>{
    $('.model').toggleClass('hide') 
    $('body').css('overflow','initial')
})
$('.btn-cta').click(()=>{
    $('body').css('overflow','hidden')
    $('.model').toggleClass('hide') 
})

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
document.addEventListener('scroll',()=>{
if(isScrolledIntoView(document.getElementsByClassName('cards'))){
    $('.cards').addClass('animate')
}
})
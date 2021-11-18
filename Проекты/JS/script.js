


$(document).ready(function () {
    $('p.big a.nav-link').click(function() {
        $('p.big a.nav-link').each(function () {
            $(this).removeClass('active')
        })  
        $(this).addClass('active')      
    })
})
$('#telephon').inputmask("+7(999)-999-99-99");  //static mask
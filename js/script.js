function ButtonClicked(){
    alert('Button was clicked');
}

$(function(){
    var pages = ['index', 'about', 'contact'];
    var pathname = window.location.pathname;  // get the URL

    $('.nav-link').each(function(i){
        if(pathname.includes(pages[i])){
            $(this).addClass('active');
            $(this).attr('aria-current', 'page');
        }else if(this.className.includes('active')){
            $(this).removeClass('active');
        }
    });
})

// Filtro em JS
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'todos') {
            $('.noticia-box').show('1000');
        }
        else{
            $('.noticia-box').not('.' + value).hide('1000');
            $('.noticia-box').filter('.' + value).show('1000');
        }
    });
    // Ativar o botão quando clicar
    $('.filter-item').click(function () { 
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

// Background do header muda quando scroll desce
// N quis pegar com o "document.querySelector("header" antes, tive q usar inline
 window.addEventListener("scroll",()=>{
    (document.querySelector("header")).classList.toggle("shadow", window.scrollY > 0);
 });
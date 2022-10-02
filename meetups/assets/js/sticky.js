document.querySelector('.mobile-trigger-box').onclick = function(){
    let menu = document.querySelector('menu');
    if (menu.classList.contains('opened')){
        menu.classList.remove('opened');
    }else{
        menu.classList.add('opened');
    }
}
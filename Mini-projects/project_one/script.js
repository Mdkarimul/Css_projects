let menutoggle = document.querySelector('.menu-toggle');
let navigation = document.querySelector('.navigation');

menutoggle.onclick = function(){
    navigation.classList.toggle('active');
}
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');
let anan = document.querySelector('.anan');

window.onscroll = function() {
    let value = window.scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 2 + 'px';
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value * 0.7 + 'px';
    river.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 2 + 'px';
    anan.style.fontSize = value + 'px';
    if(scrollY >= 100){
        anan.style.fontSize = 100 + 'px';
        anan.style.position = 'fixed';
        if(scrollY >= 450){
            anan.style.display= 'none';
        }else{
            anan.style.display= 'block';
        }
        if(scrollY >= 279){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';

        }
    }
}
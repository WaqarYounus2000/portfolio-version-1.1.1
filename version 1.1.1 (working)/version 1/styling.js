let menuID = document.getElementById('menuID');
let hidemenuID = document.getElementById('hidemenuID');
menuID.onclick = () =>{
    let aside1ID = document.getElementById('aside1ID');
    let aside2ID = document.getElementById('aside2ID');
    aside2ID.style.display='none'
    aside1ID.style.transform = 'translateX(0%)'
    
}

hidemenuID.onclick = () =>{
    let aside1ID = document.getElementById('aside1ID');
    let aside2ID = document.getElementById('aside2ID');
    aside2ID.style.display='block'
    aside1ID.style.transform = 'translateX(-120%)'

}


var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
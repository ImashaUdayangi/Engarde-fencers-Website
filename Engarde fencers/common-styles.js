const navbar=document.querySelector('.nav')
const togBtn = document.querySelector('.tog')
const togBtnIcon = document.querySelector('.tog i')
const dropDownMenu = document.querySelector('.dropDown')

window.addEventListener('scroll',()=>{
    if(this.scrollY>=100){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

togBtn.onclick=function(){
    dropDownMenu.classList.toggle('open')
    const isOpen=dropDownMenu.classList.contains('open')
    
    togBtnIcon.classList= isOpen
    ? 'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

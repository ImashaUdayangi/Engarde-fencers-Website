//image previewing with descriptions
var preview = document.getElementById("preview");
var previewImg = document.getElementById("preview-img");
var description = document.getElementById("description");
let gallery = document.querySelectorAll(".gallery > img");
const imagDescriptions = {
    img1: "Throughout the 16th and 17th centuries, staged fencing matches were very common in England. This image from Leiden University in the Netherlands depicts a fencing class from 1610. Also, it was a chic marital art. The Society of Masters received a monopoly on managing fencing schools in London from Henry VIII in 1540. Schools were run in and around Blackfriars by a number of eminent fencing experts from the late 16th century, including Vincentio Saviolo, Rocco Bonetti, and William Joyner (then the main theatre district of London).",
    img2: "Epee, foil, and sabre are the three types of weapons used in fencing. Although all weapons generally follow the same fundamental set of rules, switching between an epee, foil, or sabre is not too difficult. The speed, length, and style of a fencing match are all affected by the specific subset of rules that apply to each weapon.",
    img3: "The FIE first organized an international fencing championship in Paris, France in 1921. The competition in its early years was named the European Championships (Championnats d'Europe), and the initial participants were members of the fencing federations of the FIE. From the 2020 Summer Olympics, all 12 fencing events were held, which means no World Championships are held in Olympic years. These World Fencing Championships are usually referred to as Senior World Fencing Championships because the FIE also runs three other Championships.",
    img4: "Italian fencer Edoardo Mangiarotti lived from 7 April 1919 until 25 May 2012. More than any other fencer in the history of the sport, he amassed a total of 39 Olympic and World championship victories. From 1936 to 1960, he won one solo gold medal, five team gold medals, five silver medals, and two bronze medals in the Olympics.",
    img5: "The day of donning 3-inch-thick plate mail is long gone. Nowadays, fencing armour is made of thick cotton or even Kevlar, a bulletproof material. (Higher levels necessitate the use of Kevlar.) Fencing is a highly safe and enjoyable sport because of the armour, which provides a significant lot of protection",
};

//Showing the discription about the picture when hover it
gallery.forEach(function (item) {
    item.addEventListener("mouseover", function () {
        preview.style.display = "flex";
        previewImg.src = item.src;
        description.innerHTML = imagDescriptions[item.id];
    });
});
//closing funtion about picture preview
function closePreview() {
    preview.style.display = "none";
}

var toTopButton = document.getElementById("top-btn");

window.onscroll = function () { showButton() };

function showButton() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
//Navigation bar
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

//when open the one windowed tab

togBtn.onclick=function(){
    dropDownMenu.classList.toggle('open')
    
    const isOpen=dropDownMenu.classList.contains('open')

    togBtnIcon.classList= isOpen
    ? 'fa-solid fa-xmark'
    :'fa-solid fa-bars'
    
}

let mybutton = document.getElementById("myBtn");

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//getting the maroon colour by clicking the maroon square
const body = document.body;
document.getElementById("bgmaroon").addEventListener("click", function(){
    body.style.backgroundColor = "maroon";
});
//getting the gray colour by clicking the gray square
document.getElementById("bggrey").addEventListener("click", function(){
    body.style.backgroundColor = "gray";
});
//getting the teal colour by clicking the teal square
document.getElementById("bgteal").addEventListener("click", function(){
    body.style.backgroundColor = "teal";
});
//getting the random colour by clicking the white square
document.getElementById("bgrandom").addEventListener("click", function(){
    const randomColor = generateRandomColor();
    body.style.backgroundColor = randomColor;
});
//generating random colour
function generateRandomColor() {
    const Chars = '0123456789ABCDEF';
    let colorCode = '#';

    for (let i = 0; i < 6; i++) {
        colorCode += Chars[Math.floor(Math.random() * 16)];
    }

    return colorCode;
}
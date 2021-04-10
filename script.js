var menuItem = document.getElementById('menu-item');
menuItem.style.maxHeight = "0px";


function menuToggle(){
    if(menuItem.style.maxHeight=="0px"){
        menuItem.style.maxHeight = "200px"
    }else{
        menuItem.style.maxHeight="0px"
    }
}
// code for product id carousel
// var productImg = document.getElementById('product-img')
// var smallImg = document.getElementsByClassName('small-img')
// smallImg[0].onclick = function(){
//     productImg.src = smallImg[0].src
// }
// smallImg[1].onclick = function(){
//     productImg.src = smallImg[1].src
// }
// smallImg[2].onclick = function(){
//     productImg.src = smallImg[2].src
// }
// smallImg[3].onclick = function(){
//     productImg.src = smallImg[3].src
// }

// code for form seperation 
var loginForm = document.getElementById('loginForm');
var registerForm = document.getElementById('regForm');
var indicator = document.getElementById('indicator');

function register(){
    registerForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";

}
function login(){
    registerForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";

}

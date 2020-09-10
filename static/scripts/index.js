//Scroll-Indicator.

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//Animate images

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3 / 4);
  target.forEach(function(element){
    if(windowTop > element.offsetTop){
        element.classList.add(animationClass);
    } else{
      element.classList.remove(animationClass);
      
    }
  })
}

window.addEventListener('scroll', function(){
  animeScroll();
})


 //destravar.

/* document.getElementById('nav').onclick = function(){

setTimeout(function(){
  document.getElementById("section").style.marginTop = "0";
    console.log("sim!")

},1000);

} */







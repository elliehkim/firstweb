const homeNav = document.querySelector(".home-nav");
const aboutNav = document.querySelector(".about-nav");
const contactNav = document.querySelector(".contact-nav");


homeNav.addEventListener('click',function(){
    document.querySelector(".container").scrollIntoView({behavior:"smooth", block:"start"});
});

aboutNav.addEventListener('click',function(){
    document.querySelector(".about").scrollIntoView({behavior:"smooth", block:"start"});
});

contactNav.addEventListener('click',function(){
    document.querySelector(".contact").scrollIntoView({behavior:"smooth", block:"start"});
});



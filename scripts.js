document.querySelector(".fbLogo").addEventListener("click", function(){
    window.location.href = "https://www.facebook.com/profile.php?id=61553308209404";
});
document.querySelector(".igLogo").addEventListener("click", function(){
    window.location.href = "https://www.instagram.com/fizio_luma/";
});

window.addEventListener("scroll",function(){
    const navBarOpacity = document.querySelector(".navBar");
    const maxScroll =200;

    const opacity = Math.min(1, window.scrollY / maxScroll + 0.4);

    navBarOpacity.style.backgroundColor = `rgba(241,233,222, ${opacity - 0.1})`;


});
document.querySelector(".menuIcone").addEventListener("click", function(){
    const screenDarknes = document.querySelector(".overlay");
    const menuShown = document.querySelector(".navButtons");
    const numMenuShown = document.querySelector(".phoneNumberMenu")
    

    if (menuShown.style.display === "none" || menuShown.style.display === ""){
        menuShown.style.display = "flex";
        screenDarknes.style.display = "block";
        numMenuShown.style.display = "block";
       

    }
    else{
        menuShown.style.display = "none";
        screenDarknes.style.display = "none";
        numMenuShown.style.display = "none";
    }
})
window.onload = function() {
    document.body.style.visibility = 'visible';
  };
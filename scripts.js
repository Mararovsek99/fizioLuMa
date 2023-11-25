document.querySelector(".fbLogo").addEventListener("click", function(){
    window.location.href = "https://www.facebook.com/profile.php?id=61553308209404";
});
document.querySelector(".igLogo").addEventListener("click", function(){
    window.location.href = "https://www.instagram.com/fizio_luma/";
});

window.addEventListener("scroll",function(){
    const navBarOpacity = document.querySelector(".navBar");
    const maxScroll =100;

    const opacity = Math.min(1, maxScroll / window.scrollY);

    navBarOpacity.style.backgroundColor = `rgba(241,233,222, ${opacity})`;


});
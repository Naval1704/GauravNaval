// Starting Animation Effect
window.addEventListener("load", function() {
    const loadingAnimation = document.querySelector(".loading-animation");
    loadingAnimation.style.opacity = 1;
    setTimeout(function() {
        loadingAnimation.style.display = "none";
    }, 3500); // Adjust the delay as per your preference
});  

// Background body Cursor effect
document.addEventListener('mousemove', function(event) {
    var cursorShadow = document.querySelector('.cursor-shadow');
    var radius = 400;
    var color = '#211f31';
    var shadowEffect = '0 0' + radius + 'px ' + color;
    cursorShadow.style.top = event.pageY + 'px';
    cursorShadow.style.left = event.pageX + 'px';
    // cursorShadow.style.boxShadow = shadowEffect;
});

// Toggle mobile menu

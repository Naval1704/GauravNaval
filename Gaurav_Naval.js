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
  var shadowEffect = '0 0 ' + radius + 'px ' + color;

  var cursorX = event.clientX;
  var cursorY = event.clientY;

  // Calculate the adjusted top and left positions based on the cursor position and radius
  var adjustedTop = cursorY - radius / 40;
  var adjustedLeft = cursorX - radius / 40;

  cursorShadow.style.top = adjustedTop + 'px';
  cursorShadow.style.left = adjustedLeft + 'px';
  // cursorShadow.style.boxShadow = shadowEffect;
});



// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  // Function to close the mobile menu
  function closeMobileMenu() {
    menuToggle.checked = false;
    mobileMenu.style.right = '-100%';
  }

  // Event listener for menu toggle change
  menuToggle.addEventListener('change', function() {
    if (menuToggle.checked) {
      mobileMenu.style.right = '0';
    } else {
      mobileMenu.style.right = '-100%';
    }
  });

  // Event listener for clicking on a menu item
  mobileMenu.addEventListener('click', function() {
    closeMobileMenu();
  });

  // Event listener for scrolling
  window.addEventListener('scroll', function() {
    closeMobileMenu();
  });

});

// Front page Intro section

// Variables to store the previous scroll position and scroll direction
window.addEventListener('scroll', function() {
  var header = document.getElementById('main-header');
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// For sending emails 
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
}

function validateAndSubmit() {
  const name = document.querySelector('input[name="Name"]');
  const email = document.querySelector('input[name="E-Mail"]');
  const contact = document.querySelector('input[name="Contact"]');
  const city = document.querySelector('input[name="city"]');
  const message = document.querySelector('textarea[name="Message"]');

  if (name.value === '' || email.value === '' || contact.value === '' || city.value === '' || message.value === '') {
      alert('Please fill in all the required fields.');
  } else if (!isValidEmail(email.value)) {
      alert('Please enter a valid email address.');
  } else if (!isValidPhoneNumber(contact.value)) {
      alert('Please enter a valid contact number.');
  } else {
      $.ajax({
          url:"https://api.apispreadsheets.com/data/RDpqKaLPpO4q9vY0/",
          type:"post",
          data:$("#myForm").serializeArray(),
          success: function(){
              alert("Your message sent succesfully :)")
              document.getElementById('myForm').reset();
          },
          error: function(){
              alert("There was an error :(")
          }
      });
  }
}
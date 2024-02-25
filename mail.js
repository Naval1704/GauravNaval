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
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const contact = document.querySelector('input[name="contact"]');
    const city = document.querySelector('input[name="city"]');
    const message = document.querySelector('textarea[name="message"]');
  
    if (name.value === '' || email.value === '' || contact.value === '' || city.value === '' || message.value === '') {
        alert('Please fill in all the required fields.');
    } else if (!isValidEmail(email.value)) {
        alert('Please enter a valid email address.');
    } else if (!isValidPhoneNumber(contact.value)) {
        alert('Please enter a valid contact number.');
    } else {
        $.ajax({
            url:"https://api.apispreadsheets.com/data/vR6CJ8ZPJO5xZ9qx/",
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
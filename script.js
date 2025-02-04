document.addEventListener("DOMContentLoaded", function () {
    const bigName = document.querySelector(".big-name");
    const profilePhoto = document.querySelector(".profile-photo");
  
    // Add a glow animation to the big name
    bigName.style.animation = "glow 2s infinite alternate";
  
    // Removed blur effect code
  });
profilePhoto.classList.add("blur-effect");

// Remove blur effect on hover
profilePhoto.addEventListener("mouseenter", function () {
  profilePhoto.classList.remove("blur-effect");
});

profilePhoto.addEventListener("mouseleave", function () {
  profilePhoto.classList.add("blur-effect");
});
document.addEventListener("DOMContentLoaded", function () {
    const hireMeButton = document.getElementById("hireMeButton");
  
    // Add click event to the button
    hireMeButton.addEventListener("click", function () {
      // Option 1: Open an email client
      window.location.href = "mailto:youremail@example.com?subject=Hire%20Me&body=Hello%20[Your%20Name],%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.";
  
      // Option 2: Display a message (uncomment below if you prefer this)
      // alert("Thank you for considering me! Please email me at youremail@example.com.");
    });
  });
  window.addEventListener("resize", function() {
    console.log("Window resized to:", window.innerWidth);
  });
  document.addEventListener("click", function(event) {
    console.log("Mouse Click Detected");
  });
  
  document.addEventListener("touchstart", function(event) {
    console.log("Touch Detected on Mobile");
  });
    
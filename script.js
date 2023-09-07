const header = document.querySelector(".header");

const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".nav");

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  skipBtn: false,
  responsive: {
    480: {
      dots: false, // dots enabled 1280px and up
    },
  },
});

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  header.toggleAttribute("data-overlay");
});

// email validation
function displayErrorMessage(message) {
  var errorDiv = document.getElementById("error-message");
  errorDiv.textContent = message;
  errorDiv.style.color = "red";
  errorDiv.style.marginInline = "auto";
  errorDiv.style.marginTop = "-3rem";
  errorDiv.style.fontSize = "1.5rem";
}

function displayValidMessage(message) {
  var errorDiv = document.getElementById("error-message");
  errorDiv.textContent = message;
  errorDiv.style.color = "green";
  errorDiv.style.marginInline = "auto";
  errorDiv.style.marginTop = "-3rem";
  errorDiv.style.fontSize = "1.5rem";
}

function validateEmail(event, email) {
  event.preventDefault();

  var emailPattern =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (email.value.match(emailPattern)) {
    displayValidMessage("Valid email");

    return true;
  } else {
    displayErrorMessage("Please insert a valid email");
    return false;
  }
}

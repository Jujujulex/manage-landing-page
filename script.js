const header = document.querySelector(".header");

const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".nav");

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,

  arrows: false,
  skipBtn: false,
  responsive: {
    200: {
      dots: true,
      slidesToShow: 1,
      centerMode: true,
    },
    300: {
      dots: true,
      slidesToShow: 1,
      centerMode: false,
    },
    801: {
      slidesToShow: 3,
      dots: false,
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
  errorDiv.style.marginTop = "1rem";
  errorDiv.style.fontSize = "1.5rem";
  errorDiv.style.textAlign = "center";
}

function displayValidMessage(message) {
  var errorDiv = document.getElementById("error-message");
  errorDiv.textContent = message;
  errorDiv.style.color = "green";
  errorDiv.style.marginInline = "auto";
  errorDiv.style.marginTop = "1rem";
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

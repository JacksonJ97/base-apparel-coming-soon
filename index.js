const emailInputElement = document.getElementById("email");
const errorIcon = document.querySelector(".error-icon");
const errorMessageDiv = document.querySelector(".error-message");
const submitBtn = document.getElementById("submit");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener("click", function (e) {
  if (!isValidEmail(emailInputElement.value)) {
    e.preventDefault();
    emailInputElement.style.border = "1px solid hsl(0, 93%, 68%)";
    errorIcon.style.display = "block";
    errorMessageDiv.textContent = "Please provide a valid email";
  } else {
    emailInputElement.style.border = "1px solid hsl(0, 36%, 70%)";
    errorIcon.style.display = "none";
    errorMessageDiv.textContent = "";
  }
});

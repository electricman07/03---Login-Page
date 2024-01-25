const emailEl = document.querySelector("#email");
const usernameEl = document.querySelector("#username");
const passwordEl = document.querySelector("#password");
const terms = document.querySelector("#terms");
const btnLogin = document.querySelector(".btn-login");
const btnReset = document.querySelector(".btn-reset");
const form = document.querySelector(".form");

//  add event listener to submit
form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();
});

// check if form values are completed
const isRequired = (value) => (value === "" ? false : true);

//  checks to see if value is not between certain values
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

// check if password is strong enough
const isPasswordSecure = (password) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.text(password);
};

// show error messages if not entered correctly
const showError = (input, message) => {
  // get the form field element
  const formField = input.parentElement;

  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  //show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

// show success
const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

// validate the username field
const checkUsername = () => {
  let valid = false;
  const min = 3;
  const max = 25;
  const username = usernameEl.value.trim();

  if (!isRequired(username)) {
    showError(usernameEl, "Username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameEl,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};

//Check the email field
const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
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
  const username = username.value.trim();

  if (!isRequired(username)) {
    showError(username, "Username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      username,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(username);
    valid = true;
  }
  return valid;
};

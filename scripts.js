const name = document.querySelector("#name");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const terms = document.querySelector("#terms");
const btnLogin = document.querySelector(".btn-login");
const btnReset = document.querySelector(".btn-reset");

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

import toast from "react-hot-toast";

// Validate login page username
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  return errors;
};

// Validate password page password
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
};

// Validate reset password (confirm pasword match when reentered)
export async function resetPwdValidation(values) {
  const errors = passwordVerify({}, values);
  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error("Password not mathc!");
  }
  return errors;
};

// validate register form
export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
};

// validate profile page
export async function profileValidation(values) {
  const errors = emailVerify({}, values);
  return errors;
};

/**@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/**@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

// Validate username
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }

  return error;
};

// Validate password
function passwordVerify(error = {}, values) {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (!values.password) {
    error.password = toast.error("Password is Required...!");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Invalid Password...!");
  } else if (values.password.length < 8) {
    error.password = toast.error("Password does not match.");
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error("Require specialCharcter.");
  }

  return error;
};

// validate username
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }

  return error;
};

//  validate useremail
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email Required...!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong Email...!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address...!");
  }

  return error;
};

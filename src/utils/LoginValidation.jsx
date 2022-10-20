export const validate = (fieldName, value, stateObj) => {
  let error = '';
  switch (fieldName) {
    case 'email':
      if (!value) {
        error = 'Email address is required';
      } else if (!/\S+\w*@gmail\.+com\b/.test(value)) {
        error = 'Email address is invalid';
      }
      break;

    case 'password':
      if (!value) {
        error = 'Password is required';
      } else if (value.length < 6) {
        error = 'Password must be 6 or more characters';
      } else if (
        stateObj.confirmPassword &&
        value !== stateObj.confirmPassword
      ) {
        error = 'Password and Confirm Password does not match';
      }
      break;

    case 'confirmPassword':
      if (!value) {
        error = 'Confirm password is required';
      } else if (stateObj.password && value !== stateObj.password) {
        error = 'Password and Confirm Password does not match';
      }
      break;

    default:
      if (!value) {
        error = 'Username field is required';
      }
  }
  return error;
};

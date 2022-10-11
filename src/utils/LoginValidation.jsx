export const validate = (fieldName, value) => {
  let error = '';
  switch (fieldName) {
    case 'email':
      if (!value) {
        error = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'Email address is invalid';
      }
      break;

    case 'password':
      if (!value) {
        error = 'Password is required';
      } else if (value.length < 6) {
        error = 'Password must be 6 or more characters';
      }
      break;

    default:
      if (!value) {
        error = 'Username field is required';
      }
  }
  return error;
};

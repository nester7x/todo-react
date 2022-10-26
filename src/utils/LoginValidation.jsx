import { isFirstSymbol, isValidSymbols } from './EmailCheck';
import { isAllCases, isNumbers } from './PasswordCheck';

export const validate = (fieldName, value, stateObj) => {
  const error = [];
  switch (fieldName) {
    case 'email':
      if (!value) {
        error.push('Email address is required');
      } else {
        if (!isFirstSymbol(value)) {
          error.push('First symbol must be a letter');
        }
        if (!isValidSymbols(value)) {
          error.push('Invalid email(example: test1.2kek-lol@gmail.com)');
        }
      }
      break;

    case 'password':
      if (!value) {
        error.push('Password is required');
      } else {
        if (value.length < 6) {
          error.push('Password must be 6 or more characters');
        }
        if (!isAllCases(value) || !isNumbers(value)) {
          error.push(
            'Password must contains numbers, lowercase and uppercase letters'
          );
        }
      }
      break;

    case 'confirmPassword':
      if (!value) {
        error.push('Confirm password is required');
      } else if (stateObj.password && value !== stateObj.password) {
        error.push('Password and Confirm Password does not match');
      }
      break;

    default:
      if (!value || !value.trim()) {
        error.push('Username field is required');
      }
  }
  return error.join('. ');
};

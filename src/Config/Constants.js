export let ToastError = message => {
  return {
    type: 'error',
    position: 'bottom',
    text1: message,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 0,
    bottomOffset: 30,
    onShow: () => {},
    onHide: () => {},
  };
};
export let ToastSuccess = message => {
  return {
    type: 'success',
    position: 'bottom',
    text1: message,
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 0,
    bottomOffset: 30,
    onShow: () => {},
    onHide: () => {},
  };
};

export const emailValidityCheck = email => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export const isPasswordAlphaNumeric = password => {
  if (/(?=.*?[A-Za-z])(?=.*\d)/.test(password)) {
    return true;
  }
  return false;
};

export const isPasswordLengthCorrect = password => {
  if (password.length > 5) {
    return true;
  }
  return false;
};

export const fonts = {
  Black: 'Inter-Black',
  Bold: 'Inter-Bold',
  ExtraBold: 'Inter-ExtraBold',
  ExtraLight: 'Inter-ExtraLight',
  Light: 'Inter-Light',
  Medium: 'Inter-Medium',
  Regular: 'Inter-Regular',
  SemiBold: 'Inter-SemiBold',
  RobotoBold: 'Roboto-Bold',
  Thin: 'Inter-Thin',
};

export const phoneNumberValidityCheck = number => {
  if (number.length >= 7 && number.length <= 14) {
    return true;
  }
  return false;
};

export const displayConsole = (key, value) => {
  console.log(`${key}`, value ? value : '');
};

export function showDistance(x1, y1, x2, y2) {
  var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

  return (distance / 0.62137).toFixed(2);
}

export function numberWithCommas(x) {
  return `$${x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

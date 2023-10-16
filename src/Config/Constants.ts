import {ToastShowParams} from 'react-native-toast-message';

export let ToastError = (message: string) => {
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
  } as ToastShowParams;
};
export let ToastSuccess = (message: string) => {
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
  } as ToastShowParams;
};

export const emailValidityCheck = (email: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export const isPasswordAlphaNumeric = (password: string) => {
  if (/(?=.*?[A-Za-z])(?=.*\d)/.test(password)) {
    return true;
  }
  return false;
};

export const isPasswordLengthCorrect = (password: string | any[]) => {
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

export const phoneNumberValidityCheck = (number: string | any[]) => {
  if (number.length >= 7 && number.length <= 14) {
    return true;
  }
  return false;
};

export const displayConsole = (key: any, value: any) => {
  console.log(`${key}`, value ? value : '');
};

export function showDistance(x1: number, y1: number, x2: number, y2: number) {
  var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

  return (distance / 0.62137).toFixed(2);
}

export function numberWithCommas(x: {toString: () => string}) {
  return `$${x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

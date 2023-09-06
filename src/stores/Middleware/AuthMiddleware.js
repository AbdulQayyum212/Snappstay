import React, {Component} from 'react';
import Toast from 'react-native-toast-message';
import {ApiCaller} from '../../config';
import {baseUrl} from '../../config/ApiCaller';
import {ToastError, ToastSuccess} from '../../config/Constants';
import {LoaderAction} from '../Actions/LoaderAction';

export class AuthMiddleware extends Component {
  static Register({fname, lname, email, phone, password}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        let payload = {
          fname,
          lname,
          email,
          phone,
          password,
        };
        try {
          dispatch(LoaderAction.LoaderTrue());
          console.log('regitser====>', payload);
          let response = await ApiCaller.Post('', payload);

          if (response?.status == 200) {
            dispatch(LoaderAction.LoaderFalse());
            // if (isSocialRegister == true) {
            //   dispatch(AuthAction.Signin(response?.data?.data));
            // }
            resolve(response?.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(response);
            console.log('REG RES:', response);
            Toast.show(
              ToastError(
                response.data?.message ?? `Error Code: ${response?.status}`,
              ),
            );
          }
        } catch (error) {
          console.log('catch google', error.message);
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          // Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static Get(token) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderTrue());
          const BearerHeaders = ApiCaller.BearerHeaders(token);

          let response = await ApiCaller.Get(
            ``,
            BearerHeaders,
            console.log('', response),
          );
          if (response?.data.statusCode == 200) {
            // Toast.show(ToastSuccess('Chat Successfully'));
            dispatch(LoaderAction.LoaderFalse());
            resolve(response?.data);
            // callback(response.data.data);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }

  static Post({body, token, callback}) {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          dispatch(LoaderAction.LoaderFalse());
          const BearerHeaders = ApiCaller.BearerHeaders(token);
          let response = await ApiCaller.Post('', body, BearerHeaders);
          console.log('Res ===>', response);
          if (response?.data.statusCode == 200) {
            dispatch(LoaderAction.LoaderFalse());
            callback(response.data);
            // resolve(true);
          } else {
            dispatch(LoaderAction.LoaderFalse());
            reject(false);
            Toast.show(ToastError(response.data.message));
          }
        } catch (error) {
          dispatch(LoaderAction.LoaderFalse());
          reject(false);
          Toast.show(ToastError(error.message));
        }
      });
    };
  }
}
export default AuthMiddleware;

import Cookies from 'js-cookie';
import { redirect } from 'react-router-dom';

export const authHome = (): null => {
  const access_token = Cookies.get('Bearer');
  if (!access_token) {
    throw redirect('/login');
  }
  return null;
};

export const authLogin = (): null => {
  const access_token = Cookies.get('Bearer');
  if (access_token) {
    throw redirect('/');
  }
  return null;
};

import Cookies from 'js-cookie';
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Cookies.remove('Bearer');
    navigate('/login');
  }, []);

  return <div></div>;
};

export default Logout;

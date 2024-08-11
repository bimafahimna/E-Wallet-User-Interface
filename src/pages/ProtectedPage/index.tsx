import Cookies from 'js-cookie';
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = Cookies.get('Bearer');
    if (access_token) {
      navigate('/dashboard');
    }
  });

  return <div></div>;
};

export default ProtectedPage;

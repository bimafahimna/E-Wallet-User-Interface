import React, { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  children?: ReactNode;
}

const Header = styled.header`
  font-size: 2rem;
  font-weight: 600;
  color: #4d47c3;
  line-height: 3rem;
  margin: 3.1rem 0 0 4.2rem;
`;

const BasePage: FC<Props> = () => {
  return (
    <div>
      <Header>
        <p style={{ margin: 0 }}>Sea Wallet</p>
      </Header>
      <Outlet />
    </div>
  );
};

export default BasePage;

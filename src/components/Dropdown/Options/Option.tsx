import React, { FC, ReactNode } from 'react';
import style from './styles';

interface Props {
  children?: ReactNode;
  options: string[];
}

const Options: FC<Props> = ({ options }) => {
  return (
    <div className={style.option}>
      {options.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Options;

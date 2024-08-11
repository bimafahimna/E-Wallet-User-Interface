import React, { FC, ReactNode, useState } from 'react';
import clsx from 'clsx';
import style from './styles';
import Options from './Options';

interface Props {
  children?: ReactNode;
  label: string;
  options: string[];
}

const Dropdown: FC<Props> = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={style.dropdown}>
      <button
        className={clsx({ [style.dropdownIsOpen]: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </button>
      {isOpen && <Options options={options} />}
    </div>
  );
};

export default Dropdown;

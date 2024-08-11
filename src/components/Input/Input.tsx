import React, { FC, ReactNode, useState } from 'react';
import styles from './styles';
import clsx from 'clsx';
import { ShowPass } from 'src/assets/icon';

interface Props {
  type: 'password' | 'email' | 'text';
  name?: string;
  placeholder?: string;
  children?: ReactNode;
  minLength?: number;
  className?: ReactNode;
  invalidMsg?: string;
  isRequired?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: FC<Props> = ({
  type,
  placeholder,
  name,
  minLength,
  className,
  invalidMsg,
  isRequired,
  onChange,
  value,
}) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);

  name = name !== undefined ? name : type;

  const errorMsg: JSX.Element = <p className={styles.invalidMsg}>{invalidMsg}</p>;

  const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(!event.target.validity.valid);
  };

  const handleOnFocus = () => {
    setIsError(false);
  };

  const showPass = () => {
    setIsPassVisible(!isPassVisible);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={clsx(styles.input, className, { [styles.isInvalid]: isError })}
        type={type !== 'password' ? type : isPassVisible ? 'text' : 'password'}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        placeholder={placeholder}
        minLength={minLength}
        required={isRequired}
      />
      {type === 'password' && (
        <button type="button" className={styles.showPassBtn} onClick={showPass}>
          <ShowPass width={19.8} />
        </button>
      )}
      {isError && errorMsg}
    </div>
  );
};

export default Input;

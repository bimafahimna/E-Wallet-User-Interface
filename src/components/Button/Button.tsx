import React, { CSSProperties, FC, ReactNode } from 'react';
import styles from './styles';
import clsx from 'clsx';

interface Props {
  disabled?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
  id?: string;
  form?: string;
  type: 'button' | 'submit';
}

const Button: FC<Props> = (props) => {
  const { disabled, children, id, form, style, type } = props;

  // const onClick = () => {
  //   return alert("You've clicked the button");
  // };
  return (
    <>
      <button
        type={type}
        className={clsx(styles.btn, { [styles.disabled]: disabled })}
        // onClick={onClick}
        id={id}
        form={form}
        style={style}
      >
        {children}
      </button>
    </>
  );
};

export default Button;

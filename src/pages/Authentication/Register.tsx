import React, { FC, FormEvent, ReactNode, useState } from 'react';
import { OtherPeeps } from 'src/assets/image';
import styles from './styles/authentication.module.css';
import Input from 'src/components/Input';
import Button from '../../components/Button';
import { Facebook, Apple, Google } from 'src/assets/icon';
import StyledLink from './StyledLink';
import { useFetchPost } from 'src/hooks';
import { useNavigate } from 'react-router-dom';
import PopUp from 'src/components/PopUp';

type TInput = React.ComponentProps<typeof Input>;

interface RegisterFormState {
  email: string;
  full_name: string;
  password: string;
  username: string;
  confirm_password: string;
  errors: {
    email?: string;
    fullname?: string;
    password?: string;
    confirmPassword?: string;
  };
}
interface RegistRes {
  message: string;
  data: {
    username: string;
    email: string;
    full_name: string;
    wallet_id: number;
    wallet_number: string;
  };
}
type RegistReq = Omit<RegisterFormState, 'errors' | 'confirmPassword'>;

const Register: FC = () => {
  const navigate = useNavigate();
  const formId = 'register-form';
  const [formData, setFormData] = useState<RegisterFormState>({
    email: '',
    full_name: '',
    username: '',
    password: '',
    confirm_password: '',
    errors: {},
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const inputField: TInput[] = [
    {
      type: 'email',
      name: 'email',
      placeholder: 'Enter email',
      invalidMsg: 'Invalid email address',
      isRequired: true,
      value: formData.email,
      onChange: handleChange,
    },
    {
      type: 'text',
      name: 'username',
      placeholder: 'Enter username',
      isRequired: true,
      value: formData.username,
      onChange: handleChange,
    },
    {
      type: 'text',
      name: 'full_name',
      placeholder: 'Enter full name',
      isRequired: true,
      value: formData.full_name,
      onChange: handleChange,
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      minLength: 8,
      invalidMsg: 'Invalid password',
      isRequired: true,
      value: formData.password,
      onChange: handleChange,
    },
    {
      type: 'password',
      name: 'confirm_password',
      placeholder: 'Confirm Password',
      minLength: 8,
      invalidMsg: 'Must be the same with password',
      isRequired: true,
      value: formData.confirm_password,
      onChange: handleChange,
    },
  ];

  const { isLoading, fetchData, showToast } = useFetchPost<RegistRes, RegistReq>(
    '/v1/auth/register',
    formData,
    'POST',
  );

  const [error, setError] = useState<Error | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetchData?.()
      .then(() => {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <>
      <PopUp isSuccess={error === null} isShown={showToast}>
        Regist {error === null ? 'Success' : 'Failed'}
      </PopUp>
      <div className={styles.flexRow}>
        <div className={styles.leftContent}>
          <h1 className={styles.pageIntro}>Join Us!</h1>
          <h2 className={styles.seaWallet}>Sea Wallet</h2>
          <p className={styles.desc}>Already have an account?</p>
          <p className={styles.desc}>
            You can <StyledLink to="/login">Login here!</StyledLink>
          </p>
        </div>

        <div className={styles.imgContainer}>
          <img className={styles.otherPeeps} src={OtherPeeps} alt="OtherPeeps" />
        </div>

        <div className={styles.flexColumn}>
          <h2 className={styles.formTitle}>Register</h2>
          <form onSubmit={onSubmit} className={styles.form} id={formId}>
            {inputField.map((input, key): ReactNode => {
              return (
                <Input
                  key={key}
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  minLength={input.minLength}
                  invalidMsg={input.invalidMsg}
                  value={input.value}
                  onChange={input.onChange}
                />
              );
            })}
          </form>

          <Button type={'submit'} style={{ marginTop: 13 }} form={formId}>
            {isLoading ? <div className={styles.loader}></div> : 'Register'}
          </Button>
          <p className={styles.continue}>or continue with</p>
          <div className={styles.iconContainer}>
            <Facebook /> <Apple /> <Google />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

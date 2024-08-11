import React, { FC, FormEvent, ReactNode, useState } from 'react';
import { Saly } from 'src/assets/image';
import styles from './styles/authentication.module.css';
import Input from 'src/components/Input';
import Button from '../../components/Button';
import { Facebook, Apple, Google } from 'src/assets/icon';
import StyledLink from './StyledLink';
import PopUp from '../../components/PopUp';
import { useFetchPost } from 'src/hooks';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

type TInput = React.ComponentProps<typeof Input>;

interface LoginFormState {
  email: string;
  password: string;
  errors: { email?: string; password?: string };
}

interface LoginResp {
  message: string;
  data: {
    token: string;
  };
}

type LoginReq = Omit<LoginFormState, 'errors'>;

const Login: FC = () => {
  const navigate = useNavigate();
  const formId = 'login-form';
  const [formData, setFormData] = useState<LoginFormState>({
    email: '',
    password: '',
    errors: {},
  });
  const { isLoading, fetchData, showToast } = useFetchPost<LoginResp, LoginReq>(
    '/v1/auth/login',
    formData,
    'POST',
  );
  const [error, setError] = useState<Error | null>(null);

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
      onChange: handleChange,
      value: formData.email,
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      isRequired: true,
      onChange: handleChange,
      value: formData.password,
    },
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetchData?.()
      .then((val) => {
        Cookies.set('Bearer', val.data.token, { expires: 1 });
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };

  return (
    <>
      <PopUp isSuccess={error === null} isShown={showToast}>
        Login {error === null ? 'Success' : 'Failed'}
      </PopUp>
      <div className={styles.flexRow}>
        <div className={styles.leftContent}>
          <h1 className={styles.pageIntro}>Sign in to</h1>
          <h2 className={styles.seaWallet}>Sea Wallet</h2>
          <p className={styles.desc}>If you {"don't"} have an account register</p>
          <p className={styles.desc}>
            You can <StyledLink to="/register">Register here!</StyledLink>
          </p>
        </div>

        <div className={styles.imgContainer}>
          <img className={styles.saly} src={Saly} alt="Saly" />
        </div>

        <div className={styles.flexColumn}>
          <h2 className={styles.formTitle}>Sign in</h2>
          <form onSubmit={onSubmit} className={styles.form} id={formId}>
            {inputField.map((input, key): ReactNode => {
              return (
                <Input
                  key={key}
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  invalidMsg={input.invalidMsg}
                  value={input.value}
                  onChange={input.onChange}
                />
              );
            })}
          </form>

          <p className={styles.forgetPwd}>Forgot password?</p>
          <Button type={'submit'} style={{ marginTop: 30 }} form={formId}>
            {isLoading ? <div className={styles.loader}></div> : 'Login'}
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

export default Login;

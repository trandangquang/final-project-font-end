import { Form, Input } from 'antd';
import jwt_decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/image/login.jpg';
import Loading from '../../components/LoadingComponent/Loading';
import { useMutationHooks } from '../../hooks/useMutationHook';
import * as UserService from '../../services/UserService';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/slices/userSlice';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutationHooks((data) => UserService.loginUser(data));

  const { data, isLoading, isSuccess } = mutation;
  useEffect(() => {
    if (isSuccess) {
      navigate('/');
      localStorage.setItem('access_token', data?.access_token);
      if (data?.access_token) {
        const decoded = jwt_decode(data?.access_token);
        console.log('decoded', decoded);
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token);
        }
      }
    }
  }, [isSuccess]);

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({...res?.data, access_token: token}))
  };

  const handleOnChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleOnChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleLogin = () => {
    mutation.mutate({
      email,
      password,
    });
  };
  return (
    <div className='absolute w-full h-full flex items-center overflow-hidden'>
      <img className='relative object-cover' src={loginImage} alt='' />

      <div className='absolute flex flex-col items-center bg-white h-[550px] w-[437px] rounded-lg right-4'>
        <div className='px-8 pt-5 pb-8 items-center justify-center gap-10 flex-col'>
          <h1 className='font-medium font-mono text-4xl text-center'>
            PORSCHE
          </h1>
          <h3 className='font-medium text-2xl leading-8 mt-5 mb-3'>
            Nice to see you.
          </h3>

          <Form name='login-form' onFinish={handleLogin} autoComplete='off'>
            <div className='flex flex-col gap-1'>
              <span className='font-semibold'>Porsche ID (E-mail-Address)</span>

              <Form.Item
                name='email'
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
                hasFeedback
              >
                <Input
                  className='placeholder:italic placeholder:text-slate-600 bg-white w-[400px] h-[50px] border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg'
                  placeholder='Email'
                  value={email}
                  onChange={handleOnChangeEmail}
                />
              </Form.Item>
            </div>

            <div className='flex flex-col gap-1'>
              <span className='font-semibold'>Password</span>

              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  placeholder='Password'
                  className='placeholder:italic placeholder:text-slate-600 bg-white w-[400px] h-[50px] border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg'
                  value={password}
                  onChange={handleOnChangePassword}
                />
              </Form.Item>
            </div>

            {data?.status === 'ERR' && (
              <span className='text-red-600'>{data?.message}</span>
            )}
            <Loading isLoading={isLoading}>
              <div className='flex justify-center mt-8'>
                <button
                  disabled={isLoading}
                  className='rounded-full text-white bg-black w-full h-[50px] sm:text-xl
                          hover:border-none hover:!text-white hover:!bg-black disabled:bg-slate-900 disabled:text-white disabled:border-none'
                  onClick={handleLogin}
                >
                  {isLoading ? 'Logging in ...' : 'Log in now'}
                </button>
              </div>
            </Loading>

            <div className='inline-flex items-center justify-center w-full'>
              <hr className='w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
              <span className='absolute px-3 font-medium  -translate-x-1/2 bg-white left-1/2  '>
                or
              </span>
            </div>
            <p className='mt-3'>
              <span
                className='underline underline-offset-2 mr-1 cursor-pointer'
                onClick={() => navigate('/register')}
              >
                Register now,
              </span>
              to discover the digital world of Porsche.
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

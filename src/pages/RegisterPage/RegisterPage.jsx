import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerImage from '../../assets/image/login.jpg';
import Loading from '../../components/LoadingComponent/Loading';
import { useMutationHooks } from '../../hooks/useMutationHook';
import * as UserService from '../../services/UserService';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOnChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleOnChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleOnChangeConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
  };

  const mutation = useMutationHooks((data) => UserService.registerUser(data));

  const { data, isLoading } = mutation;

  const handleRegister = () => {
    mutation.mutate({ email, password, confirmPassword });
  };
  return (
    <div className='absolute w-full h-full flex items-center overflow-hidden'>
      <img className='relative object-cover' src={registerImage} alt='' />

      <div className='absolute flex flex-col items-center bg-white h-[600px] w-[437px] rounded-lg right-4'>
        <div className='px-8 pt-5 pb-8 items-center justify-center flex-col'>
          <h1 className='font-medium font-mono text-4xl text-center'>
            PORSCHE
          </h1>
          <h3 className='font-medium text-2xl leading-8 mt-5 mb-3'>
            Nice to see you.
          </h3>

          <Form name='register-form' autoComplete='off'>
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

            <div className='flex flex-col gap-1'>
              <span className='font-semibold'>Confirm Password</span>

              <Form.Item
                name='confirm'
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                ]}
              >
                <Input.Password
                  placeholder='Confirm Password'
                  className='placeholder:italic placeholder:text-slate-600 bg-white w-[400px] h-[50px] border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg'
                  value={confirmPassword}
                  onChange={handleOnChangeConfirmPassword}
                />
              </Form.Item>
            </div>
            {data?.status === 'ERR' && <span className='text-red-600'>{data?.message}</span>}
            <Loading isLoading={isLoading}>
              <div className='flex flex-col justify-center items-center mt-8 gap-4'>
                <Button
                  className='rounded-full text-white bg-black w-full h-[50px] sm:text-xl
                          hover:border-none hover:!text-white hover:!bg-black disabled:bg-slate-900 disabled:text-white disabled:border-none'
                  onClick={handleRegister}
                >
                  {isLoading ? 'Registering...' : 'Register now'}
                </Button>

                <p
                  className='underline underline-offset-2 mr-1 cursor-pointer'
                  onClick={() => navigate('/login')}
                >
                  Back to Login page
                </p>
              </div>
            </Loading>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

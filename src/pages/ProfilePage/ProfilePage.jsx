import { UploadOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/LoadingComponent/Loading';
import * as message from '../../components/MessageComponent/Message';
import { useMutationHooks } from '../../hooks/useMutationHook';
import { updateUser } from '../../redux/slices/userSlice';
import * as UserService from '../../services/UserService';
import { getBase64 } from '../../utils';
import './style.scss';

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [avatar, setAvatar] = useState('');
  const [onLoading, setOnLoading] = useState(false);
  const mutation = useMutationHooks((data) => {
    // console.log('data', data);
    const { id, access_token, ...rests } = data;
    UserService.updateUser(id, rests, access_token);
  });
  const dispatch = useDispatch();

  const { data, isLoading, isSuccess, isError } = mutation;
  // const { mutate: createUser } = useCreateUser();

  useEffect(() => {
    setEmail(user?.email);
    setName(user?.name);
    setPhone(user?.phone);
    setAddress(user?.address);
    setAvatar(user?.avatar);
  }, [user]);

  useEffect(() => {
    if (onLoading === true) {
      message.success();
      handleGetDetailsUser(user?.id, user?.access_token);
      setOnLoading(false);
    } else if (isError) {
      message.error();
    }
  }, [onLoading]);

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  const handleOnChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const handleOnChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handleOnChangePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
  };
  const handleOnChangeAddress = (e) => {
    const value = e.target.value;
    setAddress(value);
  };
  const handleOnChangeAvatar = async ({ fileList }) => {
    const file = fileList[0];  
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setAvatar(file.preview);
  };
  const handleUpdate = async () => {
    await mutation.mutate({
      id: user?.id,
      name,
      email,
      phone,
      address,
      avatar,
      access_token: user?.access_token,
    });
    setOnLoading(true);
  };

  return (
    <div className='px-44'>
      <h1 className='text-3xl font-semibold pt-8'>My profile</h1>
      <Divider />
      <Loading isLoading={isLoading}>
        {!isLoading && (
          <div className='px-[480px]'>
            <div className='rounded-lg border-solid border-2 border-gray-300 w-[600px] h-[400px]'>
              <div className='py-4 flex px-10 gap-4 pt-10'>
                <label className='w-[80px] cursor-pointer ' htmlFor='name'>
                  Name
                </label>
                <Input
                  className='w-[300px]'
                  type='email'
                  id='name'
                  value={name}
                  onChange={handleOnChangeName}
                />
                <Button onClick={handleUpdate}>Update</Button>
              </div>
              <div className='py-4 flex px-10 gap-4'>
                <label htmlFor='email' className='w-[80px] cursor-pointer'>
                  Email
                </label>
                <Input
                  className='w-[300px]'
                  type='text'
                  id='email'
                  value={email}
                  onChange={handleOnChangeEmail}
                />
                <Button onClick={handleUpdate}>Update</Button>
              </div>
              <div className='py-4 flex px-10 gap-4'>
                <label className='w-[80px] cursor-pointer' htmlFor='phone'>
                  Phone
                </label>
                <Input
                  className='w-[300px]'
                  type='text'
                  id='phone'
                  value={phone}
                  onChange={handleOnChangePhone}
                />
                <Button onClick={handleUpdate}>Update</Button>
              </div>
              <div className='py-4 flex px-10 gap-4'>
                <label className='w-[80px] cursor-pointer' htmlFor='address'>
                  Address
                </label>
                <Input
                  className='w-[300px]'
                  type='text'
                  id='address'
                  value={address}
                  onChange={handleOnChangeAddress}
                />
                <Button onClick={handleUpdate}>Update</Button>
              </div>
              <div className='py-4 flex px-10 gap-4'>
                <label className='w-[80px] cursor-pointer' htmlFor='avatar'>
                  Avatar
                </label>
                <Upload onChange={handleOnChangeAvatar} maxCount={1}>
                  <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
                {avatar && (
                  <div className='rounded-full h-[60px] w-[60px]'>
                    <img
                      src={avatar}
                      alt='avatar'
                      className='object-cover h-[60px] w-[60px] rounded-full'
                    />
                  </div>
                )}
                <Button onClick={handleUpdate}>Update</Button>
              </div>
            </div>
          </div>
        )}
      </Loading>
    </div>
  );
};

export default ProfilePage;

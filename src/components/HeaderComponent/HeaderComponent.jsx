
import {ShoppingCartOutlined, UserOutlined} from '@ant-design/icons'
import { Badge, Divider, Dropdown, Popover, Select } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import caymanbg from '../../assets/image/718caymanbg.jpg';
import sport from '../../assets/image/911-sport.png';
import porschetarga from '../../assets/image/911-targa.png';
import turbobg from '../../assets/image/911-turbo-bg.jpg';
import turbo from '../../assets/image/911-turbo.png';
import canyennebg from '../../assets/image/canyenne-bg.jpg';
import canyennecoupe from '../../assets/image/canyenne-coupe.png';
import canyenne from '../../assets/image/canyenne.png';
import dakar from '../../assets/image/dakar-911.png';
import logo from '../../assets/image/logo.webp';
import macanbg from '../../assets/image/macan-bg.jpg';
import macan from '../../assets/image/macan.png';
import boxstermodel from '../../assets/image/model-718-boxster.png';
import caymanmodel from '../../assets/image/model-718-cayman.png';
import porscheS from '../../assets/image/model-911-S.png';
import porschecarrera from '../../assets/image/model-911-carrera.png';
import dakarbg from '../../assets/image/model-911-dakar-bg.jpg';
import panamerabg from '../../assets/image/model-panamera-bg.jpg';
import taycanbg from '../../assets/image/model-taycan-bg.jpg';
import panameragts from '../../assets/image/panamera-GTS.png';
import panameragturbo from '../../assets/image/panamera-turbo.png';
import panamera from '../../assets/image/panamera.png';
import porschecarrerabg from '../../assets/image/porsche-911-bg.jpg';
import porschebgboxster from '../../assets/image/porsche-bg.jpg';
import styleedition from '../../assets/image/style-edition-718.png';
import taycancross from '../../assets/image/taycan-cross.png';
import taycan from '../../assets/image/taycan.png';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slices/userSlice';
import Loading from '../LoadingComponent/Loading';


const items = [
  {
    key: '1',
    label: '718',
    children: [
      {
        key: '1-1',
        label: '718 Cayman Version',
        children: [
          {
            key: '1-1-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={caymanbg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={caymanmodel} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
      {
        key: '1-2',
        label: '718 Boxster Version',
        children: [
          {
            key: '1-2-1',
            label: (
              <div className=' relative ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={porschebgboxster} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={boxstermodel} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
      {
        key: '1-3',
        label: '718 Style Edition Version',
        children: [
          {
            key: '1-3-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={porschebgboxster} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={styleedition} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    key: '2',
    label: '911',
    children: [
      {
        key: '2-1',
        label: '911 Carrera Version',
        children: [
          {
            key: '2-1-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={porschecarrerabg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={porschecarrera} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
      {
        key: '2-2',
        label: '911 Carrera S Version',
        children: [
          {
            key: '2-2-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={porschecarrerabg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={porscheS} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
      {
        key: '2-3',
        label: '911 Targa Version',
        children: [
          {
            key: '2-3-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={porschecarrerabg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={porschetarga} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
      {
        key: '2-4',
        label: '911 Turbo Version',
        children: [
          {
            key: '2-4-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={turbobg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={turbo} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
      {
        key: '2-5',
        label: '911 Sport Classic Version',
        children: [
          {
            key: '2-5-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={porschecarrerabg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={sport} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
      {
        key: '2-6',
        label: '911 Dakar Version',
        children: [
          {
            key: '2-6-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={dakarbg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={dakar} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
    ],
  },

  {
    key: '3',
    label: 'Taycan',
    children: [
      {
        key: '3-1',
        label: 'Taycan Version',
        children: [
          {
            key: '3-1-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={taycanbg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={taycan} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
      {
        key: '3-2',
        label: 'Cross Turismo Version',
        children: [
          {
            key: '3-2-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={taycanbg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={taycancross} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
    ],
  },

  {
    key: '4',
    label: 'Panamera',
    children: [
      {
        key: '4-1',
        label: 'Panamera Version',
        children: [
          {
            key: '4-1-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={panamerabg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={panamera} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
      {
        key: '4-2',
        label: 'Panamera GTS Version',
        children: [
          {
            key: '4-2-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={panamerabg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={panameragts} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
      {
        key: '4-3',
        label: 'Panamera Turbo S Version',
        children: [
          {
            key: '4-3-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={panamerabg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={panameragturbo} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    key: '5',
    label: 'Macan',
    children: [
      {
        key: '5-1',
        label: 'Macan Version',
        children: [
          {
            key: '5-1-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={macanbg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={macan} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    key: '6',
    label: 'Cayenne',
    children: [
      {
        key: '6-1',
        label: 'Cayenne Version',
        children: [
          {
            key: '6-1-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={canyennebg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={canyenne} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
      {
        key: '6-2',
        label: 'Cayenne Coupé Version',
        children: [
          {
            key: '6-2-1',
            label: (
              <div className=' relative  ml-0 pl-0 pr-0 pt-0 pb-0 h-[500px] w-full inline-block align-top bg-none'>
                <div className=' z-0 top-0 right-0 w-full h-[500px] relative overflow-hidden'>
                  <img src={canyennebg} alt='' />
                </div>
                <div className=' z-10 w-[50%] max-w-[47%] left-0 bottom-0 absolute'>
                  <img src={canyennecoupe} alt='' />
                </div>
              </div>
            ),
          },
        ],
      },
    ],
  },
];

const HeaderComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state)=> state.user)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()


  const handleLogout = async () => {
    setLoading(true)
    await UserService.logoutUser()
    dispatch(resetUser());
    setLoading(false)
  }
  const content = (
    <div>
      <p className='hover:text-red-700 cursor-pointer'>User information</p>
      <p className='hover:text-red-700 cursor-pointer' onClick={handleLogout}>
        Logout
      </p>
    </div>
  );
  console.log('user', user)
  return (
    <div>
      <>
        <div className='bg-white h-fit px-44 flex flex-col items-start pb-5'>
          <div className='w-full h-full p-[2px]'>
            <Divider>
              <img
                onClick={() => navigate('/')}
                className='cursor-pointer mb-11'
                width={133}
                h={'auto'}
                src={logo}
                alt=''
              />
            </Divider>
          </div>

          <div className='flex flex-row justify-between bg-white h-full w-full items-center'>
            <Dropdown
              menu={{
                items,
              }}
            >
              <div
                className=' hover:text-red-600 text-3xl font-medium leading-10 cursor-pointer'
                onClick={() => navigate('/')}
              >
                Car Model
              </div>
            </Dropdown>

            <Select
              showSearch
              placeholder='Search for car'
              style={{
                width: 300,
              }}
            />

            <div className='flex items-center gap-3 text-3xl cursor-pointer'>
              <div>
                <UserOutlined className='hover:text-red-700' />
              </div>
              <Loading isLoading={loading}>
                {user?.name ? (
                  <>
                    <Popover content={content} trigger='click'>
                      <div className='text-lg flex-col flex'>{user.name}</div>
                    </Popover>
                  </>
                ) : (
                  <div className='text-lg flex-col flex'>
                    <span
                      className='hover:text-red-700'
                      onClick={() => navigate('/login')}
                    >
                      Sign in / Register
                    </span>
                  </div>
                )}
              </Loading>
              <div className='pl-5 '>
                <Badge count={4}>
                  <ShoppingCartOutlined className='text-3xl hover:text-red-700' />
                </Badge>
              </div>

              <div className='text-lg flex-col flex'>
                <span className='hover:text-red-700'>Cart</span>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default HeaderComponent;

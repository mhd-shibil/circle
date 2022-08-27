import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginCarousel from 'components/loginCarousel/loginCarousel';
import Button from 'components/button/Button';
import { ButtonType } from 'components/button/types';

import lock from '../../assets/Vector.png';
import './login.css';

const Login: React.FC = () => {
  const history = useHistory();

  return (
    <div className='w-screen h-screen flex flex-row'>
      <div className='flex flex-col justify-center items-center h-full w-[60vw]'>
        {/* <img src='icons/login-page-image.svg' alt='Login Page' className='h-full w-full object-cover' /> */}
        <LoginCarousel />
      </div>
      <div className='flex flex-col justify-center items-center h-full w-[40vw]'>
        <div className='text-[40px] text-white font-extrabold'>CIRCLE</div>
        <div className='rounded-[40px] bg-white m-[5%] p-[10%] border-2 border-[black]'>
          <div className='flex flex-row items-center'>
            <img src={lock} alt='Lock Icon' className='w-[12px]' />
            <span className='pl-[8px] font-[20px]'> Login to ABC</span>
          </div>
          <br />
          <br />
          <div className='flex justify-left align-left'>
            <Button
              type={ButtonType.TRANSPARENT_BLACK}
              onClick={() => history.push('/home')}
              className='w-[400px] text-[black'
            >
              <img src='icons/google.svg' alt='' height='20' className='mr-[10px]' />
              Login with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

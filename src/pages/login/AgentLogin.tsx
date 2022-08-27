import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import LoginCarousel from 'components/loginCarousel/loginCarousel';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import lock from '../../assets/Vector.png';
import { useSetRecoilState } from 'recoil';
import { FireBaseClientId } from 'store/atoms/FireBaseId.atom';
import { getToken } from '../../firebase';
import RhfInput from 'components/RHFInput/RhfInput';
import { useLazyQuery } from '@apollo/client';
import { AGENT_LOGIN } from 'queries/queries';
import { userDetails } from 'store/atoms/userdetails.atom';
import routesPath from 'routes/RoutesPath';

const AgentLogin: FC = () => {
  const history = useHistory();
  const setToken = useSetRecoilState(FireBaseClientId);
  const setUserId = useSetRecoilState(userDetails);
  const { control, handleSubmit } = useForm();

  const onCompleted = async (data) => {
    const selectedToken = await getToken();

    setUserId(data?.loginUser?.id);

    setToken(selectedToken);
    history.push('/home');
  };

  const [agentLogin] = useLazyQuery(AGENT_LOGIN, {
    onCompleted
  });

  const logIn = async (formData) => {
    agentLogin({
      variables: {
        name: formData?.username
      }
    });
  };

  return (
    <div className='w-screen h-screen flex flex-row'>
      <div className='flex flex-col justify-center items-center h-full w-[60vw]'>
        {/* <img src='icons/login-page-image.svg' alt='Login Page' className='h-full w-full object-cover' /> */}
        <LoginCarousel />
      </div>
      <div className='flex flex-col justify-center items-center h-full w-[40vw]'>
        <div className='text-[40px] text-white font-extrabold'>CIRCLE</div>
        <div className='rounded-[40px] bg-white m-[5%] p-[10%] shadow-lg'>
          <div className='flex flex-row items-center'>
            <img src={lock} alt='Lock Icon' className='w-[12px]' />
            <span className='pl-[8px] font-[20px]'> Login to Circle</span>
          </div>
          <br />
          <br />
          <form onSubmit={handleSubmit(logIn)}>
            <div className='flex flex-col space-y-4'>
              <RhfInput control={control} name='username' label='Username' />
              <RhfInput control={control} name='password' label='Password' />
              <Button variant='outlined' type={'submit'} className='w-[400px] h-10'>
                Agent Login
              </Button>
              <Link className='text-PRIMARY_BLUE underline' to={routesPath.USER_LOGIN}>
                login as user ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgentLogin;

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
import { useLazyQuery, useMutation } from '@apollo/client';
import { USER_LOGIN } from 'queries/queries';
import { userDetails } from 'store/atoms/userdetails.atom';
import { UPDATE_USER } from 'queries/mutations';
import routesPath from 'routes/RoutesPath';

const Login: FC = () => {
  const history = useHistory();
  const setToken = useSetRecoilState(FireBaseClientId);
  const setUserId = useSetRecoilState(userDetails);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });
  const [updateUser] = useMutation(UPDATE_USER);

  const onCompleted = async (data) => {
    const selectedToken = await getToken();

    setUserId(data?.loginUser?.id);

    setToken(selectedToken);
    updateUser({
      variables: {
        id: data?.loginUser?.id,
        input: {
          firebaseId: selectedToken
        }
      }
    });
    history.push('/user/home');
  };

  const [userLogin] = useLazyQuery(USER_LOGIN, {
    onCompleted
  });

  const logIn = async (formData) => {
    userLogin({
      variables: {
        email: formData?.username,
        password: formData?.password
      }
    });
  };

  return (
    <div className='w-screen h-screen flex flex-row relative'>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        {/* <img src='icons/login-page-image.svg' alt='Login Page' className='h-full w-full object-cover' /> */}
        <LoginCarousel />
      </div>
      <div className='flex flex-col justify-center items-center h-full w-[40vw] absolute left-[50%]'>
        <div className='text-[40px] text-white font-extrabold'>CIRCLE</div>
        <div className='rounded-[40px] bg-white m-[5%] p-[10%] shadow-lg bg-opacity-95'>
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
                User Login
              </Button>
              <Link className='text-PRIMARY_BLUE underline' to={routesPath.AGENT_LOGIN}>
                login as agent ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

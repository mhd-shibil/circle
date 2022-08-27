import { FC } from 'react';

import { LOADER_GIF } from 'constants/icons';

type LoaderProps = {
  fullScreen?: boolean;
};

const CircularLoader: FC<LoaderProps> = ({ fullScreen }) => (
  <div
    className={`flex justify-center items-center
      ${fullScreen && `h-screen w-full top-0 left-0`}`}
  >
    <img src={LOADER_GIF} alt='Loader' className='w-[80px] h-[80px]' />
  </div>
);

export default CircularLoader;

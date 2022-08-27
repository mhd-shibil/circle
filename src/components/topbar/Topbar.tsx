import React, { memo } from 'react';

import Avatar from 'components/avatar/Avatar';

const TopBar: React.FC = () => (
  <div className='h-[75px] bg-white shadow flex items-center w-full justify-end'>
    <div className='flex items-center w-full px-5 justify-end'>
      <div className='mr-4 text-right text-[#414158]'>
        <div className='text-[15px] font-semibold'>John Doe</div>
        <div className='text-[14px]'>Admin</div>
      </div>
      <Avatar name='John Doe' className='w-[42px] h-[42px]' />
    </div>
  </div>
);

export default memo(TopBar);

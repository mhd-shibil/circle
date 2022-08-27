import { Button } from 'components';
import { ButtonType } from 'components/button/types';
import { FC } from 'react';

const EnquiryDetailCard: FC = () => {
  return (
    <div className=' border-2 rounded p-4 shadow-md mb-4'>
      <div className='flex justify-between'>
        <div>Agency 1</div>
        <Button type={ButtonType.BLUE} onClick={() => console.log('click')} className='items-center'>
          View Offer
        </Button>
      </div>
      <div className='flex'>
        <Button type={ButtonType.GREEN} onClick={() => console.log('click')} className='items-center mr-4'>
          Accept
        </Button>
        <Button type={ButtonType.YELLOW} onClick={() => console.log('click')} className='items-center'>
          Request a Change
        </Button>
      </div>
    </div>
  );
};

export default EnquiryDetailCard;

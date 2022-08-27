// import Button from 'components/button/Button';
// import { ButtonType } from 'components/button/types';
import { FC } from 'react';
import { RequestDetails } from 'types';

import './style.css';

interface RequestSummaryProps {
  toAddressName?: string;
  onRefundClick?: () => void;
  onClose?: () => void;
  selectedRow?: RequestDetails;
}

const RequestSummary: FC<RequestSummaryProps> = ({ onClose }) => {
  return (
    <div className={`rounded-[16px] shadow-lg p-[18px] w-[793px] relative bg-white simple_animation`}>
      <div className='absolute top-[10px] right-[10px] cursor-pointer' role='presentation' onClick={onClose}>
        <img src='icons/close-icon.svg' alt='Close icon' />
      </div>
      <div className='px-[21px] flex flex-col pt-[24px] justify-start'>
        <div className='text-4xl text-blue-800 font-bold flex justify-start align-middle text-center'>
          <div>Destination: Munar</div>
        </div>
        <div className='text-sm text-[black] flex flex-col mt-8'>
          <div>PickUp : Kochi</div>
          <div>Amount : Rs.25000</div>
          <div className='mt-4'>
            {/* <Button type={ButtonType.BLUE}> */}
            <input type='file' />
            {/* </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestSummary;

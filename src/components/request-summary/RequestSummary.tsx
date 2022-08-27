import Button from 'components/button/Button';
import { ButtonType } from 'components/button/types';
import { FC, useState } from 'react';
import { RequestDetails } from 'types';
import { useLazyQuery } from '@apollo/client';
import { GET_PRESIGNED_URL } from 'queries/queries';

import './style.css';

interface RequestSummaryProps {
  onClose?: () => void;
  selectedRow?: RequestDetails;
}

const RequestSummary: FC<RequestSummaryProps> = ({ onClose }) => {
  const [file, setFile] = useState<File>();

  const [getPresignedUrl] = useLazyQuery(GET_PRESIGNED_URL, {
    onCompleted(data) {
      fetch(data.getPresignedUrl.url, {
        method: 'put',
        body: file,
        headers: { ContentType: 'application/pdf' }
      });
    }
  });

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    getPresignedUrl();
  };

  return (
    <div className={`rounded-[16px] shadow-lg p-[18px] w-[650px] h-[465px] relative bg-white simple_animation`}>
      <div className='absolute opacity-10 w-[612px] h-[418px] mt-3 -z-1'>
        <img src='icons/travel-image.jpg' alt='travel' />
      </div>
      <div className='absolute top-[-1px] right-[10px] cursor-pointer z-10' role='presentation' onClick={onClose}>
        <img src='icons/close-icon.svg' alt='Close icon' />
      </div>
      <div className='px-[21px] flex flex-col pt-[24px] justify-start relative'>
        <div className='text-4xl text-blue-800 font-bold flex justify-start align-middle text-center'>
          <div>Destination: Munar</div>
        </div>
        <div className='text-sm text-[black] flex flex-col mt-8 font-bold py-2'>
          <div>PickUp : Kochi</div>
          <div>Hotel Preference: 5 star</div>
          <div>Amount : Rs.25000</div>
          <div className='mt-4'>Notes: I need a 5 day package</div>
          <div className='mt-4'>
            <input type='file' onChange={handleFileUpload} />
            <div className='mt-8'>
              <Button type={ButtonType.BLUE} onClick={handleSubmit}>
                Sumbit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestSummary;

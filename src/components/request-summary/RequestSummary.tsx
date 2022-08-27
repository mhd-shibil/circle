import Button from 'components/button/Button';
import { ButtonType } from 'components/button/types';
import { FC, useEffect, useState } from 'react';
import { RequestDetails } from 'types';

import './style.css';

interface RequestSummaryProps {
  onClose?: () => void;
  selectedRow?: RequestDetails;
}

const RequestSummary: FC<RequestSummaryProps> = ({ onClose }) => {
  const [file, setFile] = useState<File>();

  useEffect(() => {
    if (file) console.log(file);
  }, [file]);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const url =
    'https://circle-bucket-travel.s3.ap-south-1.amazonaws.com/test?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYYLXSLSB7HHMUQFC%2F20220827%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20220827T094543Z&X-Amz-Expires=1200&X-Amz-Signature=592fcb77dd1e81ed952a0a32eeb8cd10ed299ce6bcfc00d770a773dadf859ff2&X-Amz-SignedHeaders=host';
  const handleSubmit = async () => {
    return fetch(url, {
      method: 'put',
      body: file,
      headers: { ContentType: 'application/pdf' }
    });
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

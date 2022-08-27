import Button from 'components/button/Button';
import { ButtonType } from 'components/button/types';
import { FC, useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_PRESIGNED_URL } from 'queries/queries';
import { createQuotationMutation } from 'mutation/mutations';

import './style.css';
import { CreateQuotationInput } from 'pages/home/types';
import { toast } from 'react-toastify';

interface RequestSummaryProps {
  onClose?: () => void;
  selectedRow?: any;
}

const RequestSummary: FC<RequestSummaryProps> = ({ onClose, selectedRow }) => {
  console.log('hello', selectedRow);
  const [file, setFile] = useState<File>();

  const [createQuotation, { data }] = useMutation(createQuotationMutation);

  const getFormattedTime = (input: string) => {
    const time = new Date(input);

    return time?.getDate() + '-' + time?.getMonth() + '-' + time?.getFullYear();
  };

  useEffect(() => {
    if (data) {
      onClose();
      toast.success('Quotation Sent');
    }
  }, [data]);

  const handleUpload = async (data) => {
    await fetch(data.getPresignedUrl.url, {
      method: 'put',
      body: file,
      headers: { ContentType: 'application/pdf' }
    });
    const createQuotationInput: CreateQuotationInput = {
      userId: selectedRow?.userId,
      enquiryId: selectedRow?.id,
      agentId: 'd439e173-5a26-4213-86cf-624c88dbeb53',
      fileLink: data?.getPresignedUrl.key,
      notes: 'dfsdfsdfsdf'
    };

    createQuotation({ variables: { input: createQuotationInput } });
  };

  const [getPresignedUrl] = useLazyQuery(GET_PRESIGNED_URL, {
    onCompleted: handleUpload
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
          <div>{`Destination: ${selectedRow?.destination}`}</div>
        </div>
        <div className='text-sm text-[black] flex flex-col mt-8 font-semibold py-2'>
          <div>{`PickUp : ${selectedRow?.pickUpPoint}`}</div>
          <div>{`Budget : Rs.${selectedRow?.budget}`}</div>
          <div>{`Start Date : ${getFormattedTime(selectedRow?.startDate)}`}</div>
          <div>{`Return Date : ${getFormattedTime(selectedRow?.returnDate)}`}</div>
          {selectedRow?.hotelStar && <div>{`Hotel Preference : ${selectedRow?.hotelStar}`}</div>}
          {selectedRow?.adults && <div>{`Number of Adults : ${selectedRow?.adults}`}</div>}
          {selectedRow?.children && <div>{`Number of Children : ${selectedRow?.children}`}</div>}
          {selectedRow?.notes && <div className='mt-4'>{`Notes : ${selectedRow?.notes}`}</div>}
          <div className='mt-4'>
            <input className='cursor-pointer' type='file' onChange={handleFileUpload} />
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

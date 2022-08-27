/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from 'components/button/Button';
import { ButtonType } from 'components/button/types';
import { FC, useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_PRESIGNED_URL } from 'queries/queries';
import { createQuotationMutation } from 'mutation/mutations';

import './style.css';
import { CreateQuotationInput } from 'pages/home/types';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';
import { userDetails } from 'store/atoms/userdetails.atom';
import CircularLoader from 'components/loader/CircularLoader';

interface RequestSummaryProps {
  onClose?: () => void;
  selectedRow?: any;
}

const RequestSummary: FC<RequestSummaryProps> = ({ onClose, selectedRow }) => {
  const [file, setFile] = useState<File>();
  const agentId = useRecoilValue(userDetails);

  console.log(agentId);

  const [createQuotation, { data, loading, error }] = useMutation(createQuotationMutation);

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

  useEffect(() => {
    if (error) {
      onClose();
      toast.error(error.message);
    }
  }, [error]);

  const handleUpload = async (data) => {
    await fetch(data.getPresignedUrl.url, {
      method: 'put',
      body: file,
      headers: { ContentType: 'application/pdf' }
    });
    const createQuotationInput: CreateQuotationInput = {
      userId: selectedRow?.userId,
      enquiryId: selectedRow?.id,
      agentId: agentId,
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

  if (loading)
    return (
      <div className='w-screen h-screen flex justify-center items-center'>
        <CircularLoader fullScreen={false} />
      </div>
    );

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
        <div className='text-base text-[black] flex flex-col mt-8 font-semibold py-2'>
          <div className='my-1'>{`PickUp : ${selectedRow?.pickUpPoint}`}</div>
          <div className='my-1'>{`Budget : Rs.${selectedRow?.budget}`}</div>
          <div className='my-1'>{`Start Date : ${getFormattedTime(selectedRow?.startDate)}`}</div>
          <div className='my-1'>{`Return Date : ${getFormattedTime(selectedRow?.returnDate)}`}</div>
          {selectedRow?.hotelStar && <div>{`Hotel Preference : ${selectedRow?.hotelStar}`}</div>}
          {selectedRow?.adults && <div>{`Number of Adults : ${selectedRow?.adults}`}</div>}
          {selectedRow?.children && <div>{`Number of Children : ${selectedRow?.children}`}</div>}
          {selectedRow?.notes && <div className='mt-4'>{`Notes : ${selectedRow?.notes}`}</div>}
          <div className='mt-4'>
            <input className='cursor-pointer text-sm' type='file' onChange={handleFileUpload} />
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

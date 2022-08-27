import { FC } from 'react';
import EnquiryDetailCard from './enquiryDetailCard';

const EnquiryDetails: FC = () => {
  return (
    <div className='m-6'>
      <div className='flex w-full justify-center'>
        <span className='text-red-500 font-bold text-3xl'>Munnar</span>
        <img src='icons/pay-in-icon.svg' alt='right Arrow' className='px-4' />
        <span className='text-green-700 font-bold text-3xl'>Goa</span>
      </div>
      <div className='flex justify-end'>Date : 12/06/24</div>
      <div className='flex justify-end'>Number of passengers : 2</div>
      <div className='flex flex-col'>
        <div className='text-xl font-bold'>Available Offers</div>
        <div className='bg-white p-6'>
          <EnquiryDetailCard />
          <EnquiryDetailCard />
          <EnquiryDetailCard />
        </div>
      </div>
    </div>
  );
};

export default EnquiryDetails;

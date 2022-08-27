import { FC } from 'react';

interface EnquiryCardProps {
  startPlace?: string;
  destination?: string;
  date?: Date;
}

const EnquiryCard: FC<EnquiryCardProps> = ({ startPlace, destination, date }) => {
  return (
    <div className='w-5/6 bg-white rounded-md p-6 mb-6'>
      <div className='flex mb-2'>
        <span className='text-red-500 font-bold'>{startPlace}</span>
        <img src='icons/pay-in-icon.svg' alt='right Arrow' className='px-4' />
        <span className='text-green-700 font-bold'>{destination}</span>
      </div>
      {/* add 1 with month  */}
      <div>{date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}</div>
    </div>
  );
};

export default EnquiryCard;

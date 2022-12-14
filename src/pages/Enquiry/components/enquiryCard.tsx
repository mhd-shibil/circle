import { FC } from 'react';
import { useHistory } from 'react-router-dom';

interface EnquiryCardProps {
  startPlace?: string;
  destination?: string;
  date?: Date;
  id?: number;
}

const EnquiryCard: FC<EnquiryCardProps> = ({ destination, date, id }) => {
  const history = useHistory();

  return (
    <div
      className='w-5/6 bg-white rounded-md p-6 mb-6 cursor-pointer shadow-md'
      onClick={() => history.push('/user/enquiry/' + id)}
      role='presentation'
    >
      <div className='flex flex-col justify-between'>
        <div className='flex mb-2'>
          {/* <span className='text-red-500 font-bold'>{startPlace}</span> */}
          {/* <img src='icons/pay-in-icon.svg' alt='right Arrow' className='px-4' /> */}
          <span className='text-green-700 font-bold'>{destination}</span>
        </div>
        <div>{date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}</div>
      </div>
    </div>
  );
};

export default EnquiryCard;

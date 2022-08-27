import { FC } from 'react';
import EnquiryCard from './components/enquiryCard';

const EnquiryPage: FC = () => {
  return (
    <div className='m-6'>
      <span className='font-bold'>My Enquiries</span>
      <div className='mt-6'>
        <EnquiryCard startPlace='munnar' destination='goa' date={new Date('2022-02-14')} id={1} status='pending' />
        <EnquiryCard startPlace='munnar' destination='goa' date={new Date('2022-06-22')} id={2} status='completed' />
      </div>
    </div>
  );
};

export default EnquiryPage;

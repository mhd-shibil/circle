import { FC } from 'react';
import EnquiryCard from './components/enquiryCard';

const EnquiryPage: FC = () => {
  return (
    <div className='m-6'>
      <span>My Enquiries</span>
      <div className='mt-6'>
        <EnquiryCard startPlace='munnar' destination='goa' date={new Date('2022-02-14')} />
        <EnquiryCard startPlace='munnar' destination='goa' date={new Date('2022-06-22')} />
      </div>
    </div>
  );
};

export default EnquiryPage;

import { useQuery } from '@apollo/client';
import { getCustomerEnquiriesQuery } from 'queries/queries';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { userDetails } from 'store/atoms/userdetails.atom';
import EnquiryCard from './components/enquiryCard';

const EnquiryPage: FC = () => {
  const userId = useRecoilValue(userDetails);
  const { data: customerEnquries } = useQuery(getCustomerEnquiriesQuery, {
    variables: { userId: userId }
  });

  return (
    <div className='m-6'>
      <span className='font-bold'>My Enquiries</span>
      <div className='mt-6'>
        {customerEnquries?.getCustomerEnquiries?.map((enquiry) => {
          return (
            <EnquiryCard
              key={enquiry?.id}
              // startPlace={enquiry?.pickUpPoint}
              destination={enquiry?.destination?.name}
              date={new Date(enquiry?.startDate)}
              id={enquiry?.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EnquiryPage;

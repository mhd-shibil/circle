import { useQuery } from '@apollo/client';
import { getCustomerEnquiriesQuery } from 'queries/queries';
import { FC } from 'react';
import EnquiryCard from './components/enquiryCard';

const EnquiryPage: FC = () => {
  const { data: customerEnquries } = useQuery(getCustomerEnquiriesQuery, {
    variables: { userId: '74bd13af-0337-4bdd-a5c5-9535efdf329d' }
  });

  return (
    <div className='m-6'>
      <span className='font-bold'>My Enquiries</span>
      <div className='mt-6'>
        {customerEnquries?.getCustomerEnquiries?.map((enquiry) => {
          return (
            <EnquiryCard
              key={enquiry?.id}
              startPlace={enquiry?.pickUpPoint}
              destination={enquiry?.destination?.name}
              date={new Date(enquiry?.startDate)}
              id={enquiry?.id}
              status='pending'
            />
          );
        })}
      </div>
    </div>
  );
};

export default EnquiryPage;

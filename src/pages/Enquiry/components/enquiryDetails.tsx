import { useQuery } from '@apollo/client';
import { getEnquiryQuery, getQuotationsQuery } from 'queries/queries';
import { FC } from 'react';
import EnquiryDetailCard from './enquiryDetailCard';

const EnquiryDetails: FC = () => {
  const queryId = location.href.split('/').pop();
  const { data: enquiryData } = useQuery(getEnquiryQuery, {
    variables: { id: queryId }
  });
  const { data: quotations } = useQuery(getQuotationsQuery, {
    variables: { quotationQueryOption: { enquiryId: queryId } }
  });

  const getFormattedTime = (input: string) => {
    const time = new Date(input);

    return time?.getDate() + '/' + time?.getMonth() + '/' + time?.getFullYear();
  };

  return (
    <div className='m-6'>
      <div className='flex w-full justify-center'>
        <span className='text-red-500 font-bold text-3xl'>Munnar</span>
      </div>
      <div className='flex justify-center'>Date : {getFormattedTime(enquiryData?.getEnquiry?.startDate)}</div>
      <div className='flex justify-center'>
        Number of passengers : {enquiryData?.getEnquiry?.adults + enquiryData?.getEnquiry?.children}
      </div>
      <div className='flex flex-col'>
        <div className='text-xl font-bold mb-4'>Available Quotations</div>
        <div className='bg-white p-6 rounded'>
          {quotations?.getQuotations?.length === 0 && (
            <div className='justify-center flex'>No Quotations Available</div>
          )}

          {quotations?.getQuotations?.map((quotation) => {
            return (
              <EnquiryDetailCard key={quotation?.id} agentId={quotation?.agentId} fileLink={quotation?.fileLink} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EnquiryDetails;

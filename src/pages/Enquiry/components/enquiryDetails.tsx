import { useQuery } from '@apollo/client';
import { getEnquiryQuery, getQuotationsQuery } from 'queries/queries';
import { FC, useEffect, useState } from 'react';
import EnquiryDetailCard from './enquiryDetailCard';

const EnquiryDetails: FC = () => {
  const { data } = useQuery(getQuotationsQuery, {
    variables: { quotationQueryOption: { userId: '74bd13af-0337-4bdd-a5c5-9535efdf329d' } }
  });

  // const { data: enquiryData } = useQuery(getEnquiryQuery, {
  //   variables: { id: 'location' }
  // });

  // console.log(55);

  // const [enquiryData, setEnquiryData] = useState();

  // useEffect(() => {
  //   const queryId = location.href.split('/').pop();
  //   const { data: enquiryData } = useQuery(getEnquiryQuery, {
  //     variables: { id: queryId }
  //   });

  //   console.log(66, enquiryData);
  //   // setEnquiryData(enquiryData);
  // }, [location]);

  // console.log(enquiryData);

  return (
    <div className='m-6'>
      <div className='flex w-full justify-center'>
        <span className='text-red-500 font-bold text-3xl'>Munnar</span>
        {/* <img src='icons/pay-in-icon.svg' alt='right Arrow' className='px-4' />
        <span className='text-green-700 font-bold text-3xl'>Goa</span> */}
      </div>
      <div className='flex justify-center'>Date : 12/06/24</div>
      <div className='flex justify-center'>Number of passengers : 2</div>
      <div className='flex flex-col'>
        <div className='text-xl font-bold mb-4'>Available Quotations</div>
        <div className='bg-white p-6 rounded'>
          {data?.getQuotations?.length === 0 && <div className='justify-center flex'>No Quotations Available</div>}

          {data?.getQuotations?.map((quotation) => {
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

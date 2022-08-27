import { useQuery } from '@apollo/client';
import { Button } from 'components';
import { ButtonType } from 'components/button/types';
import { getAgentQuery } from 'queries/queries';
import { FC, useEffect, useState } from 'react';
import PaymentPopUp from '../../../components/paymentpopup/paymentpopup';

interface EnquiryDetailCardProps {
  agentId: string;
  fileLink: string;
}

const EnquiryDetailCard: FC<EnquiryDetailCardProps> = ({ agentId }) => {
  const [paymentModal, setPaymentModalOpen] = useState(false);
  const [agentName, setAgentName] = useState<string>('');

  const cancelFn = () => {
    setPaymentModalOpen(false);
  };

  const { data: agentData } = useQuery(getAgentQuery, {
    variables: { id: agentId }
  });

  useEffect(() => {
    setAgentName(agentData?.getAgent?.name);
  }, [agentData]);

  return (
    <>
      {paymentModal && <PaymentPopUp cancelFn={cancelFn} />}

      <div className=' border-2 rounded p-4 shadow-md mb-4'>
        <div className='flex justify-between'>
          <div>{agentName}</div>
          <Button type={ButtonType.BLUE} onClick={() => console.log('click')} className='items-center'>
            View Quotation
          </Button>
        </div>
        <div className='flex'>
          <Button type={ButtonType.GREEN} onClick={() => setPaymentModalOpen(true)} className='items-center mr-4'>
            Accept
          </Button>
          <Button type={ButtonType.YELLOW} onClick={() => console.log('click')} className='items-center'>
            Request a Change
          </Button>
        </div>
      </div>
    </>
  );
};

export default EnquiryDetailCard;

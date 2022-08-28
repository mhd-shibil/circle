import { useQuery } from '@apollo/client';
import { Button } from 'components';
import { ButtonType } from 'components/button/types';
import PdfViewer from 'components/pdfViewer/pdfViewer';
import { getAgentQuery } from 'queries/queries';
import { FC, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import PaymentPopUp from '../../../components/paymentpopup/paymentpopup';

interface EnquiryDetailCardProps {
  agentId: string;
  fileLink: string;
}

const EnquiryDetailCard: FC<EnquiryDetailCardProps> = ({ agentId }) => {
  const [paymentModal, setPaymentModalOpen] = useState(false);
  const [pdfViewerModalOPen, setPdfViewerModalOPen] = useState(false);
  const [agentName, setAgentName] = useState<string>('');
  // const history = useHistory();

  const cancelFn = () => {
    setPaymentModalOpen(false);
  };

  const { data: agentData } = useQuery(getAgentQuery, {
    variables: { id: agentId }
  });

  useEffect(() => {
    setAgentName(agentData?.getAgent?.name);
  }, [agentData]);

  console.log(pdfViewerModalOPen);

  return (
    <>
      {paymentModal && <PaymentPopUp cancelFn={cancelFn} />}
      {pdfViewerModalOPen && (
        <PdfViewer
          onClosePdf={() => {
            setPdfViewerModalOPen(false);
          }}
          onClickPayment={() => {
            setPdfViewerModalOPen(false);
            setPaymentModalOpen(true);
          }}
        />
      )}

      <div className=' border-2 rounded p-4 shadow-md mb-4'>
        <div className='flex flex-col w-fit justify-between'>
          <div>{agentName}</div>
          <Button type={ButtonType.BLUE} onClick={() => setPdfViewerModalOPen(true)} className='items-center mt-4'>
            View Quotation
          </Button>
        </div>
        {/* <div className='flex'>
          <Button type={ButtonType.GREEN} onClick={() => setPaymentModalOpen(true)} className='items-center mr-4'>
            Accept
          </Button>
          <Button type={ButtonType.YELLOW} onClick={() => console.log('click')} className='items-center'>
            Request a Change
          </Button>
        </div> */}
      </div>
    </>
  );
};

export default EnquiryDetailCard;

import { React, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import pdf from '../../assets/sample.pdf';
import Modal from '@material-ui/core/Modal';

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }
  function changePageBack() {
    changePage(-1);
  }
  function changePageForward() {
    changePage(1);
  }

  return (
    <Modal
      open={true}
      style={{
        position: 'absolute',

        // height: 600,
        // width: 475,
        margin: 'auto'
      }}
    >
      <div className='p-4 bg-White'>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height='600' pageNumber={pageNumber} />
        </Document>
        <div
          className='position: absolute;
          left: 0;
          top: 50%;'
        >
          <p className='bg-white  p-2 rounded-md  justify-end'>
            Page {pageNumber} of {numPages}
          </p>

          {pageNumber > 1 && (
            <button className='bg-white p-2 rounded-md' onClick={changePageBack}>
              Previous Page
            </button>
          )}
          {pageNumber < numPages && (
            <button className='bg-white p-2 rounded-md' onClick={changePageForward}>
              Next Page
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default PdfViewer;

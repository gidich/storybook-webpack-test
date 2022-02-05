import React from 'react';
import logo from './logo.svg';

import {Button} from 'antd'
import { PDFViewer } from '@react-pdf/renderer';
import  TestPDF  from './test-pdf';

function App() {
  return (
    <>
      <div className='greeny'>Hi there</div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>
        <Button type="primary">Button</Button>
      </div>
      <PDFViewer>
        <TestPDF />
      </PDFViewer>
    </>
  );
}

export default App;

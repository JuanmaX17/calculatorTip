import React, { useState } from 'react';
import { WrapperCard } from '../../StyledComponents/containers';
import { Bill } from '../Bill/index.bill';
import { ResultTip } from '../ResultTip/index.resultTip';
import './analytics.css';

export function Analytics() {
  const [inputData, setInputData] = useState(false);
  const [refers, setRefers] = useState([]);
  const reset = () => {
    setInputData(false);
    refers.forEach((item) => item());
  };
  return (
    <WrapperCard gap="22px 0" bg="secondary" rows="1fr 1fr" width="100vw" radius="28px 28px 0 0" className="bill">
      <Bill setInputData={setInputData} setRefers={setRefers} />
      <ResultTip inputData={inputData} reset={reset} />
    </WrapperCard>
  );
}

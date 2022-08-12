/* eslint-disable dot-notation */
/* eslint-disable react/prop-types */
import React from 'react';
import { WrapperCard } from '../../StyledComponents/containers';
import { Tip } from '../Tip/index.tip';
import { Button } from '../../StyledComponents/buttons';

export function ResultTip({ inputData, reset }) {
  console.log('ole', inputData);
  let tipAmoun = 0;
  let total = 0;
  if (inputData) {
    const bill = +inputData['Bill'].data;
    const nOfPeople = +inputData['Number of People'].data;
    const selectTip = +inputData['Select Tip %'].data;
    const result1 = (bill * selectTip) / 100 / nOfPeople;
    const result2 = (bill + (bill * selectTip) / 100) / nOfPeople;
    tipAmoun = result1.toFixed(2);
    total = result2.toFixed(2);
    console.log('bool', total);
  }
  return (
    <WrapperCard bg="tertiary" rows="autp auto auto">
      <Tip name="Tip Amount" per="/ person" value={tipAmoun} />
      <Tip name="Total" per="/ person" value={total} />
      <Button type="button" onClick={reset}>RESET</Button>
    </WrapperCard>
  );
}

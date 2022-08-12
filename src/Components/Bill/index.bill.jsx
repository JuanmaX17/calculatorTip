/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { MdAttachMoney } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { Container } from '../Container/index.container';
import { InputField } from '../Input/index.input';
import { SelectTip } from '../SelectTip/index.selectTip';

const items = [
  { value: '5' },
  { value: '10' },
  { value: '15' },
  { value: '25' },
  { value: '50' },
  { value: 'Custom' },
];

export function Bill({ setInputData, setRefers }) {
  const [isOkay, setIsOkay] = useState({});
  const valuesField = Object.values(isOkay);
  const itsOkayFiled = valuesField.every((item) => item.status === true);

  useEffect(() => {
    if (itsOkayFiled && valuesField.length === 3) {
      setInputData(isOkay);
    }
    setRefers((state) => state.concat(() => setIsOkay({})));
  }, [isOkay]);

  return (
    <Container bg="secondary" rows="auto auto auto" gap="20px">
      <InputField name="Bill" Icon={MdAttachMoney} handleIsOkay={setIsOkay} setRefers={setRefers} />
      <SelectTip name="Select Tip %" items={items} handleIsOkay={setIsOkay} setRefers={setRefers} />
      <InputField name="Number of People" Icon={BsFillPersonFill} handleIsOkay={setIsOkay} setRefers={setRefers} />
    </Container>
  );
}

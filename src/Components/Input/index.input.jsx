/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';
import { Input, IconWrap } from '../../StyledComponents/Inputs';
import { useChange } from '../../Hooks/useChange';
import './input.css';

export function InputField({
  name, Icon, handleIsOkay, setRefers,
}) {
  const refField = useRef();
  const [handleChange] = useChange(handleIsOkay, name);

  useEffect(() => {
    setRefers((state) => state.concat(() => {
      refField.current.value = '';
    }));
  }, []);

  return (
    <div className="inputBox">
      <label className="label" htmlFor={name}>{name}</label>
      <div className="inputFiled">
        <IconWrap>
          <Icon />
        </IconWrap>
        <Input ref={refField} name={name} id={name} placeholder="0" onChange={handleChange} />
      </div>
    </div>
  );
}

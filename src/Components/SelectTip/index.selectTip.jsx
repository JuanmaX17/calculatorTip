/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import { useChange } from '../../Hooks/useChange';
import { ButtonPercent } from '../ButtonPercent/index.buttonPercent';
import './selectTip.css';

export function SelectTip({
  name, items, handleIsOkay, setRefers,
}) {
  const [activeElm, setActiveElm] = useState([]);
  const [handleChange] = useChange(handleIsOkay, name);
  const refCustom = useRef();
  const handleChangeInter = (e) => {
    setActiveElm([]);
    handleChange(e);
  };
  const handleState = (isOkay, value) => {
    handleIsOkay((state) => {
      const form = {
        status: isOkay,
        data: value,
      };
      const newState = { ...state, [name]: form };
      return newState;
    });
  };

  const handleClick = (id) => {
    refCustom.current.value = '';
    if (activeElm.includes(id)) {
      setActiveElm([]);
      handleState(false, '');
      return;
    }
    handleState(true, id);
    setActiveElm([id]);
  };

  const handleClass = (id) => (
    activeElm.includes(id) ? 'selectTip__select' : ''
  );

  useEffect(() => {
    setRefers((state) => state.concat(() => setActiveElm([])));
  }, []);
  return (
    <section className="selectTip__section">
      <span className="selectTip__subTitle">{name}</span>
      <div className="selectTip__items">
        {
          items.map((item, index) => (
            items.length - 1 === index
              ? <input ref={refCustom} onChange={handleChangeInter} key={item.value} className="selectTip__custom" type="number" placeholder="Custom" />
              : (
                <ButtonPercent
                  key={item.value}
                  value={item.value}
                  handleClass={handleClass}
                  handleClick={handleClick}
                />
              )
          ))
        }
      </div>
    </section>

  );
}

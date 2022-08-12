/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
import React from 'react';

export function ButtonPercent({	value, handleClass, handleClick }) {
  return (
    <button
      type="button"
      className={`selectTip__item ${handleClass(value)}`}
      key={value}
      onClick={() => handleClick(value)}
    >
      {value}
      %
    </button>
  );
}

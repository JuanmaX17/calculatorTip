/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './tip.css';

// eslint-disable-next-line react/prop-types
export function Tip({ name, per, value }) {
  return (
    <div className="tip">
      <div className="tip__mount">
        <span>{name}</span>
        <span>{per}</span>
      </div>
      <span>${value}</span>
    </div>
  );
}

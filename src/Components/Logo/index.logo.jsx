import React from 'react';
import { Figure } from '../../StyledComponents/logo';
import LogoSvg from '../../Img/logo.svg';

export function Logo() {
  return (
    <Figure>
      <img src={LogoSvg} alt="logo" />
    </Figure>
  );
}

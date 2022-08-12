/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { WrapperCenter } from '../../StyledComponents/containers';

export function Container(props) {
  const { children, ...rest } = props;
  return (
    <WrapperCenter {...rest}>
      {children}
    </WrapperCenter>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

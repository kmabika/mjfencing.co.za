import React from 'react';
import PropTypes from 'prop-types';

import { IconContainer } from './styled';

const Icon = ({ icon: IconElement, IconProps, ...props }) => (
  <IconContainer {...props}>
    <IconElement width={undefined} height={undefined} {...IconProps} />
  </IconContainer>
);

Icon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  gradient: PropTypes.string,
  IconProps: PropTypes.object,
};

export default Icon;

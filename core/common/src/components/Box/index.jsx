import React from 'react';
import PropTypes from 'prop-types';

import { BoxWrapper } from './styled';

const Box = React.forwardRef(({ children, ...props }, ref) => (
  <BoxWrapper ref={ref} {...props}>
    {children}
  </BoxWrapper>
));

Box.propTypes = {
  children: PropTypes.node,
  flexBox: PropTypes.bool,
};

Box.defaultProps = {
  flexBox: false,
};

export default Box;

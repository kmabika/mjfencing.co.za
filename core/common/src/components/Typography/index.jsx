import React from 'react';
import PropTypes from 'prop-types';

import { TypographyContainer } from './styled';

const Typography = ({ children, ...props }) => <TypographyContainer {...props}>{children}</TypographyContainer>;

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf([
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'body1',
      'body2',
      'body',
      'quote1',
      'quote2',
      'small',
      'large',
    ]),
    PropTypes.object,
  ]),
};

Typography.defaultProps = {
  variant: null,
  as: null,
};

export default Typography;

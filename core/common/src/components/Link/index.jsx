import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from './styled.components';


const Link = ({ children, ...props }) => <LinkContainer {...props}>{children}</LinkContainer>;

Link.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType,
};

Link.defaultProps = {
  as: 'a',
};

export default Link;

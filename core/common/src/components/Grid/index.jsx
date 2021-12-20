import React from 'react';
import PropTypes from 'prop-types';
import { GridWrapper } from './styled';

const Grid = ({ children, ...props }) => <GridWrapper {...props}>{children}</GridWrapper>;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;

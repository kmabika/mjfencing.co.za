import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';

import * as _ from 'lodash';

import { SliderContainer } from './styled';

const Slider = ({ options, children, ...props }) => {
  const ref = useRef();

  return (
    <SliderContainer {...props}>
      <Slick ref={ref} {...options}>
        {_.isFunction(children) ? children(ref) : children}
      </Slick>
    </SliderContainer>
  );
};

Slider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  options: PropTypes.object,
};

export default Slider;

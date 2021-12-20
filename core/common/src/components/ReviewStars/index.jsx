import React from 'react';
import PropTypes from 'prop-types';

import range from 'lodash/range';

import { ReviewStarsContainer } from './styled';

import Star from './Star';

const ReviewStars = ({ rate, ...props }) => (
  <ReviewStarsContainer {...props}>
    {range(rate).map(star => (
      <Star active key={star} />
    ))}
    {range(5 - rate).map(star => (
      <Star key={star} />
    ))}
  </ReviewStarsContainer>
);

ReviewStars.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default ReviewStars;

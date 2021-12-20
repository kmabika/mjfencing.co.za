import React from 'react';
import PropTypes from 'prop-types';
import { IconWrapper, ButtonWrapper } from './styled';
import Icon from '../Icon';

const Button = ({ children, icon, iconPlacement, ...props }) => (
  <ButtonWrapper {...props}>
    {icon && iconPlacement === 'left' && (
      <IconWrapper placement={iconPlacement}>
        <Icon icon={icon} />
      </IconWrapper>
    )}
    <span>{children}</span>
    {icon && iconPlacement === 'right' && (
      <IconWrapper placement={iconPlacement}>
        <Icon icon={icon} />
      </IconWrapper>
    )}
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType,
  icon: PropTypes.elementType,
  iconPlacement: PropTypes.oneOf(['left', 'right']),
};

Button.defaultProps = {
  as: 'button',
  iconPlacement: 'right',
};

export default Button;

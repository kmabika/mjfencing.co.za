import { css } from 'styled-components';

import { IconContainer as Icon } from '@core/components/Icon/styled';

import Typography from '../Typography';
import { body, colors, transition } from '../../styles';

const Input = {
  main: css`
    position: relative;
    display: block;
    width: 100%;
    min-height: 50px;
    padding: 12px 24px;
    font-family: ${body.fontFamily};
    font-size: 18px;
    line-height: 1.6;
    color: ${colors.gray[1]};
    background: none;
    border: none;
    outline: none !important;
    transition: ${transition.all};
    -webkit-appearance: none;

    ::placeholder {
      color: ${colors.gray[2]};
      opacity: 1;
    }

    textarea& {
      min-height: 180px;
    }

    & + ${Icon} {
      margin-left: 0;
    }

    ${Icon} + & {
      margin-left: -24px;
    }
  `,
  Label: {
    main: css`
      ${Typography.variants.label};
      display: block;
      margin-bottom: 8px;
    `,
  },
  Wrapper: {
    main: css`
      & + & {
        margin-top: 16px;
      }
    `,
  },
  ErrorMessage: {
    main: css`
      display: flex;
      align-items: center;
      padding-top: 8px;
      font-family: ${body.fontFamily};
      font-size: 14px;
      color: ${colors.error};
    `,
  },
  InputWrapper: {
    main: css`
      position: relative;
      display: flex;
      align-items: stretch;
      color: ${colors.gray[3]};
      border: 2px solid ${colors.gray[4]};
      transition: ${transition.all};

      ${Icon} {
        align-self: center;
        margin: 0 24px;
        font-size: 24px;
      }

      .date &::after {
        position: absolute;
        top: 16px;
        right: 18px;
        display: block;
        width: 24px;
        height: 24px;
        padding: 0;
        color: rgba(0, 0, 0, 0);
        pointer-events: none;
        content: '';
        opacity: 1;
      }

      .focused & {
        border-color: ${colors.gray[2]};
      }

      .error & {
        border-color: ${colors.error};
      }

      .success & {
        border-color: ${colors.success};
      }
    `,
  },
};

export default Input;
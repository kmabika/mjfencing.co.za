import { css } from 'styled-components';
import { transparentize } from 'polished';
import { breakpoints,colors, transition } from '../../styles';


const Slider = {
  main: css`

  .slick-list {
    margin: 0 -2000px;

    @media (max-width: ${breakpoints.md}) {
      margin: 0 -16px;
    }
  }

  .slick-slide {
    opacity: 0.3;
    transition: ${transition.all};

    &.slick-active {
      opacity: 1;
    }
  }

  .slick-arrow {
    position: absolute;
    top: 50%;
    z-index: 99;
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    margin-top: -28px;
    font-size: 32px;
    color: ${colors.gray[6]};
    cursor: pointer;
    background-color: ${colors.shades.primary[0]};
    border: 0;
    border-radius: 50%;
    outline: none;
    box-shadow: 0 24px 48px ${transparentize(0.8, colors.shades.primary[2])};
    transition: ${transition.all};
    appearance: none;

    &.slick-prev {
      left: 0;
    }

    &.slick-next {
      right: 0;
    }

    &:hover {
      background-color: ${colors.shades.primary[0]};
    }

    &:active,
    &:focus {
      background-color: ${colors.shades.primary[1]};
    }

    &.slick-disabled {
      cursor: default;
      background-color: ${colors.gray[4]} !important;
      box-shadow: none;
    }

    svg {
      display: block;
    }
  }


    position: relative;

    .slick-dots {
      position: absolute;
      bottom: -24px;
      display: flex !important;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0;
      margin: 0;
      list-style: none;

      button {
        display: block;
        width: 8px;
        height: 8px;
        padding: 0;
        margin: 0 4px;
        text-indent: -9999px;
        cursor: pointer;
        background-color: ${colors.gray[4]};
        border: none;
        border-radius: 50%;
        outline: none;
        transition: ${transition.all};

        &:hover {
          background-color: ${colors.gray[2]};
        }
      }

      .slick-active button {
        background-color: ${colors.gray[0]};
      }
    }

    ${props =>
      props.variant &&
      css`
        &::before {
          position: absolute;
          z-index: -1;
          top: -32px;
          bottom: 92px;
          ${props.variant === 'a'
            ? css`
                right: -16px;
                left: 80px;
              `
            : css`
                left: -16px;
                right: 80px;
              `};
          display: block;
          content: '';
          background-color: ${colors.brand};
        }

        &::after {
          position: absolute;
          ${props.variant === 'a'
            ? css`
                left: -16px;
              `
            : css`
                right: -16px;
              `};
          bottom: -16px;
          z-index: -1;
          width: 64px;
          height: 64px;
          display: block;
          content: '';
          background-color: ${colors.gray[0]};
        }
      `}
  `,
};

export default Slider;
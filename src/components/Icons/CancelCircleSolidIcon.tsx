import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const CancelCircleSolidIcon: React.FC<TIcon> = ({
  className,
  color,
  size,
  style,
  withBox,
}) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 20 20' : '0 0 16 16'}
          className={className}
          fill={color}
          style={style}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0C12.406 0 16 3.594 16 8C16 12.406 12.406 16 8 16C3.594 16 0 12.406 0 8C0 3.594 3.594 0 8 0ZM10.875 3.75L8.031 6.563L5.22 3.75L3.812 5.156L6.626 8L3.813 10.844L5.22 12.25L8.032 9.406L10.876 12.25L12.282 10.844L9.437 8L12.281 5.156L10.875 3.75Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 24 24' : '0 0 20 20'}
          className={className}
          fill={color}
          style={style}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 5.01048e-06C11.3136 -0.00131055 12.6145 0.256449 13.8284 0.75853C15.0422 1.26061 16.1452 1.99716 17.074 2.926C18.0029 3.85485 18.7394 4.95777 19.2415 6.17162C19.7436 7.38546 20.0013 8.68642 20 10C20.0013 11.3136 19.7436 12.6145 19.2415 13.8284C18.7394 15.0422 18.0029 16.1452 17.074 17.074C16.1452 18.0029 15.0422 18.7394 13.8284 19.2415C12.6145 19.7436 11.3136 20.0013 10 20C8.68642 20.0013 7.38546 19.7436 6.17162 19.2415C4.95777 18.7394 3.85485 18.0029 2.926 17.074C1.99716 16.1452 1.26061 15.0422 0.75853 13.8284C0.256449 12.6145 -0.00131055 11.3136 5.01048e-06 10C-0.00131055 8.68642 0.256449 7.38546 0.75853 6.17162C1.26061 4.95777 1.99716 3.85485 2.926 2.926C3.85485 1.99716 4.95777 1.26061 6.17162 0.75853C7.38546 0.256449 8.68642 -0.00131055 10 5.01048e-06ZM13.5 5.50001C13.25 5.50001 13.031 5.59401 12.781 5.81301L10 8.592L7.21901 5.78201C7.031 5.59501 6.71901 5.50101 6.50001 5.50101C6.03101 5.50101 5.50001 5.87601 5.50001 6.50101C5.50001 6.72001 5.56301 6.97001 5.78101 7.22001L8.594 10L5.78001 12.813C5.60388 12.9989 5.50365 13.244 5.49901 13.5C5.49901 13.969 5.874 14.5 6.499 14.5C6.718 14.5 6.96801 14.406 7.18701 14.219L10 11.406L12.781 14.219C12.969 14.406 13.281 14.5 13.5 14.5C13.969 14.5 14.5 14.125 14.5 13.5C14.5024 13.3722 14.4787 13.2453 14.4304 13.1271C14.3821 13.0088 14.3101 12.9016 14.219 12.812L11.406 10L14.187 7.21901C14.285 7.12647 14.3632 7.01506 14.417 6.8915C14.4708 6.76794 14.499 6.63477 14.5 6.50001C14.5 5.96901 14.062 5.50001 13.5 5.50001Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-2 -2 32 32' : '0 0 28 28'}
          className={className}
          fill={color}
          style={style}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 0C21.719 0 28 6.281 28 14C28 21.719 21.719 28 14 28C6.281 28 0 21.719 0 14C0 6.281 6.281 0 14 0ZM19.563 7.5C19.4311 7.49851 19.3002 7.5233 19.1779 7.57292C19.0557 7.62253 18.9446 7.69599 18.851 7.789L14 12.625L9.086 7.726C8.914 7.555 8.687 7.5 8.469 7.5C7.938 7.5 7.5 7.906 7.5 8.438C7.5 8.688 7.586 8.945 7.789 9.148L12.625 14L7.726 18.914C7.555 19.086 7.5 19.312 7.5 19.531C7.5 20.063 7.906 20.5 8.438 20.5C8.56961 20.5014 8.7002 20.4766 8.82211 20.427C8.94402 20.3774 9.05481 20.304 9.148 20.211L14 15.375L18.914 20.274C19.086 20.445 19.312 20.5 19.531 20.5C20.063 20.5 20.5 20.094 20.5 19.562C20.5012 19.4304 20.4763 19.2999 20.4267 19.178C20.3771 19.0561 20.3038 18.9453 20.211 18.852L15.375 14L20.274 9.086C20.445 8.914 20.5 8.687 20.5 8.469C20.5 7.938 20.094 7.5 19.562 7.5H19.563Z"
          />
        </LargeSvg>
      );
  }
};

CancelCircleSolidIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

CancelCircleSolidIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default CancelCircleSolidIcon;

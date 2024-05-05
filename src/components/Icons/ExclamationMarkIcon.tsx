import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const ExclamationMarkIcon: React.FC<TIcon> = ({
  className,
  color,
  size,
  style,
  withBox,
}) => {
  switch (size) {
    case 'SOLID':
      return (
        <SmallSvg
          id="Exclamation_Mark_Icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={style}
          fill={color}
          viewBox={withBox ? '0 -1 20 20' : '2 2 16 16'}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0C12.406 0 16 3.594 16 8C16 12.406 12.406 16 8 16C3.594 16 0 12.406 0 8C0 3.594 3.594 0 8 0ZM8 10.219C7.469 10.219 7 10.656 7 11.188C7 11.75 7.469 12.188 8 12.188C8.563 12.188 9 11.75 9 11.188C8.9987 11.0584 8.97174 10.9304 8.92065 10.8114C8.86956 10.6923 8.79538 10.5846 8.70238 10.4944C8.60939 10.4042 8.49943 10.3333 8.37886 10.2858C8.2583 10.2384 8.12953 10.2154 8 10.218V10.219ZM9 4H7V9H9V4Z"
          />
        </SmallSvg>
      );
    case 'SMALL':
      return (
        <SmallSvg
          id="Exclamation_Mark_Icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={style}
          fill={color}
          viewBox={withBox ? '0 -1 20 20' : '2 2 16 16'}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 2C14.406 2 18 5.594 18 10C18 14.406 14.406 18 10 18C5.594 18 2 14.406 2 10C2 5.594 5.594 2 10 2ZM10 4C6.687 4 4 6.688 4 10C4 13.313 6.688 16 10 16C13.313 16 16 13.312 16 10C16 6.687 13.312 4 10 4ZM10 12C10.563 12 11 12.444 11 12.984C11.0028 13.1168 10.979 13.2489 10.9299 13.3724C10.8809 13.4959 10.8076 13.6083 10.7144 13.703C10.6211 13.7977 10.5099 13.8727 10.3872 13.9238C10.2645 13.9748 10.1329 14.0007 10 14C9.469 14 9 13.556 9 12.984C9 12.444 9.469 12 10 12ZM11 6V11H9V6H11Z"
          />
        </SmallSvg>
      );
    case 'MEDIUM':
      return (
        <MediumSvg
          id="Exclamation_Mark_Icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={style}
          fill={color}
          viewBox={withBox ? '0 0 24 24' : '2 2 20 20'}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.00001C13.3136 1.99869 14.6145 2.25645 15.8284 2.75853C17.0422 3.26061 18.1452 3.99716 19.074 4.926C20.0029 5.85485 20.7394 6.95777 21.2415 8.17162C21.7436 9.38546 22.0013 10.6864 22 12C22.0013 13.3136 21.7436 14.6145 21.2415 15.8284C20.7394 17.0422 20.0029 18.1452 19.074 19.074C18.1452 20.0029 17.0422 20.7394 15.8284 21.2415C14.6145 21.7436 13.3136 22.0013 12 22C10.6864 22.0013 9.38546 21.7436 8.17162 21.2415C6.95777 20.7394 5.85485 20.0029 4.926 19.074C3.99716 18.1452 3.26061 17.0422 2.75853 15.8284C2.25645 14.6145 1.99869 13.3136 2.00001 12C1.99869 10.6864 2.25645 9.38546 2.75853 8.17162C3.26061 6.95777 3.99716 5.85485 4.926 4.926C5.85485 3.99716 6.95777 3.26061 8.17162 2.75853C9.38546 2.25645 10.6864 1.99869 12 2.00001V2.00001ZM12 4.00001C7.594 4.00001 4.00001 7.594 4.00001 12C4.00001 16.406 7.594 20 12 20C16.406 20 20 16.406 20 12C20 7.594 16.406 4.00001 12 4.00001ZM11 13.062V7.00001C11 6.43701 11.469 6.00001 12.031 6.00001C12.594 6.00001 13 6.43801 13 7.00001V13.062C13 13.625 12.594 14.032 12.031 14.032C11.469 14.032 11 13.594 11.001 13.062H11ZM12.025 17.812C12.65 17.812 13.15 17.312 13.15 16.687C13.15 16.062 12.65 15.562 12.025 15.562C11.4 15.562 10.9 16.062 10.9 16.688C10.9 17.313 11.4 17.813 12.025 17.813V17.812Z"
          />
        </MediumSvg>
      );
    case 'LARGE':
    default:
      return (
        <LargeSvg
          id="Exclamation_Mark_Icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={style}
          fill={color}
          viewBox={withBox ? '0 0 32 32' : '2 2 28 28'}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 2C23.719 2 30 8.281 30 16C30 23.719 23.719 30 16 30C8.281 30 2 23.719 2 16C2 8.281 8.281 2 16 2ZM16 4C9.375 4 4 9.375 4 16C4 22.625 9.375 28 16 28C22.625 28 28 22.625 28 16C28 9.375 22.625 4 16 4ZM16 9C16.438 9 17 9.25 17 10V17.75C17 18.313 16.562 18.75 16 18.75C15.469 18.75 15 18.344 15 17.75V10C15 9.437 15.438 9 16 9ZM16 23.344C16.75 23.344 17.344 22.719 17.344 22C17.344 21.25 16.75 20.656 16 20.656C15.281 20.656 14.656 21.25 14.656 22C14.656 22.719 15.281 23.344 16 23.344Z"
          />
        </LargeSvg>
      );
  }
};

ExclamationMarkIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

ExclamationMarkIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default ExclamationMarkIcon;

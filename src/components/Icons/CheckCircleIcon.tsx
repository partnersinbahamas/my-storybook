import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const CheckCircleIcon: React.FC<TIcon> = ({ className, color, size, style, withBox }) => {
  switch (size) {
    case 'SMALL':
      return (
        <SmallSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '0 0 20 20' : '2 2 16 16'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 2C14.406 2 18 5.594 18 10C18 14.406 14.406 18 10 18C5.594 18 2 14.406 2 10C2 5.594 5.594 2 10 2ZM10 4C8.4087 4 6.88258 4.63214 5.75736 5.75736C4.63214 6.88258 4 8.4087 4 10C4 11.5913 4.63214 13.1174 5.75736 14.2426C6.88258 15.3679 8.4087 16 10 16C13.312 16 16 13.313 16 10C16 6.687 13.312 4 10 4ZM12.782 7.096L14.187 8.501L8.871 13.817L6.028 11.031L7.432 9.627L8.85 11L12.783 7.097L12.782 7.096Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '0 0 24 24' : '2 2 20 20'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.00001C13.3136 1.99869 14.6145 2.25645 15.8284 2.75853C17.0422 3.26061 18.1452 3.99716 19.074 4.926C20.0029 5.85485 20.7394 6.95777 21.2415 8.17162C21.7436 9.38546 22.0013 10.6864 22 12C22.0013 13.3136 21.7436 14.6145 21.2415 15.8284C20.7394 17.0422 20.0029 18.1452 19.074 19.074C18.1452 20.0029 17.0422 20.7394 15.8284 21.2415C14.6145 21.7436 13.3136 22.0013 12 22C10.6864 22.0013 9.38546 21.7436 8.17162 21.2415C6.95777 20.7394 5.85485 20.0029 4.926 19.074C3.99716 18.1452 3.26061 17.0422 2.75853 15.8284C2.25645 14.6145 1.99869 13.3136 2.00001 12C1.99869 10.6864 2.25645 9.38546 2.75853 8.17162C3.26061 6.95777 3.99716 5.85485 4.926 4.926C5.85485 3.99716 6.95777 3.26061 8.17162 2.75853C9.38546 2.25645 10.6864 1.99869 12 2.00001V2.00001ZM12 4.00001C7.562 4.00001 4.00001 7.563 4.00001 12C4.00001 16.438 7.563 20 12 20C16.438 20 20 16.437 20 12C20 7.562 16.437 4.00001 12 4.00001ZM16.5 8.37501C17.063 8.37501 17.531 8.84401 17.531 9.34401C17.531 9.59401 17.469 9.844 17.219 10.094L10.844 16.438C10.7508 16.535 10.6392 16.6125 10.5158 16.6661C10.3923 16.7196 10.2595 16.7481 10.125 16.75C9.875 16.75 9.65601 16.656 9.43701 16.437L6.72001 13.72C6.53686 13.5252 6.43555 13.2674 6.43701 13C6.43701 12.437 6.90701 12 7.43701 12C7.71901 12 7.90701 12.094 8.12501 12.313L10.156 14.313L15.812 8.65601C15.9026 8.56624 16.01 8.49522 16.128 8.447C16.2461 8.39879 16.3725 8.37432 16.5 8.37501V8.37501Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '0 0 32 32' : '2 2 28 28'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 2C23.719 2 30 8.281 30 16C30 23.719 23.719 30 16 30C8.281 30 2 23.719 2 16C2 8.281 8.281 2 16 2ZM16 4C9.375 4 4 9.375 4 16C4 22.625 9.375 28 16 28C22.625 28 28 22.625 28 16C28 9.375 22.625 4 16 4ZM22.973 10.563C23.539 10.563 24.019 11.037 24.019 11.571C24.019 11.799 23.926 12.043 23.688 12.281L14.25 21.72C14.16 21.809 14.0534 21.8793 13.9362 21.927C13.819 21.9747 13.6935 21.9989 13.567 21.998C13.348 21.998 13.127 21.928 12.937 21.782L12.844 21.72L8.344 17.22C8.24816 17.1263 8.17185 17.0145 8.1195 16.891C8.06715 16.7676 8.03979 16.6351 8.039 16.501C8.039 15.94 8.509 15.486 9.061 15.486C9.286 15.486 9.524 15.571 9.75 15.782L13.563 19.595L22.281 10.845C22.3721 10.7548 22.4802 10.6836 22.5989 10.6354C22.7177 10.5872 22.8448 10.5629 22.973 10.564V10.563Z"
          />
        </LargeSvg>
      );
  }
};

CheckCircleIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

CheckCircleIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default CheckCircleIcon;
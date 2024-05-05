import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const ChevronUpIcon: React.FC<TIcon> = ({
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
          viewBox={withBox ? '-3 -5 18 18' : '0 0 12 7'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.994 7C0.730526 6.99895 0.47816 6.89374 0.291948 6.70735C0.105737 6.52095 0.000789899 6.26847 0 6.005C0 5.739 0.133 5.474 0.298 5.308L5.304 0.298C5.503 0.0999999 5.768 0 6 0C6.227 0 6.455 0.0729998 6.62 0.22L11.702 5.308C11.901 5.474 12 5.739 12 6.005C11.9992 6.26847 11.8943 6.52095 11.7081 6.70735C11.5218 6.89374 11.2695 6.99895 11.006 7C10.74 7 10.476 6.9 10.276 6.701L6 2.421L1.724 6.701C1.524 6.901 1.26 7 0.994 7Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-4 -7 22 22' : '0 0 14 8'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 8.00001C13.563 8.00001 14 7.56201 14 7.00001C14 6.75001 13.875 6.50001 13.687 6.31201L7.719 0.282014C7.52419 0.0995608 7.2669 -0.00135115 7 1.36656e-05C6.75 1.36656e-05 6.469 0.0940138 6.281 0.281014L0.312 6.31301C0.125 6.50001 0 6.75001 0 7.00001C0 7.56301 0.438 8.00001 1 8.00001C1.281 8.00001 1.5 7.90601 1.719 7.71901L7 2.43801L12.281 7.71801C12.3758 7.8108 12.4884 7.88357 12.6119 7.93202C12.7354 7.98046 12.8674 8.00358 13 8.00001Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-5 -9 28 28' : '0 0 18 10'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 10C17.562 10 18 9.593 18 9C18 8.75 17.906 8.5 17.719 8.281L9.71898 0.281C9.52108 0.103629 9.2657 0.00382304 8.99998 0C8.74998 0 8.49998 0.0940001 8.28098 0.281L0.280977 8.281C0.103969 8.47904 0.00452389 8.7344 0.000976562 9C0.000976563 9.25 0.0939768 9.5 0.280977 9.718C0.47894 9.89604 0.734758 9.99623 1.00098 10C1.25098 10 1.50098 9.906 1.71898 9.718L8.99998 2.406L16.281 9.718C16.4787 9.89581 16.7341 9.99599 17 10Z"
          />
        </LargeSvg>
      );
  }
};

ChevronUpIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

ChevronUpIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default ChevronUpIcon;

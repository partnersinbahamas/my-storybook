import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
  withBox?: boolean;
};

const HelpIcon = ({ className, color, style, withBox }: TProps) => (
  <Svg
    id="Info_Icon"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={style}
    fill={color}
    viewBox={withBox ? '-2 -2 16 16' : '0 0 12 12'}
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM4.5 3.37354V4.53369C4.72266 4.42529 4.90283 4.34766 5.04053 4.30078C5.30713 4.20996 5.57812 4.16455 5.85352 4.16455C6.1582 4.16455 6.37354 4.23047 6.49951 4.3623C6.60205 4.46777 6.65332 4.62744 6.65332 4.84131C6.65332 5.07568 6.59326 5.26611 6.47314 5.4126C6.39111 5.51514 6.23438 5.6543 6.00293 5.83008C5.68066 6.07617 5.47266 6.26953 5.37891 6.41016C5.25 6.61523 5.18555 6.8335 5.18555 7.06494V7.60986H6.35889V7.24072C6.35889 7.12354 6.42188 7.00928 6.54785 6.89795C6.62109 6.8335 6.77344 6.7207 7.00488 6.55957C7.43555 6.25781 7.72852 6.01318 7.88379 5.82568C8.11523 5.55029 8.23096 5.18115 8.23096 4.71826C8.23096 4.22021 8.09619 3.83057 7.82666 3.54932C7.47803 3.18311 6.93457 3 6.19629 3C5.78906 3 5.41113 3.05273 5.0625 3.1582C4.91895 3.20215 4.73145 3.27393 4.5 3.37354ZM5.18994 8.4668C5.04639 8.61328 4.97461 8.79492 4.97461 9.01172C4.97461 9.24316 5.04639 9.43359 5.18994 9.58301C5.34521 9.74414 5.54004 9.82471 5.77441 9.82471C6.00879 9.82471 6.20361 9.74414 6.35889 9.58301C6.50244 9.43359 6.57422 9.24756 6.57422 9.0249C6.57422 8.80225 6.50244 8.61621 6.35889 8.4668C6.20361 8.30566 6.00879 8.2251 5.77441 8.2251C5.54297 8.2251 5.34814 8.30566 5.18994 8.4668Z"
    />
  </Svg>
);

HelpIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

HelpIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
  withBox: false,
};

export default React.memo<TProps>(HelpIcon);

import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

type TProps = {
  className?: string;
  color?: string;
  style?: { [cssAttribute: string]: string };
};

/**
 * @deprecated use ErrorTriangleIcon instead
 * @param param0
 * @returns
 */
const WarnIcon: React.FC<TProps> = ({ className, color, style }) => (
  <Svg
    className={className}
    fill={color}
    style={style}
    viewBox="0 0 28 27"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 1.01268e-05C15.132 1.01268e-05 16.17 0.61201 16.71 1.61501L27.653 22.548C27.897 23 28 23.483 28 24C28 25.735 26.73 27 25 27H3.143C1.41 27 0 25.73 0 24C0 23.483 0.103 23 0.347 22.548L11.29 1.61501C11.5531 1.12565 11.9442 0.716941 12.4215 0.432504C12.8988 0.148067 13.4444 -0.00141722 14 1.01268e-05ZM14 1.84301C13.644 1.84301 13.354 2.10201 13.094 2.58501L2.104 23.485C2.01934 23.6313 1.97163 23.7961 1.965 23.965C1.965 24.397 2.353 25 3 25L24.965 25.035C25.518 25.035 26 24.52 26 24C25.9937 23.8312 25.9463 23.6664 25.862 23.52L14.906 2.58501C14.646 2.10201 14.356 1.84301 14 1.84301ZM12.61 21.596C12.61 22.34 13.256 22.986 14 22.986C14.3678 22.9834 14.7199 22.8361 14.98 22.576C15.2401 22.3159 15.3874 21.9639 15.39 21.596C15.3913 21.4131 15.3563 21.2318 15.2869 21.0625C15.2175 20.8933 15.1152 20.7395 14.9858 20.6102C14.8565 20.4808 14.7027 20.3785 14.5335 20.3091C14.3643 20.2397 14.1829 20.2047 14 20.206C13.6322 20.2086 13.2801 20.3559 13.02 20.616C12.7599 20.8761 12.6126 21.2282 12.61 21.596ZM12.965 17.166V8.01801C12.965 7.43601 13.418 6.95101 14 6.95101C14.582 6.95101 15.035 7.43701 15.035 8.01801V17.166C15.035 17.748 14.582 18.233 14 18.233C13.418 18.233 12.965 17.748 12.965 17.166Z"
    />
  </Svg>
);

WarnIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
};

WarnIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  style: {},
};

export default WarnIcon;

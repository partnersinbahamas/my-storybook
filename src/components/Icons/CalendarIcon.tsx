import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const CalendarIcon: React.FC<TIcon> = ({
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
          viewBox={withBox ? '-2 -2 18 18' : '0 0 14 14'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 13.003V2.992C0 2.444 0.45 1.994 0.997 1.994H2.992V0.997C2.992 0.45 3.442 0 3.989 0C4.556 0 5.006 0.45 5.006 0.997V1.994H8.994V0.997C8.994 0.45 9.444 0 10.011 0C10.559 0 11.008 0.45 11.008 0.997V1.994H13.003C13.55 1.994 14 2.444 14 2.992V13.002C14 13.55 13.55 14 13.003 14H0.997C0.45 14 0 13.55 0 13.003ZM1.994 12.006H12.006V7.997H1.994V12.006ZM1.994 6.003H12.006V3.989L1.994 4.009V6.003Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-3 -3 22 22' : '0 0 16 16'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.012 -1.94872e-05C11.647 -1.94872e-05 12 0.49198 12 0.98798V1.99998H13.506C13.8341 1.99812 14.1592 2.06136 14.4626 2.18604C14.7661 2.31072 15.0417 2.49436 15.2737 2.72632C15.5057 2.95828 15.6893 3.23395 15.814 3.53737C15.9387 3.8408 16.0019 4.16595 16 4.49398V13.506C16.0019 13.834 15.9387 14.1592 15.814 14.4626C15.6893 14.766 15.5057 15.0417 15.2737 15.2736C15.0417 15.5056 14.7661 15.6892 14.4626 15.8139C14.1592 15.9386 13.8341 16.0018 13.506 16H2.49404C2.166 16.0018 1.84086 15.9386 1.53743 15.8139C1.23401 15.6892 0.958335 15.5056 0.726375 15.2736C0.494415 15.0417 0.310779 14.766 0.186102 14.4626C0.0614241 14.1592 -0.00181736 13.834 3.97445e-05 13.506V4.49398C0.000304769 3.83261 0.26315 3.19841 0.730808 2.73075C1.19847 2.26309 1.83267 2.00025 2.49404 1.99998H4.00004V0.98798C4.00004 0.49398 4.37204 -1.94872e-05 4.99604 -1.94872e-05C5.12731 -0.00282628 5.25781 0.0206923 5.37984 0.0691486C5.50186 0.117605 5.61295 0.190017 5.70653 0.282109C5.80012 0.374202 5.87431 0.48411 5.92472 0.605345C5.97513 0.72658 6.00074 0.856685 6.00004 0.98798V1.99998H10V0.98798C10 0.49398 10.306 -1.94872e-05 11.012 -1.94872e-05ZM14 8.02398H2.00004V13.506C2.00004 13.788 2.21204 14 2.49404 14H13.506C13.5713 14.0015 13.6362 13.9897 13.6969 13.9654C13.7575 13.9411 13.8125 13.9048 13.8587 13.8586C13.9049 13.8125 13.9412 13.7574 13.9655 13.6968C13.9898 13.6362 14.0015 13.5713 14 13.506V8.02398ZM13.506 3.99998H2.49404C2.42876 3.99848 2.36384 4.01023 2.30323 4.03452C2.24261 4.05881 2.18755 4.09514 2.14138 4.14132C2.0952 4.1875 2.05887 4.24255 2.03458 4.30317C2.01028 4.36378 1.99854 4.4287 2.00004 4.49398V5.99998H14V4.49398C14.0015 4.4287 13.9898 4.36378 13.9655 4.30317C13.9412 4.24255 13.9049 4.1875 13.8587 4.14132C13.8125 4.09514 13.7575 4.05881 13.6969 4.03452C13.6362 4.01023 13.5713 3.99848 13.506 3.99998ZM2.98804 11.004C2.98804 10.8727 3.01391 10.7426 3.06416 10.6213C3.11441 10.5 3.18807 10.3897 3.28093 10.2969C3.37379 10.204 3.48403 10.1304 3.60536 10.0801C3.72668 10.0298 3.85672 10.004 3.98804 10.004C4.11936 10.004 4.2494 10.0298 4.37072 10.0801C4.49205 10.1304 4.60229 10.204 4.69515 10.2969C4.788 10.3897 4.86166 10.5 4.91192 10.6213C4.96217 10.7426 4.98804 10.8727 4.98804 11.004C4.98857 11.1349 4.96317 11.2647 4.9133 11.3858C4.86343 11.5068 4.79009 11.6168 4.6975 11.7094C4.60491 11.802 4.4949 11.8754 4.37382 11.9252C4.25274 11.9751 4.12298 12.0005 3.99204 12C3.86072 12.0005 3.73058 11.9752 3.60905 11.9254C3.48752 11.8756 3.37699 11.8024 3.28376 11.7099C3.19053 11.6174 3.11643 11.5075 3.06569 11.3864C3.01495 11.2652 2.98856 11.1353 2.98804 11.004ZM6.98804 11.004C6.98804 10.447 7.45804 9.99998 8.00804 9.99998C8.27326 9.99998 8.52761 10.1053 8.71515 10.2929C8.90268 10.4804 9.00804 10.7348 9.00804 11C9.00804 11.2652 8.90268 11.5196 8.71515 11.7071C8.52761 11.8946 8.27326 12 8.00804 12C7.45504 12 6.98804 11.558 6.98804 11.004ZM11.012 11.004C11.012 10.7388 11.1174 10.4844 11.3049 10.2969C11.4925 10.1093 11.7468 10.004 12.012 10.004C12.2773 10.004 12.5316 10.1093 12.7191 10.2969C12.9067 10.4844 13.012 10.7388 13.012 11.004C13.0115 11.1353 12.9851 11.2652 12.9344 11.3864C12.8837 11.5075 12.8096 11.6174 12.7163 11.7099C12.6231 11.8024 12.5126 11.8756 12.391 11.9254C12.2695 11.9752 12.1394 12.0005 12.008 12C11.8771 12.0005 11.7473 11.9751 11.6263 11.9252C11.5052 11.8754 11.3952 11.802 11.3026 11.7094C11.21 11.6168 11.1366 11.5068 11.0868 11.3858C11.0369 11.2647 11.0115 11.1349 11.012 11.004Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-5 -5 32 32' : '0 0 22 22'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 -3.88074e-05C15.1294 -0.00268901 15.2581 0.020338 15.3786 0.0677121C15.4991 0.115086 15.609 0.185868 15.702 0.275968C15.795 0.366069 15.8692 0.473701 15.9204 0.592647C15.9715 0.711593 15.9986 0.839494 16 0.968961V1.99996H19C19.7956 1.99996 20.5587 2.31603 21.1213 2.87864C21.6839 3.44125 22 4.20431 22 4.99996V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H3C2.20435 22 1.44129 21.6839 0.87868 21.1213C0.316071 20.5587 0 19.7956 0 19V4.99996C0 4.20431 0.316071 3.44125 0.87868 2.87864C1.44129 2.31603 2.20435 1.99996 3 1.99996H6V0.968961C6.00143 0.839494 6.02849 0.711593 6.07964 0.592647C6.13078 0.473701 6.20499 0.366069 6.29797 0.275968C6.39095 0.185868 6.50087 0.115086 6.62136 0.0677121C6.74186 0.020338 6.87055 -0.00268901 7 -3.88074e-05C7.12945 -0.00268901 7.25814 0.020338 7.37864 0.0677121C7.49913 0.115086 7.60905 0.185868 7.70203 0.275968C7.79501 0.366069 7.86922 0.473701 7.92036 0.592647C7.97151 0.711593 7.99857 0.839494 8 0.968961V1.99996H14V0.968961C14.0014 0.839494 14.0285 0.711593 14.0796 0.592647C14.1308 0.473701 14.205 0.366069 14.298 0.275968C14.391 0.185868 14.5009 0.115086 14.6214 0.0677121C14.7419 0.020338 14.8706 -0.00268901 15 -3.88074e-05ZM20 9.99996H2V19C2 19.563 2.438 20 3 20H19C19.563 20 20 19.562 20 19V9.99996ZM6 3.99996H3C2.437 3.99996 2 4.43796 2 4.99996V7.99996H20V4.99996C20 4.43696 19.562 3.99996 19 3.99996H16V5.03096C15.9986 5.16043 15.9715 5.28833 15.9204 5.40728C15.8692 5.52622 15.795 5.63385 15.702 5.72395C15.609 5.81405 15.4991 5.88484 15.3786 5.93221C15.2581 5.97958 15.1294 6.00261 15 5.99996C14.8706 6.00261 14.7419 5.97958 14.6214 5.93221C14.5009 5.88484 14.391 5.81405 14.298 5.72395C14.205 5.63385 14.1308 5.52622 14.0796 5.40728C14.0285 5.28833 14.0014 5.16043 14 5.03096V3.99996H8V5.03096C7.99857 5.16043 7.97151 5.28833 7.92036 5.40728C7.86922 5.52622 7.79501 5.63385 7.70203 5.72395C7.60905 5.81405 7.49913 5.88484 7.37864 5.93221C7.25814 5.97958 7.12945 6.00261 7 5.99996C6.87055 6.00261 6.74186 5.97958 6.62136 5.93221C6.50087 5.88484 6.39095 5.81405 6.29797 5.72395C6.20499 5.63385 6.13078 5.52622 6.07964 5.40728C6.02849 5.28833 6.00143 5.16043 6 5.03096V3.99996ZM4 17C4 16.437 4.438 16 5 16C5.563 16 6 16.438 6 17C6 17.563 5.562 18 5 18C4.437 18 4 17.562 4 17ZM4 13C4 12.437 4.438 12 5 12C5.563 12 6 12.438 6 13C6 13.563 5.562 14 5 14C4.437 14 4 13.562 4 13ZM8 17C8 16.437 8.438 16 9 16C9.563 16 10 16.438 10 17C10 17.563 9.562 18 9 18C8.437 18 8 17.562 8 17ZM8 13C8 12.437 8.438 12 9 12C9.563 12 10 12.438 10 13C10 13.563 9.562 14 9 14C8.437 14 8 13.562 8 13ZM12 17C12 16.437 12.438 16 13 16C13.563 16 14 16.438 14 17C14 17.563 13.562 18 13 18C12.437 18 12 17.562 12 17ZM12 13C12 12.437 12.438 12 13 12C13.563 12 14 12.438 14 13C14 13.563 13.562 14 13 14C12.437 14 12 13.562 12 13ZM16 17C16 16.437 16.438 16 17 16C17.563 16 18 16.438 18 17C18 17.563 17.562 18 17 18C16.437 18 16 17.562 16 17ZM16 13C16 12.437 16.438 12 17 12C17.563 12 18 12.438 18 13C18 13.563 17.562 14 17 14C16.437 14 16 13.562 16 13Z"
          />
        </LargeSvg>
      );
  }
};

CalendarIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

CalendarIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default CalendarIcon;

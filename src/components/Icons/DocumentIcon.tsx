import React from 'react';
import PropTypes from 'prop-types';

import { LargeSvg, MediumSvg, SmallSvg } from './Svg';
import { TIcon } from '.';

const DocumentIcon: React.FC<TIcon> = ({
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
          viewBox={withBox ? '-4 -2 20 22' : '0 0.5 12 16'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0.434937C8.25 0.434937 8.5 0.528936 8.688 0.715936L11.718 3.71594C11.8108 3.81077 11.8836 3.92329 11.932 4.0468C11.9804 4.17032 12.0036 4.30231 12 4.43494V15.4349C12 15.9979 11.562 16.4349 11 16.4349H1C0.437 16.4349 0 15.9969 0 15.4349V1.43494C0 0.871937 0.438 0.434937 1 0.434937H8ZM6.969 2.43494H2V14.4349H10V5.43494H7.969C7.406 5.43494 6.969 4.99694 6.969 4.43494V2.43494ZM4 7.43494H8V9.40394H4V7.43494ZM4 10.4349H8V12.4349H4V10.4349Z"
          />
        </SmallSvg>
      );

    case 'MEDIUM':
      return (
        <MediumSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-4 -1.5 22 24' : '0 0 14 21'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 0.434937C9.281 0.434937 9.531 0.528936 9.719 0.747936L13.719 4.74794C13.811 4.83661 13.8836 4.94351 13.9319 5.06181C13.9803 5.1801 14.0035 5.30718 14 5.43494V19.4349C14 19.9979 13.562 20.4349 13 20.4349H1C0.437 20.4349 0 19.9969 0 19.4349V1.43494C0 0.871937 0.438 0.434937 1 0.434937H9ZM7 2.43494H2V18.4349H12V7.43494H8C7.437 7.43494 7 6.96594 7 6.43494V2.43494ZM9 2.84094V5.43494H11.594L9 2.84094ZM9 14.4349H5C4.437 14.4349 4 14.8729 4 15.4349C4 15.9979 4.438 16.4349 5 16.4349H9C9.563 16.4349 10 15.9969 10 15.4349C10 14.8719 9.562 14.4349 9 14.4349ZM9 10.4349H5C4.437 10.4349 4 10.8729 4 11.4349C4 11.9979 4.438 12.4349 5 12.4349H9C9.563 12.4349 10 11.9969 10 11.4349C10 10.8719 9.562 10.4349 9 10.4349Z"
          />
        </MediumSvg>
      );

    case 'LARGE':
    default:
      return (
        <LargeSvg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={withBox ? '-4 -1.5 28 32' : '0 0 20 29'}
          style={style}
          fill={color}
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.656 0.434937C14.25 0.434937 14.813 0.684936 15.25 1.09094L19.344 5.18494C19.781 5.62294 20 6.18494 20 6.77894V26.1849C20 27.4349 19 28.4349 17.75 28.4349H2.25C1 28.4349 0 27.4349 0 26.1849V2.68494C0 1.43494 1 0.434937 2.25 0.434937H13.656ZM12 2.43494H2.25C2.18516 2.43938 2.12412 2.46714 2.07816 2.5131C2.0322 2.55905 2.00444 2.6201 2 2.68494V26.1849C2 26.3099 2.125 26.4349 2.25 26.4349H17.75C17.875 26.4349 18 26.3099 18 26.1849V8.43494H13C12.437 8.43494 12 7.99694 12 7.43494V2.43494ZM14 2.65394V6.43494H17.781L14 2.65394ZM4 21.4349C4 21.9979 4.438 22.4349 5 22.4349H15C15.563 22.4349 16 21.9969 16 21.4349C16 20.8719 15.562 20.4349 15 20.4349H5C4.437 20.4349 4 20.8729 4 21.4349ZM4 17.4349C4 17.9979 4.438 18.4349 5 18.4349H15C15.563 18.4349 16 17.9969 16 17.4349C16 16.8719 15.562 16.4349 15 16.4349H5C4.437 16.4349 4 16.8729 4 17.4349ZM4 13.4349C4 13.9979 4.438 14.4349 5 14.4349H15C15.563 14.4349 16 13.9969 16 13.4349C16 12.8719 15.562 12.4349 15 12.4349H5C4.437 12.4349 4 12.8729 4 13.4349Z"
          />
        </LargeSvg>
      );
  }
};

DocumentIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.any,
  withBox: PropTypes.bool,
};

DocumentIcon.defaultProps = {
  className: '',
  color: 'currentcolor',
  size: 'LARGE',
  style: {},
  withBox: false,
};

export default DocumentIcon;

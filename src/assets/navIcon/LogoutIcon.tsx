import React, { FC } from 'react';
import Props from './type';

const LogoutIcon: FC<Props> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 3.5H5C3.89 3.5 3 4.39 3 5.5V9.5H5V5.5H19V19.5H5V15.5H3V19.5C3 20.0304 3.21071 20.5391 3.58579 20.9142C3.96086 21.2893 4.46957 21.5 5 21.5H19C19.5304 21.5 20.0391 21.2893 20.4142 20.9142C20.7893 20.5391 21 20.0304 21 19.5V5.5C21 4.39 20.1 3.5 19 3.5ZM10.08 16.08L11.5 17.5L16.5 12.5L11.5 7.5L10.08 8.91L12.67 11.5H3V13.5H12.67L10.08 16.08Z"
        fill={color ? color : '#95999E'}
      />
    </svg>
  );
};

export default LogoutIcon;

import React, { FC } from 'react';

interface Props {
  width?: number;
  height?: number;
}

const ShowPass: FC<Props> = ({ width }) => {
  return (
    <svg
      width={width ? width : 17}
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
    >
      <g clipPath="url(#clip0_32_5566)">
        <path
          d="M8.37061 5.80765L10.8041 8.24119L10.8157 8.11371C10.8157 6.83513 9.77666 5.79606 8.49808 5.79606L8.37061 5.80765Z"
          fill="#A7A3FF"
        />
        <path
          d="M8.49801 4.25098C10.6302 4.25098 12.3608 5.98151 12.3608 8.11375C12.3608 8.61205 12.2604 9.08717 12.0865 9.52365L14.3462 11.7834C15.5128 10.8099 16.4321 9.5507 17 8.11375C15.6596 4.72226 12.3647 2.31961 8.49804 2.31961C7.41646 2.31961 6.38126 2.51274 5.41943 2.86039L7.08815 4.52523C7.52459 4.35528 7.99971 4.25098 8.49801 4.25098Z"
          fill="#A7A3FF"
        />
        <path
          d="M0.77254 2.14575L2.53396 3.90717L2.88548 4.2587C1.61077 5.25529 0.60259 6.58023 0 8.11372C1.33653 11.5052 4.63531 13.9079 8.49808 13.9079C9.69555 13.9079 10.8389 13.6761 11.8857 13.255L12.2141 13.5834L14.4661 15.8392L15.4511 14.8581L1.75754 1.16075L0.77254 2.14575ZM5.04477 6.41411L6.23837 7.60771C6.2036 7.77382 6.18043 7.93989 6.18043 8.11372C6.18043 9.3923 7.2195 10.4314 8.49808 10.4314C8.6719 10.4314 8.83801 10.4082 9.00025 10.3734L10.1938 11.567C9.68008 11.822 9.10842 11.9765 8.49808 11.9765C6.36584 11.9765 4.63531 10.246 4.63531 8.11372C4.63531 7.50341 4.78983 6.93171 5.04477 6.41411Z"
          fill="#A7A3FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_32_5566">
          <rect width="17" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ShowPass;

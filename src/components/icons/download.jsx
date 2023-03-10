const Download = ({ className, width = "16", height = "16" }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 11V14C1.25 14.5523 1.69772 15 2.25 15H14.25C14.8023 15 15.25 14.5523 15.25 14V11"
        stroke="#F6F6F6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.25 1C9.25 0.447715 8.80229 0 8.25 0C7.69772 0 7.25 0.447715 7.25 1V9.33635L5.42848 7.65403C5.02277 7.27932 4.3901 7.30445 4.01539 7.71017C3.64067 8.11589 3.66581 8.74855 4.07152 9.12327L6.89304 11.7292C7.65928 12.4369 8.84073 12.4369 9.60697 11.7292L12.4285 9.12327C12.8342 8.74855 12.8593 8.11589 12.4846 7.71017C12.1099 7.30445 11.4772 7.27932 11.0715 7.65403L9.25 9.33635V1Z"
        fill="#F6F6F6"
      />
    </svg>
  );
};
export default Download;

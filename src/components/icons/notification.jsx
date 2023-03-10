const Notification = ({ className, width = "16", height = "16" }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.76575 20H12.7657V20C12.7657 21.1046 11.8703 22 10.7657 22V22C9.66118 22 8.76575 21.1046 8.76575 20V20Z"
        fill="#F6F6F6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.89465 2.12721C5.86552 2.59416 4.28804 4.29902 4.04928 6.44785L3.01247 15.7791C2.88083 16.9639 3.80821 18 5.00024 18H16.5312C17.7232 18 18.6506 16.9639 18.5189 15.7791L17.4821 6.44784C17.2434 4.29902 15.6659 2.59415 13.6368 2.12721C13.263 0.896046 12.119 0 10.7657 0C9.41243 0 8.26843 0.896047 7.89465 2.12721Z"
        fill="#F6F6F6"
      />
    </svg>
  );
};

export default Notification;

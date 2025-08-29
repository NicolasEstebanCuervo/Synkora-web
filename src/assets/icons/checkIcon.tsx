import type { SVGProps } from "react";

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M17.988 8.935a.96.96 0 0 1 0 1.36l-6.73 6.731a.96.96 0 0 1-1.361 0l-2.885-2.884a.962.962 0 0 1 1.36-1.36l2.205 2.205 6.05-6.052a.96.96 0 0 1 1.361 0M25 12.5C25 19.404 19.404 25 12.5 25S0 19.404 0 12.5 5.596 0 12.5 0C19.4.007 24.993 5.6 25 12.5m-1.923 0c0-5.841-4.736-10.577-10.577-10.577S1.923 6.66 1.923 12.5 6.66 23.077 12.5 23.077c5.839-.007 10.57-4.738 10.577-10.577"
            clipRule="evenodd"
        />
    </svg>
);
export default CheckIcon;

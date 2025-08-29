import type { SVGProps } from "react";

const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
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
            d="M12.5 0C5.596 0 0 5.596 0 12.5S5.596 25 12.5 25 25 19.404 25 12.5C24.993 5.6 19.4.007 12.5 0m0 23.077c-5.841 0-10.577-4.736-10.577-10.577S6.66 1.923 12.5 1.923 23.077 6.66 23.077 12.5c-.007 5.839-4.738 10.57-10.577 10.577M20.192 12.5c0 .531-.43.961-.961.961H12.5a.96.96 0 0 1-.961-.961V5.77a.962.962 0 1 1 1.922 0v5.769h5.77c.53 0 .961.43.961.961"
            clipRule="evenodd"
        />
    </svg>
);
export default ClockIcon;

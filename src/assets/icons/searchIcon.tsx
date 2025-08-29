import styled from "@emotion/styled";

const SearchIcon = () => (
    <SVG xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
        <path
            fill="#ABABAB"
            fillRule="evenodd"
            d="m19.301 18.24-4.694-4.693a8.26 8.26 0 1 0-1.06 1.06l4.693 4.694a.75.75 0 0 0 1.061-1.06M1.521 8.27a6.75 6.75 0 1 1 6.75 6.75 6.757 6.757 0 0 1-6.75-6.75"
            clipRule="evenodd"
        />
    </SVG>
);
export default SearchIcon;

const SVG = styled.svg`
    position: absolute;
    left: 0.6rem;
`;

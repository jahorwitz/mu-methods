import cx from "classnames";
import styled from "styled-components";
/* 
 @author [Kurtney J.](https://github.com/xhundo)
*/

// Table component build with named spaced format
const StyledCell = styled.div`
  width: 100%;
  min-height: 84px;
  padding: 16px;
`;

const StyledHeading = styled.p`
  line-height: 12px;
`;

export const Table = ({ children, className }) => {
  return (
    <div role="table" className={cx(`d-flex flex-column w-100`, className)}>
      {children}
    </div>
  );
};

const Header = ({ children }) => {
  return (
    <StyledHeading
      role="heading"
      className="text-uppercase mb-8px fs-10px text-white text-opacity-70"
    >
      {children}
    </StyledHeading>
  );
};

const Cell = ({ children }) => {
  return (
    <StyledCell
      role="cell"
      className="rounded mb-2 bg-white d-flex w-100 bg-beta gap-12px p-12px"
    >
      {children}
    </StyledCell>
  );
};
const Button = ({ children }) => {
  return (
    <StyledCell
      role="button"
      className="rounded mb-2 bg-white d-flex w-100 bg-beta gap-12px p-12px"
    >
      {children}
    </StyledCell>
  );
};

Table.Header = Header;
Table.Cell = Cell;
Table.Button = Button;

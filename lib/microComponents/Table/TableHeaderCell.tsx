import { ReactNode } from "react";
import styled from "styled-components";

// styled-components----
const Container = styled.th`
  padding-bottom: 1.875rem;
`;
// ---------------------

function TableHeaderCell({ children, ...props }: { children: ReactNode }) {
  return <Container {...props}>{children}</Container>;
}

export default TableHeaderCell;

import { ReactNode } from "react";
import styled from "styled-components";

// styled-components----
const Container = styled.td`
  padding: 1.25rem 0;
  border-top: 2px solid ${(props) => props.theme.colors.gray[500]};
`;

// ---------------------

function TableDataCell({ children, ...props }: { children: ReactNode }) {
  return <Container {...props}>{children}</Container>;
}

export default TableDataCell;

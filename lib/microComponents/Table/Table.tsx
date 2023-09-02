import { ReactNode } from "react";
import styled from "styled-components";

// styled-components----
const Container = styled.table`
  width: 100%;
`;

// ---------------------

function Table({ children, ...props }: { children: ReactNode }) {
  return <Container {...props}>{children}</Container>;
}

export default Table;

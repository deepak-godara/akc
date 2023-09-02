import { ReactNode } from "react";
import styled from "styled-components";

// styled-components----
const Container = styled.tr``;

// ---------------------

function TableRow({ children, ...props }: { children: ReactNode }) {
  return <Container {...props}>{children}</Container>;
}

export default TableRow;

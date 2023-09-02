import { ReactNode } from "react";
import styled from "styled-components";

// styled-components----
const Container = styled.tbody``;

// ---------------------

function TableBody({ children, ...props }: { children: ReactNode }) {
  return <Container {...props}>{children}</Container>;
}

export default TableBody;

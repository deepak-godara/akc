import { ReactNode } from "react";
import styled from "styled-components";

// styled-components----
const Container = styled.tfoot``;

// ---------------------

function TableFooter({ children, ...props }: { children: ReactNode }) {
  return <Container {...props}>{children}</Container>;
}

export default TableFooter;

import React from "react";
import { FaRegCircleQuestion, FaRegPaperPlane } from "react-icons/fa6";
import styled from "styled-components";

// styled-components----
const Container = styled.div`
  margin-top: 3.125rem;
`;
const HelpHeading = styled.div`
  font-size: 1.375rem;
  line-height: 1.9375rem;
  font-weight: 700;
  border-left: 11px solid ${(props) => props.theme.colors.blue[700]};
  padding: 0.25rem 0 0.25rem 1.25rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;

const InnerContainer = styled.div`
  margin-top: 1.875rem;
`;
const HelpContainer = styled.div`
  display: flex;
  align-items: center;
`;
const HelpWhatsappIcon = styled(FaRegCircleQuestion)`
  height: 2.1875rem;
  width: 2.1875rem;
  color: ${(props) => props.theme.colors.gray[800]};
  opacity: 0.25;
`;
const EmailIcon = styled(FaRegPaperPlane)`
  height: 2.1875rem;
  width: 2.1875rem;
  color: ${(props) => props.theme.colors.gray[800]};
  opacity: 0.25;
`;
const HelpText = styled.div`
  font-size: 18px;
  line-height: 25px;
  color: ${(props) => props.theme.colors.gray[800]};
  margin-left: 30px;
`;

// ---------------------

function CourseHelp() {
  return (
    <Container>
      <HelpHeading>Need help?</HelpHeading>
      <InnerContainer>
        <HelpContainer>
          <HelpWhatsappIcon />
          <HelpText>Text us on WhatsApp</HelpText>
        </HelpContainer>
        <HelpContainer style={{ marginTop: "0.9375rem" }}>
          <EmailIcon />
          <HelpText>Send a mail</HelpText>
        </HelpContainer>
      </InnerContainer>
    </Container>
  );
}

export default CourseHelp;

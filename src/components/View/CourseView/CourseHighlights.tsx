import React from "react";
import { FaUserLock } from "react-icons/fa6";
import styled from "styled-components";
import { CourseDetailsType } from "./CourseDetailsType";

// styled-components----
const Container = styled.div`
  margin-top: 1.875rem;
`;

const HightlightItemContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.blue[700]};
  font-size: 20px;
  line-height: 28px;
`;
const HightlightIconContainer = styled.div`
  width: 2.75rem;
  height: 2.1875rem;
`;
const HightlightIcon = styled(FaUserLock)`
  height: 100%;
  width: 100%;
  min-width: 2.75rem;
  min-height: 2.1875rem;
`;
const HightlightTextContainer = styled.div`
  margin-left: 1.875rem;
`;
const HightlightQuestionContainer = styled.span`
  font-weight: 700;
`;
// ---------------------

function CourseHighlights({ item }: { item: CourseDetailsType }) {
  return (
    <Container>
      {Object.keys(item.highlights).map((e) => (
        <HightlightItemContainer>
          <HightlightIconContainer>
            <HightlightIcon />
          </HightlightIconContainer>
          <HightlightTextContainer>
            <HightlightQuestionContainer>{e}</HightlightQuestionContainer>
            &nbsp;{item.highlights[e]}
          </HightlightTextContainer>
        </HightlightItemContainer>
      ))}
    </Container>
  );
}

export default CourseHighlights;

import React from "react";
import styled from "styled-components";
import { CourseDetailsType } from "./CourseDetailsType";

// styled-components----
const Container = styled.div`
  margin-top: 3.125rem;
`;
const QuestionAndAnswerContainer = styled.div`
  margin-top: 1.25rem;
`;
const QuestionContainer = styled.div`
  padding: 0.25rem 0rem 0.25rem 1.25rem;
  font-size: 1.375rem;
  line-height: 1.9375rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray[800]};
  border-left: 0.6875rem solid ${(props) => props.theme.colors.blue[700]};
`;

const AnswerContainer = styled.div`
  margin-top: 1.25rem;
  color: ${(props) => props.theme.colors.gray[800]};
  line-height: 1.5rem;
`;

// ---------------------

function CourseQuestionnare({ item }: { item: CourseDetailsType }) {
  return (
    <Container>
      {Object.keys(item.questionnaires).map((e) => (
        <QuestionAndAnswerContainer>
          <QuestionContainer>{e}</QuestionContainer>
          <AnswerContainer>{item.questionnaires[e]}</AnswerContainer>
        </QuestionAndAnswerContainer>
      ))}
    </Container>
  );
}

export default CourseQuestionnare;

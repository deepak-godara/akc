import { useSortable } from "@dnd-kit/sortable";
import React, { useState } from "react";
import { FaBars, FaTrash } from "react-icons/fa6";
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components";
import { Formik } from "../../main";
import { QUESTIONS } from "../../validationSchema";
import getQuestionsError from "./getQuestionsError";
import FormStyledError from "../FormStyledError";
// styled-components----
const Container = styled.div`
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    minmax(0, 1fr)
    minmax(0, 1fr)
    minmax(0, 1fr);
  column-gap: 1.9375rem;
  row-gap: 1.875rem;
  line-height: 1.5625rem;
  font-size: 1.125rem;
`;
const QuestionInputAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 2.9375rem;
  grid-column: span 2;
`;
const SortButton = styled.button`
  padding: 0;
  margin: 0;
  height: 1.375rem;
  width: 1.1875rem;
  text-align: center;
  cursor: row-resize;
  color: ${(props) => props.theme.colors.gray[500]};
  background: none;
`;
const SortIcon = styled(FaBars)``;
const TrashButton = styled.button`
  padding: 0;
  margin: 0;
  height: 1.375rem;
  width: 1.1875rem;
  text-align: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray[500]};
  background: none;
  margin-left: 1.25rem;
  transition: color 0.3s;
  &:hover {
    color: ${(props) =>
      props.disabled
        ? props.theme.colors.gray[500]
        : props.theme.colors.red[500]};
  }
`;
const TrashIcon = styled(FaTrash)``;
const QuestionInputContainer = styled.div`
  margin-left: 2.1875rem;
  position: relative;
`;
const QuestionInput = styled.input`
  color: ${(props) => props.theme.colors.gray[800]};
  height: 1.9375rem;
  line-height: 1.375rem;
  font-size: 1.125rem;
  width: 100%;
  background: ${(props) => props.theme.colors.gray[500]};
  height: 100%;
  padding: 0.6875rem 1.875rem;
  border-radius: 10px;
  &::placeholder {
    color: ${(props) => props.theme.colors.gray[600]};
  }
`;
const AnswerContainer = styled.div`
  grid-column: span 3;
  position: relative;
  margin-left: 5.8125rem;
`;
const AnswerTextArea = styled.textarea`
  width: 100%;

  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.gray[800]};
  line-height: 1.375rem;
  font-size: 1.125rem;
  background: ${(props) => props.theme.colors.gray[500]};
  padding: 0.9375rem 1.5625rem;
  border-radius: 10px;
  height: 8.8125rem;
  min-height: 3.4375rem;
`;
const QuestionErrorStyled = styled(FormStyledError)`
  bottom: -20px;
`;
//----------------------

function QuestionItem({
  id,
  deleteItem,
  formik,
  index,
}: {
  id: string;
  deleteItem: (id: string) => void;
  formik: Formik;
  index: number;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const getQuestionError = () => {
    const error = getQuestionsError(index, formik);
    if (error && error.question) {
      return error.question;
    }
    return "";
  };
  const getAnswerError = () => {
    const error = getQuestionsError(index, formik);
    if (error && error.answer) {
      return error.answer;
    }
    return "";
  };
  return (
    <Container ref={setNodeRef} {...attributes} style={style}>
      <QuestionInputAndButtonContainer>
        <SortButton type="button" {...listeners}>
          <SortIcon />
        </SortButton>
        <TrashButton
          type="button"
          disabled={
            formik.getFieldProps(QUESTIONS).value.length > 1 ? false : true
          }
          onClick={() => {
            deleteItem(id);
          }}
        >
          <TrashIcon />
        </TrashButton>
        <QuestionInputContainer>
          <QuestionInput
            placeholder="What are the course prerequisites?"
            {...formik.getFieldProps(`${QUESTIONS}[${index}].question`)}
          />
          <QuestionErrorStyled shouldDisplay={!!getQuestionError()}>
            {getQuestionError()}
          </QuestionErrorStyled>
        </QuestionInputContainer>
      </QuestionInputAndButtonContainer>
      <div></div>
      <AnswerContainer>
        <AnswerTextArea
          {...formik.getFieldProps(`${QUESTIONS}[${index}].answer`)}
        />
        <QuestionErrorStyled shouldDisplay={!!getAnswerError()}>
          {getAnswerError()}
        </QuestionErrorStyled>
      </AnswerContainer>
    </Container>
  );
}

export default QuestionItem;

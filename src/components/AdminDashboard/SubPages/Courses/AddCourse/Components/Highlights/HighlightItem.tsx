import { useSortable } from "@dnd-kit/sortable";
import React, { useState } from "react";
import { FaBars, FaTrash } from "react-icons/fa6";
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components";
import { Formik } from "../../main";
import { HIGHLIGHTS } from "../../validationSchema";
import getHighlightsError from "./getHighlightsError";
import FormStyledError from "../FormStyledError";

// styled-components----
const Container = styled.div`
  margin-top: 1.25rem;
  line-height: 1.5625rem;
  font-size: 1.125rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 1.9375rem;
`;
const HighlightInputAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 2.9375rem;
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
    color: ${(props) => props.theme.colors.red[500]};
  }
`;
const TrashIcon = styled(FaTrash)``;
const HighlightInputContainer = styled.div`
  position: relative;
  margin-left: 2.1875rem;
  width: 100%;
`;
const HighlightInput = styled.input`
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
const ContentInputContainer = styled.div`
  position: relative;
  width: 100%;
`;
const ContentInput = styled(HighlightInput)`
  margin-left: 0;
`;
const HightlightStyledEror = styled(FormStyledError)`
  bottom: -22px;
`;
//----------------------

function HighlightItem({
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
  const getLabelError = () => {
    const error = getHighlightsError(index, formik);
    if (error && error.label) {
      return error.label;
    }
    return "";
  };
  const getContentError = () => {
    const error = getHighlightsError(index, formik);
    if (error && error.content) {
      return error.content;
    }
    return "";
  };
  return (
    <Container ref={setNodeRef} {...attributes} style={style}>
      <HighlightInputAndButtonContainer>
        <SortButton type="button" {...listeners}>
          <SortIcon />
        </SortButton>
        <TrashButton
          type="button"
          onClick={() => {
            deleteItem(id);
          }}
        >
          <TrashIcon />
        </TrashButton>
        <HighlightInputContainer>
          <HighlightInput
            placeholder="Not passed?"
            {...formik.getFieldProps(`${HIGHLIGHTS}[${index}].label`)}
          />
          {getLabelError() && (
            <HightlightStyledEror shouldDisplay={!!getLabelError()}>
              {getLabelError()}
            </HightlightStyledEror>
          )}
        </HighlightInputContainer>
      </HighlightInputAndButtonContainer>
      <HighlightInputAndButtonContainer>
        <ContentInputContainer>
          <ContentInput
            placeholder="Next course for free + unlimited use of AKC study materials"
            {...formik.getFieldProps(`${HIGHLIGHTS}[${index}].content`)}
          />
          {getContentError() && (
            <HightlightStyledEror shouldDisplay={!!getContentError()}>
              {getContentError()}
            </HightlightStyledEror>
          )}
        </ContentInputContainer>
      </HighlightInputAndButtonContainer>
    </Container>
  );
}

export default HighlightItem;

import { useSortable } from "@dnd-kit/sortable";
import React, { useState } from "react";
import { FaBars, FaTrash } from "react-icons/fa6";
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components";
import { Formik } from "../../main";
import { FEATURES } from "../../validationSchema";
import FormStyledError from "../FormStyledError";
import getFeaturesError from "./getFeaturesError";

// styled-components----
const Container = styled.div`
  margin-top: 1.875rem;
  line-height: 1.5625rem;
  font-size: 1.125rem;
  width: 75%;
`;
const FeatureInputAndButtonContainer = styled.div`
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
const FeatureInputContainer = styled.div`
  margin-left: 2.1875rem;
  position: relative;
  width: 100%;
`;
const FeatureInput = styled.input`
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
const FeatureStyledError = styled(FormStyledError)`
  bottom: -22px;
`;
//----------------------

function FeatureItem({
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
  const getError = () => {
    const error = getFeaturesError(index, formik);
    if (error) {
      return error;
    }
    return "";
  };
  return (
    <Container ref={setNodeRef} {...attributes} style={style}>
      <FeatureInputAndButtonContainer>
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
        <FeatureInputContainer>
          <FeatureInput
            placeholder="One-to-one doubt solving sessions"
            {...formik.getFieldProps(`${FEATURES}[${index}].content`)}
          />
          {getError() && (
            <FeatureStyledError shouldDisplay={!!getError()}>
              {getError()}
            </FeatureStyledError>
          )}
        </FeatureInputContainer>
      </FeatureInputAndButtonContainer>
    </Container>
  );
}

export default FeatureItem;

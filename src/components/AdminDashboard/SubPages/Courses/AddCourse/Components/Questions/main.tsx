import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import QuestionItem from "./QuestionsItem";
import FormHeadings from "../FormHeadings";
import Text from "@lib/microComponents/Text";
import {
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DndContext,
  closestCenter,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { v4 as uuid } from "uuid";
import { Formik } from "../../main";
import { QuestionItemType } from "../../formInitialValues";
import { QUESTIONS } from "../../validationSchema";

// styled-components----
const Container = styled.div`
  margin-top: 3.125rem;
`;
const QuestionsContainer = styled.div`
  margin-top: 1.875rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 1.875rem;
`;
const AddQuestionItemButtonContainer = styled.div`
  display: flex;
  margin-top: 1.25rem;
  justify-content: flex-end;
`;
const AddQuestionItemButton = styled.button`
  height: 43px;
  width: 43px;
  font-size: 18px;
  background: ${(props) => props.theme.colors.gray[600]};
  color: #ffffff;
  border-radius: 10px;
`;
//----------------------

function DndContextProvider({
  children,
  formik,
}: {
  children: ReactNode;
  formik: Formik;
}) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  function findIndexOfAnElement(items: QuestionItemType[], id: string): number {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        return i;
      }
    }
    return -1;
  }
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    if (active.id !== over.id) {
      const items = formik.getFieldProps(QUESTIONS).value;
      const oldIndex = findIndexOfAnElement(items, active.id.toString());
      const newIndex = findIndexOfAnElement(items, over.id.toString());
      const newItems = arrayMove(items, oldIndex, newIndex);
      formik.setFieldValue(QUESTIONS, newItems);
    }
  }
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext
        items={formik.getFieldProps(QUESTIONS).value}
        strategy={verticalListSortingStrategy}
      >
        {children}
      </SortableContext>
    </DndContext>
  );
}
function Questions({ formik }: { formik: Formik }) {
  const increaseArrayItems = () => {
    const values = formik.getFieldProps(QUESTIONS).value;
    const newValue: QuestionItemType = {
      question: "",
      answer: "",
      id: uuid(),
    };

    formik.setFieldValue(QUESTIONS, [...values, newValue]);
  };
  const deleteAQuestionItem = (id: string) => {
    const values: QuestionItemType[] = formik.getFieldProps(QUESTIONS).value;
    const newValues: QuestionItemType[] = values.filter(
      (item) => item.id !== id
    );
    formik.setFieldValue(QUESTIONS, newValues);
  };
  return (
    <Container>
      <FormHeadings>Questionnaire</FormHeadings>

      <DndContextProvider formik={formik}>
        <QuestionsContainer>
          {formik
            .getFieldProps(QUESTIONS)
            .value.map((e: QuestionItemType, index: number) => {
              return (
                <QuestionItem
                  deleteItem={deleteAQuestionItem}
                  key={e.id}
                  id={e.id}
                  formik={formik}
                  index={index}
                />
              );
            })}
        </QuestionsContainer>
      </DndContextProvider>
      <AddQuestionItemButtonContainer>
        <AddQuestionItemButton onClick={increaseArrayItems} type="button">
          +
        </AddQuestionItemButton>
      </AddQuestionItemButtonContainer>
    </Container>
  );
}

export default Questions;

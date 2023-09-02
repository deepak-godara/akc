import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import HighlightItem from "./HighlightItem";
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
import { HighlightItemType } from "../../formInitialValues";
import { HIGHLIGHTS } from "../../validationSchema";

// styled-components----
const Container = styled.div`
  margin-top: 3.125rem;
`;
const HighlightsSubHeadingContainer = styled.div`
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    minmax(0, 1fr);
  column-gap: 1.9375rem;
  margin-top: 1rem;
`;
const FormSubHeading = styled.div``;
const AddHighlightItemButtonContainer = styled.div`
  display: flex;
  margin-top: 1.25rem;
  justify-content: flex-end;
`;
const AddHighlighItemItemButton = styled.button`
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
  function findIndexOfAnElement(
    items: HighlightItemType[],
    id: string
  ): number {
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
      const items = formik.getFieldProps(HIGHLIGHTS).value;
      const oldIndex = findIndexOfAnElement(items, active.id.toString());
      const newIndex = findIndexOfAnElement(items, over.id.toString());
      const newItems = arrayMove(items, oldIndex, newIndex);
      formik.setFieldValue(HIGHLIGHTS, newItems);
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
        items={formik.getFieldProps(HIGHLIGHTS).value}
        strategy={verticalListSortingStrategy}
      >
        {children}
      </SortableContext>
    </DndContext>
  );
}
function Highlights({ formik }: { formik: Formik }) {
  const increaseArrayItems = () => {
    const values = formik.getFieldProps(HIGHLIGHTS).value;
    const newValue: HighlightItemType = {
      content: "",
      id: uuid(),
      label: "",
    };

    formik.setFieldValue(HIGHLIGHTS, [...values, newValue]);
  };
  const deleteAHighlightItem = (id: string) => {
    const values: HighlightItemType[] = formik.getFieldProps(HIGHLIGHTS).value;
    const newValues: HighlightItemType[] = values.filter(
      (item) => item.id !== id
    );
    formik.setFieldValue(HIGHLIGHTS, newValues);
  };
  return (
    <Container>
      <FormHeadings>Hightlights</FormHeadings>
      <HighlightsSubHeadingContainer>
        <FormSubHeading style={{ marginLeft: "5.6875rem" }}>
          <Text>Label</Text>
        </FormSubHeading>
        <FormSubHeading>
          <Text>Content</Text>
        </FormSubHeading>
      </HighlightsSubHeadingContainer>
      <DndContextProvider formik={formik}>
        {formik
          .getFieldProps(HIGHLIGHTS)
          .value.map((e: HighlightItemType, index: number) => {
            return (
              <HighlightItem
                deleteItem={deleteAHighlightItem}
                key={e.id}
                id={e.id}
                formik={formik}
                index={index}
              />
            );
          })}
      </DndContextProvider>
      <AddHighlightItemButtonContainer>
        <AddHighlighItemItemButton onClick={increaseArrayItems} type="button">
          +
        </AddHighlighItemItemButton>
      </AddHighlightItemButtonContainer>
    </Container>
  );
}

export default Highlights;

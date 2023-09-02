import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import FeatureItem from "./FeatureItem";
import FormHeadings from "../FormHeadings";
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
import { FeaturesItemType } from "../../formInitialValues";
import { FEATURES } from "../../validationSchema";

// styled-components----
const Container = styled.div`
  margin-top: 3.125rem;
`;
const FeaturesSubHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
const FormSubHeading = styled.div``;
const AddFeatureItemButtonContainer = styled.div`
  display: flex;
  margin-top: 1.25rem;
  justify-content: flex-end;
`;
const AddFeatureItemItemButton = styled.button`
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
  function findIndexOfAnElement(items: FeaturesItemType[], id: string): number {
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
      const items = formik.getFieldProps(FEATURES).value;
      const oldIndex = findIndexOfAnElement(items, active.id.toString());
      const newIndex = findIndexOfAnElement(items, over.id.toString());
      const newItems = arrayMove(items, oldIndex, newIndex);
      formik.setFieldValue(FEATURES, newItems);
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
        items={formik.getFieldProps(FEATURES).value}
        strategy={verticalListSortingStrategy}
      >
        {children}
      </SortableContext>
    </DndContext>
  );
}
function Features({ formik }: { formik: Formik }) {
  const increaseArrayItems = () => {
    const values = formik.getFieldProps(FEATURES).value;
    const newValue: FeaturesItemType = {
      content: "",
      id: uuid(),
    };

    formik.setFieldValue(FEATURES, [...values, newValue]);
  };
  const deleteAFeatureItem = (id: string) => {
    const values: FeaturesItemType[] = formik.getFieldProps(FEATURES).value;
    const newValues: FeaturesItemType[] = values.filter(
      (item) => item.id !== id
    );
    formik.setFieldValue(FEATURES, newValues);
  };
  return (
    <Container>
      <FormHeadings>Features</FormHeadings>
      <DndContextProvider formik={formik}>
        {formik
          .getFieldProps(FEATURES)
          .value.map((e: FeaturesItemType, index: number) => {
            return (
              <FeatureItem
                deleteItem={deleteAFeatureItem}
                key={e.id}
                id={e.id}
                formik={formik}
                index={index}
              />
            );
          })}
      </DndContextProvider>
      <AddFeatureItemButtonContainer>
        <AddFeatureItemItemButton onClick={increaseArrayItems} type="button">
          +
        </AddFeatureItemItemButton>
      </AddFeatureItemButtonContainer>
    </Container>
  );
}

export default Features;

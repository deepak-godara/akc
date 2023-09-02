import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import ScheduleItem from "./ScheduleItem";
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
import { ScheduleItemType } from "../../formInitialValues";
import { SCHEDULE } from "../../validationSchema";

// styled-components----
const ScheduleContainer = styled.div`
  margin-top: 3.125rem;
`;
const ScheduleSubHeadingContainer = styled.div`
  display: grid;
  grid-template-columns:
    minmax(0, 2fr)
    minmax(0, 1fr)
    minmax(0, 1fr)
    minmax(0, 1fr);
  column-gap: 1.9375rem;
  margin-top: 1rem;
`;
const FormSubHeading = styled.div``;
const ScheduleItemsContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 2.5rem;
  margin-top: 1.25rem;
`;
const AddScheduleItemButtonContainer = styled.div`
  display: flex;
  margin-top: 1.25rem;
  justify-content: flex-end;
`;
const AddScheduleItemButton = styled.button`
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
  function findIndexOfAnElement(items: ScheduleItemType[], id: string): number {
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
      const items = formik.getFieldProps(SCHEDULE).value;
      const oldIndex = findIndexOfAnElement(items, active.id.toString());
      const newIndex = findIndexOfAnElement(items, over.id.toString());
      const newItems = arrayMove(items, oldIndex, newIndex);
      formik.setFieldValue(SCHEDULE, newItems);
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
        items={formik.getFieldProps(SCHEDULE).value}
        strategy={verticalListSortingStrategy}
      >
        {children}
      </SortableContext>
    </DndContext>
  );
}

function Schedule({ formik }: { formik: Formik }) {
  const increaseArrayItems = () => {
    const values = formik.getFieldProps(SCHEDULE).value;
    const newValue: ScheduleItemType = {
      name: `Training ${values.length + 1}`,
      date: undefined,
      startTime: undefined,
      endTime: undefined,
      id: uuid(),
    };

    formik.setFieldValue(SCHEDULE, [...values, newValue]);
  };
  const deleteAScheduleItem = (id: string) => {
    const values: ScheduleItemType[] = formik.getFieldProps(SCHEDULE).value;
    const newValues: ScheduleItemType[] = [];
    if (values.length > 1) {
      for (let i = 0; i < values.length; i++) {
        const value = values[i];
        if (id !== value.id) {
          newValues.push({
            name: value.name,
            date: value.date,
            startTime: value.startTime,
            endTime: value.endTime,
            id: value.id,
          });
        }
      }
      formik.setFieldValue(SCHEDULE, newValues);
    }
  };
  return (
    <ScheduleContainer>
      <FormHeadings>Schedule</FormHeadings>
      <ScheduleSubHeadingContainer>
        <div></div>
        <FormSubHeading>
          <Text>Date</Text>
        </FormSubHeading>
        <FormSubHeading>
          <Text>Starting Time</Text>
        </FormSubHeading>
        <FormSubHeading>
          <Text>Ending Time</Text>
        </FormSubHeading>
      </ScheduleSubHeadingContainer>
      <DndContextProvider formik={formik}>
        <ScheduleItemsContainer>
          {formik
            .getFieldProps(SCHEDULE)
            .value.map((e: ScheduleItemType, index: number) => {
              return (
                <ScheduleItem
                  deleteItem={deleteAScheduleItem}
                  key={e.id}
                  id={e.id}
                  formik={formik}
                  index={index}
                />
              );
            })}
        </ScheduleItemsContainer>
      </DndContextProvider>
      <AddScheduleItemButtonContainer>
        <AddScheduleItemButton onClick={increaseArrayItems} type="button">
          +
        </AddScheduleItemButton>
      </AddScheduleItemButtonContainer>
    </ScheduleContainer>
  );
}

export default Schedule;

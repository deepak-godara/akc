import { useSortable } from "@dnd-kit/sortable";
import React, { useState } from "react";
import {
  FaBars,
  FaCalendarDays,
  FaClock,
  FaSortDown,
  FaSortUp,
  FaTrash,
} from "react-icons/fa6";
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components";
import DatePicker from "@lib/microComponents/DatePicker";
import { format } from "date-fns";
import { Formik } from "../../main";
import { SCHEDULE } from "../../validationSchema";
import TimePicker from "@lib/microComponents/TimePicker";
import getScheduleError from "./getScheduleError";
import FormStyledError from "../FormStyledError";
import { FieldInputProps } from "formik";
// styled-components----
const Container = styled.div`
  display: grid;
  grid-template-columns:
    minmax(0, 2fr)
    minmax(0, 1fr)
    minmax(0, 1fr)
    minmax(0, 1fr);
  column-gap: 1.9375rem;
  height: 2.9375rem;
  line-height: 1.5625rem;
  font-size: 1.125rem;
`;
const HeadingAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
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
const HeadingInputContainer = styled.div`
  height: 2.9375rem;
  margin-left: 2.1875rem;
  position: relative;
`;
const HeadingInput = styled.input`
  color: ${(props) => props.theme.colors.gray[800]};
  height: 100%;
  line-height: 1.375rem;
  font-size: 1.125rem;
  width: 100%;
  padding: 0 20px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.gray[500]};
`;
const DatePickerContainer = styled.div`
  position: relative;
`;
const DatePickerButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 1.25rem;
  color: ${(props) => props.theme.colors.gray[600]};
  border-radius: 10px;
  background: ${(props) => props.theme.colors.gray[500]};
`;
const DatePickerStyled = styled(DatePicker)`
  position: absolute;
  z-index: 1000;
`;
interface TimePickerStyledPropType {
  $hidden: boolean;
}
const TimePickerStyled = styled(TimePicker)<TimePickerStyledPropType>`
  position: absolute;
  z-index: 1000;
  width: 100%;
  top: 47px;
  display: ${(props) => (props.$hidden ? "none" : "grid")};
`;
const DatePickerIcon = styled(FaCalendarDays)`
  height: 1.125rem;
  width: 1rem;
  color: ${(props) => props.theme.colors.gray[800]};
  margin-right: 1.125rem;
`;
const FromTimePickerContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;
const FromTimePicker = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0rem 1.25rem;
  color: ${(props) => props.theme.colors.gray[600]};
  background: ${(props) => props.theme.colors.gray[500]};
  border-radius: 10px 0 0 10px;
`;
const FromTimePickerClockIcon = styled(FaClock)`
  color: ${(props) => props.theme.colors.gray[800]};
  margin-right: 1.125rem;
  width: 1.125rem;
  height: 1.125rem;
  display: flex;
`;
const ChangeButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.gray[500]};
  height: 100%;
  border-radius: 0 0.625rem 0.625rem 0;
  padding: 0 20px 0 20px;
`;
const IncreaseButton = styled.button`
  width: auto;
  padding: 0;
  background: ${(props) => props.theme.colors.gray[500]};
  cursor: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 0.0625rem;
`;
const DecreaseButton = styled.button`
  width: auto;
  padding: 0;
  background: ${(props) => props.theme.colors.gray[500]};
  cursor: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 0.0625rem;
`;
const IncrementIcon = styled(FaSortUp)`
  color: ${(props) => props.theme.colors.gray[800]};
`;
const DecrementIcon = styled(FaSortDown)`
  color: ${(props) => props.theme.colors.gray[800]};
`;
const ScheduleErrorStyled = styled(FormStyledError)`
  top: 50px;
`;
//----------------------
function ChangeButtons({
  increaseFunction,
  decreaseFunction,
}: {
  increaseFunction: () => void;
  decreaseFunction: () => void;
}) {
  return (
    <ChangeButtonsContainer>
      <IncreaseButton type="button" onClick={increaseFunction}>
        <IncrementIcon viewBox="-80 -170 450 350" height="10" width="20" />
      </IncreaseButton>
      <DecreaseButton type="button" onClick={decreaseFunction}>
        <DecrementIcon viewBox="-80 350  450 350" height="10" width="20" />
      </DecreaseButton>
    </ChangeButtonsContainer>
  );
}
function ScheduleItem({
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
  const [showDate, setShowDate] = useState<boolean>(false);
  const [showFromTime, setShowFromTime] = useState<boolean>(false);
  const [showToTime, setShowToTime] = useState<boolean>(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const handleDate = (e: Date | undefined) => {
    formik.setFieldValue(`${SCHEDULE}[${index}].date`, e);
  };
  const getDate = (): Date => {
    return formik.getFieldProps(`${SCHEDULE}[${index}].date`).value;
  };
  const getInputError = () => {
    const error = getScheduleError(index, formik);
    if (error && error.name) {
      return error.name;
    }
    return "";
  };
  const getDateError = () => {
    const error = getScheduleError(index, formik);
    if (error && error.date) {
      return error.date;
    }
    return "";
  };
  const timeSelector = (which: "START" | "END"): string | undefined => {
    if (which === "START") {
      const startDate = formik.getFieldProps(
        `${SCHEDULE}[${index}].startTime`
      ).value;
      return startDate;
    } else {
      const endDate = formik.getFieldProps(
        `${SCHEDULE}[${index}].endTime`
      ).value;
      return endDate;
    }
  };
  const timeSetter = (which: "START" | "END", value: string | undefined) => {
    if (which === "START") {
      formik.setFieldValue(`${SCHEDULE}[${index}].startTime`, value);
    } else {
      formik.setFieldValue(`${SCHEDULE}[${index}].endTime`, value);
    }
  };
  return (
    <Container ref={setNodeRef} {...attributes} style={style}>
      <HeadingAndButtonContainer>
        <SortButton type="button" {...listeners}>
          <SortIcon />
        </SortButton>
        <TrashButton
          type="button"
          disabled={
            formik.getFieldProps(SCHEDULE).value.length > 1 ? false : true
          }
          onClick={() => {
            deleteItem(id);
          }}
        >
          <TrashIcon />
        </TrashButton>
        <HeadingInputContainer>
          <HeadingInput
            {...formik.getFieldProps(`${SCHEDULE}[${index}].name`)}
          />

          <ScheduleErrorStyled shouldDisplay={!!getInputError()}>
            {getInputError()}
          </ScheduleErrorStyled>
        </HeadingInputContainer>
      </HeadingAndButtonContainer>
      <DatePickerContainer>
        <DatePickerButton
          onClick={() => {
            setShowDate(!showDate);
            formik.setFieldTouched(`${SCHEDULE}.${index}.date`, true);
          }}
          type="button"
        >
          <DatePickerIcon />
          {getDate() ? format(getDate(), "PP") : "Select a Date"}
        </DatePickerButton>
        {showDate && (
          <DatePickerStyled
            setShow={setShowDate}
            value={formik.getFieldProps(`${SCHEDULE}.${index}`).value.date}
            onChange={handleDate}
          />
        )}
        <ScheduleErrorStyled shouldDisplay={!!getDateError()}>
          {" "}
          {getDateError()}
        </ScheduleErrorStyled>
      </DatePickerContainer>
      <TimePicker
        value={timeSelector("START")}
        onChange={(e) => {
          timeSetter("START", e);
        }}
      />
      <TimePicker
        value={timeSelector("END")}
        onChange={(e) => {
          timeSetter("END", e);
        }}
      />
      {/* <FromTimePickerContainer>
        <FromTimePicker type="button">
          <FromTimePickerClockIcon />
          {timeSelector("END") ? timeSelector("END") : "Select a time"}
        </FromTimePicker>
        <ChangeButtons
          increaseFunction={() => {}}
          decreaseFunction={() => {}}
        />
      </FromTimePickerContainer> */}
    </Container>
  );
}

export default ScheduleItem;

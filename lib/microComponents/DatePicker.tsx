import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "./CalenderStyles.css";
import styled from "styled-components";

// styled-components----
const Container = styled.div`
  margin-top: 0.2rem;
`;
//----------------------
function DatePicker({
  onChange,
  value,
  setShow,
  ...props
}: {
  value: Date;
  onChange: (e: Date | undefined) => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Container {...props}>
      <DayPicker
        defaultMonth={value}
        mode="single"
        selected={value}
        onSelect={(e) => {
          onChange(e);
          setShow(false);
        }}
      ></DayPicker>
    </Container>
  );
}

export default DatePicker;

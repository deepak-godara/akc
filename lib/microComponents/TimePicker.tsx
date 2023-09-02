import { FaClock, FaSortDown, FaSortUp } from "react-icons/fa6";
import { useEffect } from "react";
import styled from "styled-components";
import { RefObject, useRef, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/light.css";
import "./TimepickerStyles.css";
import { parse } from "date-fns";
// styled-components----

const TimePickerContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  user-select: none;
`;
const TimePicker = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0rem 1.25rem;
  color: ${(props) => props.theme.colors.gray[600]};
  background: ${(props) => props.theme.colors.gray[500]};
  border-radius: 10px;
  z-index: 999;
  position: relative;
  display: flex;
  justify-content: space-between;
`;
const TimePickerInput = styled.input`
  position: absolute;
  z-index: 1000;
`;
const TimePickerClockAndValueContainer = styled.div`
  display: flex;
  align-items: center;
`;
const TimePickerClockIcon = styled(FaClock)`
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
  padding-left: 1.25rem;
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
// ---------------------

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

function CustomTimePicker({
  onChange,
  value,
  ...props
}: {
  value: string | undefined;
  onChange: (e: string | undefined) => void;
}) {
  const [showTime, setShowTime] = useState<boolean>(false);
  const TimePickerContainerRef = useRef<HTMLDivElement>(null);
  const datepickerRef = useRef<any>(null);
  const pickerButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pickerButtonRef.current && TimePickerContainerRef.current) {
      const options = {};
      let defaultDate: Date | undefined;
      if (value) {
        defaultDate = parse(value, "HH:mm", new Date());
      }

      const flatPickrInstance = flatpickr(pickerButtonRef.current, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        defaultDate: defaultDate,
        appendTo: TimePickerContainerRef.current,
        static: true,
        onClose: function (selectedDates, dateStr) {
          onChange(dateStr);
        },
        // onChange: function (selectedDates, dateStr, instance) {
        //   onChange(dateStr);
        // },
      });
      datepickerRef.current = flatPickrInstance;
    }
    return () => {
      if (datepickerRef.current) {
        datepickerRef.current.destroy();
      }
    };
  }, [pickerButtonRef.current, TimePickerContainerRef.current]);
  return (
    <TimePickerContainer
      {...props}
      id="customButtonContainer"
      ref={TimePickerContainerRef}
    >
      <TimePicker ref={pickerButtonRef} id="customButton">
        <TimePickerClockAndValueContainer>
          <TimePickerClockIcon />
          {value ? value : "Select a time"}
        </TimePickerClockAndValueContainer>
        <ChangeButtons
          increaseFunction={() => {}}
          decreaseFunction={() => {}}
        />
      </TimePicker>
    </TimePickerContainer>
  );
}

export default CustomTimePicker;

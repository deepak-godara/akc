import React from "react";
import styled from "styled-components";
import { parseISO, format } from "date-fns";
import { CourseDetailsType } from "./CourseDetailsType";

// styled-components----
const Container = styled.div`
  margin-top: 3.125rem;
`;
const ScheduleHeading = styled.div`
  font-size: 1.375rem;
  line-height: 1.9375rem;
  font-weight: 700;
  border-left: 11px solid ${(props) => props.theme.colors.blue[700]};
  padding-left: 1.25rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;

const ScheduleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 17.75rem);
  column-gap: 1.25rem;
  margin-top: 1.875rem;
  border-radius: 10px;
`;
const ScheduleItem = styled.div`
  width: 100%;
  background: aqua;
  padding: 1.875rem 2.1875rem;
  background: ${(props) => props.theme.colors.gray[400]};
  border-radius: 10px;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.gray[800]};
  line-height: 1.5625rem;
`;
const ScheduleItemName = styled.div`
  font-weight: 700;
`;
const ScheduleItemDate = styled.div`
  margin-top: 10px;
`;
const ScheduleItemTime = styled.div`
  margin-top: 10px;
`;
// ---------------------
function CourseSchedule({ item }: { item: CourseDetailsType }) {
  const parseTime = (time: string) => {
    const parsedTime = parseISO(`1970-01-01T${time}`);
    const formattedTime = format(parsedTime, "hh:mm a");
    return formattedTime;
  };
  return (
    <Container>
      <ScheduleHeading>Course schedule</ScheduleHeading>
      <ScheduleContainer>
        {item.courseSchedules.map((e) => (
          <ScheduleItem>
            <ScheduleItemName>{e.name}</ScheduleItemName>
            <ScheduleItemDate>
              {format(parseISO(e.date), "d MMM yyyy")}
            </ScheduleItemDate>
            <ScheduleItemTime>
              {parseTime(e.startTime)}&nbsp;-&nbsp;{parseTime(e.endTime)}
            </ScheduleItemTime>
          </ScheduleItem>
        ))}
      </ScheduleContainer>
    </Container>
  );
}

export default CourseSchedule;

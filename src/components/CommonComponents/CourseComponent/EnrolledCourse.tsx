import styled from "styled-components";
import { Link } from "react-router-dom";
import CourseComponent from "./main";
import data from "./SampleCourseData";
import getTimeTillStarted from "./getTimeTillStarted";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

// styled-components----
const NormalText = styled.span`
  font-size: 1.125rem;
  line-height: 1.5625rem;
`;
const BoldText = styled(NormalText)`
  font-weight: 700;
`;
interface ContainerPropsType {
  $active: boolean;
}
const Container = styled.div<ContainerPropsType>`
  padding: 1.875rem;
  background: #ffffff;
  border-radius: 1.25rem;
  cursor: ${(props) => (props.$active ? "default" : "cursor")};
`;
const DetailsLink = styled(Link)`
  line-height: 25px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  padding: 0.5625rem 2.75rem;
  background: ${(props) => props.theme.colors.blue[700]};
  color: #ffffff;
  margin-right: 1.25rem;
`;
const ClassStatusButton = styled.div`
  line-height: 25px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  padding: 0.5625rem 2.25rem;
  background: ${(props) => props.theme.colors.green[600]};
  color: #ffffff;
  margin-right: 1.25rem;
`;
const ExpandButton = styled.button`
  height: 2.6875rem;
  width: 2.6875rem;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.gray[500]};
  color: ${(props) => props.theme.colors.gray[800]};
  justify-content: center;
  border-radius: 10px;
`;
const Divider = styled.div`
  height: 0.125rem;
  background: ${(props) => props.theme.colors.gray[500]};
  margin: 1.875rem 0;
`;
const LessionsComponentContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: 1.25rem;
`;
const LessionCotnainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Square = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  background: ${(props) => props.theme.colors.gray[500]};
  margin: 0 1.25rem;
`;
const LessionDataContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.gray[800]};
`;
const LessionButtonContainer = styled.div``;
const LessionHeading = styled(BoldText)`
  font-size: 1.125rem;
  line-height: 1.5625rem;
  font-weight: 700;
`;
const LessionDate = styled(NormalText)``;
const LessionTime = styled(NormalText)``;
const JoinButton = styled.button`
  width: 15.875rem;
  height: 2.6875rem;
  background: ${(props) => props.theme.colors.green[600]};
  color: #ffffff;
  border-radius: 10px;
`;
const TimeLeftButton = styled.button`
  width: 15.875rem;
  height: 2.6875rem;
  background: ${(props) => props.theme.colors.gray[500]};
  color: ${(props) => props.theme.colors.gray[600]};
  border-radius: 10px;
`;

// ---------------------
function Lession({
  name,
  date,
  startTime,
  endTime,
  started,
}: {
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  started: boolean;
}) {
  const [timeLeft, setTimeLeft] = useState<string>(
    getTimeTillStarted({ date, startTime })
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeTillStarted({ date, startTime }));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <LessionCotnainer>
      <LessionDataContainer>
        <LessionHeading>{name}</LessionHeading>
        <Square />
        <LessionDate>{date}</LessionDate>
        <Square />
        <LessionTime>
          {startTime}&nbsp;-&nbsp;{endTime}
        </LessionTime>
      </LessionDataContainer>
      <LessionButtonContainer>
        {started ? (
          <JoinButton>
            <BoldText>Join Now</BoldText>
          </JoinButton>
        ) : (
          <TimeLeftButton>{timeLeft}</TimeLeftButton>
        )}
      </LessionButtonContainer>
    </LessionCotnainer>
  );
}
function EnrolledCourse({
  active,
  setActive,
  index,
}: {
  active: boolean;
  setActive: (index: number) => void;
  index: number;
}) {
  return (
    <Container
      $active={active}
      role="button"
      onClick={() => {
        setActive(index);
      }}
    >
      <CourseComponent data={data}>
        <DetailsLink to="/details/id">Details</DetailsLink>
        <ClassStatusButton>Ongoing</ClassStatusButton>
        <ExpandButton
          onClick={(e) => {
            e.stopPropagation();
            if (active) {
              setActive(-1);
            } else {
              setActive(index);
            }
          }}
        >
          {active ? <FaAngleUp /> : <FaAngleDown />}
        </ExpandButton>
      </CourseComponent>

      {active && (
        <>
          <Divider />
          <LessionsComponentContainer>
            {data.lessions.map((e) => (
              <Lession
                key={`${e.title}.${e.date}`}
                name={e.title}
                date={e.date}
                startTime={e.startTime}
                endTime={e.endTime}
                started={e.started}
              />
            ))}
          </LessionsComponentContainer>
        </>
      )}
    </Container>
  );
}

export default EnrolledCourse;

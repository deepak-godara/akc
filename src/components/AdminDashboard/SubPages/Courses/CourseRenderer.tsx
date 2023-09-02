import styled from "styled-components";
import {
  FaAngleDown,
  FaAngleUp,
  FaBuildingColumns,
  FaLocationDot,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

// styled-components----
interface ContainerPropsType {
  $active: boolean;
}
const Container = styled.div<ContainerPropsType>`
  background: #ffffff;
  border-radius: 20px;
  cursor: ${(props) => (props.$active ? "auto" : "pointer")};
`;
const InnerContainer = styled.div`
  display: flex;
  padding: 1.875rem;
  justify-content: space-between;
`;
const DataContainer = styled.div`
  display: flex;
`;
const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
`;
const CourseImageContainer = styled.div``;
const CourseImage = styled.img`
  height: 3.625rem;
  width: 3.625rem;
`;
const CourseDataContainer = styled.div`
  margin-left: 2rem;
`;
const UniversityNameAndCourseTypeContainer = styled.div`
  line-height: 1.25rem;
  font-size: 0.875rem;
  display: flex;
  color: ${(props) => props.theme.colors.gray[600]};
`;

const UniversityName = styled.div`
  display: flex;
  align-items: center;
`;
const CourseTypeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.25rem;
`;
const UniversityIcon = styled(FaBuildingColumns)``;
const LocationIcon = styled(FaLocationDot)``;
const SquareIcon = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  background: ${(props) => props.theme.colors.gray[500]};
  margin: 0 1.25rem;
`;
const CourseInfoContainer = styled.div`
  margin-top: 0.625rem;
  color: ${(props) => props.theme.colors.gray[800]};
  font-size: 1.125rem;
  line-height: 1.5625rem;
  display: flex;
  align-items: center;
`;
const CourseMajor = styled.div`
  font-weight: 700;
`;
const CourseSubject = styled.div``;
const CourseLanguage = styled.div``;
const StatusNeutralBadge = styled.div`
  padding: 0.1875rem 1.25rem;
  line-height: 0.9375rem;
  font-size: 0.625rem;
  color: ${(props) => props.theme.colors.gray[800]};
  background: ${(props) => props.theme.colors.gray[600]}26;
  height: 1.3125rem;
  margin-right: 0.625rem;
  border-radius: 10px;
`;
const StatusPositiveBadge = styled(StatusNeutralBadge)`
  background: ${(props) => props.theme.colors.green[600]}26;
`;
const StatusNegativeBadge = styled(StatusNeutralBadge)`
  background: ${(props) => props.theme.colors.red[500]}26;
`;
const CourseStatusContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const Button = styled.button`
  height: 2.6875rem;
  line-height: 1.5625rem;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.gray[800]};
  background: ${(props) => props.theme.colors.gray[500]};
  border-radius: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const EditButtonLink = styled(Link)`
  height: 2.6875rem;
  line-height: 1.5625rem;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.gray[800]};
  background: ${(props) => props.theme.colors.gray[500]};
  border-radius: 0.625rem;
  width: 13.4375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const StepsShow = styled.div`
  height: 2.6875rem;
  line-height: 1.5625rem;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.gray[800]};
  background: ${(props) => props.theme.colors.gray[500]};
  border-radius: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  width: 125px;
  font-weight: 700;
`;
const ExpandButton = styled.button`
  height: 2.6875rem;
  width: 2.6875rem;
  line-height: 1.125rem;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.gray[800]};
  background: ${(props) => props.theme.colors.gray[500]};
  border-radius: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ExpandedDownIcon = styled(FaAngleDown)``;
const ExpandedUpIcon = styled(FaAngleUp)``;
const LineBreak = styled.div`
  height: 2px;
  background: ${(props) => props.theme.colors.gray[500]};
  margin: 0 1.9063rem;
`;
const CourseStatisticsContainer = styled.div`
  height: 13.4688rem;
  padding: 2.4688rem 4.9375rem 2.75rem 7.5rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 1.875rem;
`;
const DataComponent = styled.div`
  height: 8.1875rem;
  color: ${(props) => props.theme.colors.gray[800]};
  box-shadow: 0px 0px 10px #0000001a;
  padding: 1.875rem;
  border-radius: 10px;
`;
const DataComponentHeading = styled.div`
  font-size: 1.125rem;
  line-height: 1.5625rem;
`;
const DataComponentData = styled.div`
  margin-top: 0.5rem;
  line-height: 2.4375rem;
  font-size: 1.75rem;
  font-weight: 700;
`;
// ------------------------

// types ----
export interface AdminCourseView {
  id: string;
  University: string;
  universityId: string;
  type: string;
  image: string;
  major: string;
  subject: string;
  language: string;
  tags: {
    publish: boolean;
    teacher: boolean;
    date: boolean;
  };
  applications: number;
  promoClicks: number;
  Sales: number;
  Payments: number;
}

// --------

function CourseRenderer({
  item,
  onClick,
  active,
  handleActive,
  id,
  ...props
}: {
  item: AdminCourseView;
  active: boolean;
  handleActive: (e: number) => void;
  onClick: () => void;
  id: number;
}) {
  return (
    <Container
      $active={active}
      role="button"
      tabIndex={0}
      {...props}
      onClick={onClick}
    >
      <InnerContainer>
        <DataContainer>
          <CourseImageContainer>
            <CourseImage src={item.image}></CourseImage>
          </CourseImageContainer>
          <CourseDataContainer>
            <UniversityNameAndCourseTypeContainer>
              <UniversityName>
                <UniversityIcon />
                &nbsp;&nbsp;{item.University}
              </UniversityName>
              <CourseTypeContainer>
                <LocationIcon />
                &nbsp;&nbsp;{item.type}
              </CourseTypeContainer>
            </UniversityNameAndCourseTypeContainer>
            <CourseInfoContainer>
              <CourseMajor>{item.major}</CourseMajor>
              <SquareIcon />
              <CourseSubject>{item.subject}</CourseSubject>
              <SquareIcon />
              <CourseLanguage>{item.language}</CourseLanguage>
            </CourseInfoContainer>
            <CourseStatusContainer>
              {item.tags.publish ? (
                <StatusPositiveBadge>Published</StatusPositiveBadge>
              ) : (
                <StatusNeutralBadge>Concept</StatusNeutralBadge>
              )}
              {item.tags.teacher ? (
                <StatusPositiveBadge>Teacher selected</StatusPositiveBadge>
              ) : (
                <StatusNegativeBadge>No teacher selected</StatusNegativeBadge>
              )}
              {item.tags.date ? (
                <StatusPositiveBadge>Date Selected</StatusPositiveBadge>
              ) : (
                <StatusNegativeBadge>No Date Selected</StatusNegativeBadge>
              )}
            </CourseStatusContainer>
          </CourseDataContainer>
        </DataContainer>
        <ButtonsContainer>
          <EditButtonLink
            to={`/admin-dashboard/courses/${item.id}/edit-course`}
          >
            Edit
          </EditButtonLink>
          <StepsShow>11&nbsp;/&nbsp;20</StepsShow>
          <ExpandButton
            onClick={(e) => {
              e.stopPropagation();
              handleActive(id);
            }}
          >
            {" "}
            {active ? <ExpandedUpIcon /> : <ExpandedDownIcon />}
          </ExpandButton>
        </ButtonsContainer>
      </InnerContainer>
      {active && (
        <>
          <LineBreak />
          <CourseStatisticsContainer>
            <DataComponent>
              <DataComponentHeading>Promo Clicks</DataComponentHeading>
              <DataComponentData>{item.promoClicks}</DataComponentData>
            </DataComponent>
            <DataComponent>
              <DataComponentHeading>Applications</DataComponentHeading>
              <DataComponentData>{item.applications}</DataComponentData>
            </DataComponent>
            <DataComponent>
              <DataComponentHeading>Sales</DataComponentHeading>
              <DataComponentData>{item.Sales}</DataComponentData>
            </DataComponent>
            <DataComponent>
              <DataComponentHeading>Payments</DataComponentHeading>
              <DataComponentData>{item.Payments}</DataComponentData>
            </DataComponent>
          </CourseStatisticsContainer>
        </>
      )}
    </Container>
  );
}

export default CourseRenderer;

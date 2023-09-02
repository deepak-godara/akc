import React, { useState } from "react";
import styled from "styled-components";
import { FaBuildingColumns, FaLocationDot } from "react-icons/fa6";
import { CourseDetailsType } from "./CourseDetailsType";
// styled-components----
const Container = styled.div`
  padding: 1.875rem 3.125rem;
  height: 9.3125rem;
  box-shadow: 0px 10px 25px #00000029;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderDataContainer = styled.div`
  display: flex;
`;
const HeaderDataImageContainer = styled.div`
  height: 5.5rem;
  width: 5.5rem;
`;
const HeaderDataImage = styled.img`
  height: 100%;
  width: 100%;
`;
const HeaderDataInfoContainer = styled.div`
  margin-left: 3.125rem;
  margin-top: 0.625rem;
`;
const UniversityAndCourseTypeContainer = styled.div`
  font-size: 1.125rem;
  line-height: 1.5625rem;
  display: flex;
  color: ${(props) => props.theme.colors.gray[600]};
`;
const UniversityName = styled.div`
  display: flex;
  align-items: center;
`;
const UniversityIcon = styled(FaBuildingColumns)``;
const CourseType = styled.div`
  margin-left: 1.25rem;
  display: flex;
  align-items: center;
`;

const CourseTypeIcon = styled(FaLocationDot)``;
const CourseInfoContainer = styled.div`
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors.gray[800]};
  display: flex;
  align-items: center;
`;
const CourseMajor = styled.div`
  font-size: 1.5625rem;
  line-height: 2.1875rem;
  font-weight: 700;
`;
const CourseSubject = styled.div``;
const CourseLanguage = styled.div``;
const SquareIcon = styled.div`
  height: 0.625rem;
  width: 0.625rem;
  background: ${(props) => props.theme.colors.gray[500]};
  margin: 0 1.875rem;
`;

const HeaderButtonsContainer = styled.div`
  display: flex;
`;
const Availability = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.gray[800]};
`;
interface AvailablilityIconPropsType {
  $available: boolean;
}
const AvailablilityIcon = styled.div<AvailablilityIconPropsType>`
  height: 1rem;
  width: 1rem;
  border-radius: 0.5rem;
  background: ${(props) =>
    props.$available
      ? props.theme.colors.green[600]
      : props.theme.colors.red[500]};
  margin-right: 0.625rem;
`;
const PriceButton = styled.div`
  padding: 0.9688rem 1.25rem;
  height: 3.5rem 12.125rem;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.gray[400]};
  margin-left: 1.25rem;
  display: flex;
`;
const SalePrice = styled.div`
  color: ${(props) => props.theme.colors.gray[800]};
  margin-right: 0.625rem;
`;
interface PricePropType {
  $sale: boolean;
}
const Price = styled.div<PricePropType>`
  color: ${(props) =>
    props.$sale ? props.theme.colors.gray[700] : props.theme.colors.gray[800]};
  text-decoration: ${(props) => (props.$sale ? "line-through" : "none")};
  font-weight: 700;
`;
interface ReserveButtonPropType {
  $available: boolean;
}
const ReserveButton = styled.button<ReserveButtonPropType>`
  width: 26.125rem;
  height: 3.5rem;
  font-weight: 700;
  background: ${(props) =>
    props.$available
      ? props.theme.colors.green[600]
      : props.theme.colors.red[500]};
  text-align: center;
  color: #ffffff;
  border-radius: 10px;
  margin-left: 1.25rem;
`;
// ---------------------

function CourseHeader({ item }: { item: CourseDetailsType }) {
  return (
    <Container>
      <HeaderDataContainer>
        <HeaderDataImageContainer>
          <HeaderDataImage src={item.universityImage} />
        </HeaderDataImageContainer>
        <HeaderDataInfoContainer>
          <UniversityAndCourseTypeContainer>
            <UniversityName>
              <UniversityIcon />
              &nbsp;&nbsp;{item.university}
            </UniversityName>
            <CourseType>
              <CourseTypeIcon />
              &nbsp;&nbsp;{item.type}
            </CourseType>
          </UniversityAndCourseTypeContainer>
          <CourseInfoContainer>
            <CourseMajor>{item.major}</CourseMajor>
            <SquareIcon />
            <CourseSubject>{item.subject}</CourseSubject>
            <SquareIcon />
            <CourseLanguage>{item.language}</CourseLanguage>
          </CourseInfoContainer>
        </HeaderDataInfoContainer>
      </HeaderDataContainer>
      <HeaderButtonsContainer>
        <Availability>
          <AvailablilityIcon $available={item.available} />
          {item.available ? "Available" : "Not Available"}
        </Availability>
        <PriceButton>
          {item.salePrice && (
            <SalePrice>&euro;&nbsp;{item.salePrice}</SalePrice>
          )}

          <Price $sale={!!item.salePrice}> &euro;&nbsp;{item.price}</Price>
        </PriceButton>
        <ReserveButton $available={item.available}>
          {item.available ? "Reserve your spot" : "No Spot Available"}
        </ReserveButton>
      </HeaderButtonsContainer>
    </Container>
  );
}

export default CourseHeader;

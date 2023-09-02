import { APICourseResponse } from "@lib/Types/API/APICourseResponse";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import styled from "styled-components";
import { CourseDetailsType } from "../CourseDetailsType";

// styled-components----
const Container = styled.div`
  display: flex;
`;
const StarsContainer = styled.div`
  font-size: 1.375rem;
  color: ${(props) => props.theme.colors.yellow[500]};
`;
const StarIcon = styled(FaStar)``;
const HalfStarIcon = styled(FaStarHalf)``;
const RatingText = styled.div`
  font-size: 1rem;
  line-height: 1.4375rem;
  margin-left: 0.75rem;
  color: ${(props) => props.theme.colors.gray[800]};
`;
//----------------------

function CourseRatingComponent({ item }: { item: CourseDetailsType }) {
  const [star, setStar] = useState<number>(0);
  const [halfStar, setHalfStar] = useState<boolean>(false);
  useEffect(() => {
    const rounded = Math.floor(item.rating);
    setStar(rounded);
    setHalfStar(item.rating - rounded > 0);
  });
  return (
    <Container>
      <StarsContainer>
        {Array.from({ length: star }).map((e) => (
          <StarIcon />
        ))}
        {halfStar && <HalfStarIcon />}
      </StarsContainer>
      <RatingText>Rated with {item.rating} out of 5.0</RatingText>
    </Container>
  );
}

export default CourseRatingComponent;

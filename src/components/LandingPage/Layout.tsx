import styled from "styled-components";
import Header from "@components/CommonDashboard/Header";
import BookImageUrl from "@images/book.png";
import LaptopImage from "@images/laptop.png";
import SpiralArrowImage from "@images/spiral-arrow.png";
import { FaAngleDown, FaStar } from "react-icons/fa6";
import FormSelect from "./FormSelect";
import Form from "./Form";
// start of styled-components\
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(72, 131, 196);
  background: linear-gradient(
    90deg,
    rgba(72, 131, 196, 1) 35%,
    rgba(27, 103, 188, 1) 100%
  );
`;
const HeaderContainer = styled.div``;
const InnerContainer = styled.div`
  width: 80%;
  margin: auto;
  flex-grow: 1;
  display: flex;
`;

const LeftIconsContainer = styled.div`
  width: 10px;
  flex-grow: 1;
`;
const BookImageContainer = styled.div`
  opacity: 0.5;
`;
const BookImageShadow = styled.div`
  display: inline-block;
  height: 2rem;
  width: 2rem;
  position: relative;
`;
const BookImageStyled = styled.img`
  position: absolute;
`;

const MiddleContainer = styled.div`
  width: 52rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeadingsContainer = styled.div`
  text-align: center;
`;
const SpiralArrowContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 10rem;
  width: 5.5rem;
  transform-origin: top left;
  transform: translate(100%, 0);
  display: flex;
  justify-content: end;
  align-items: center;
`;
const SpiralArrowImageStyled = styled.img`
  height: 6rem;
`;
const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  font-size: 2.2rem;
  text-align: center;
  display: inline-block;
  position: relative;
`;

const HeadingBoldPart = styled.span`
  font-weight: 700;
`;
const SubHeading = styled.h2`
  font-size: 1.4rem;
  margin-top: 1rem;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  text-align: center;
  display: inline-block;
`;
const FormContainer = styled.div`
  margin-top: 6.2rem;
  padding: 2.55rem 2.3rem;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 5px #356daa;
`;

const RatingComponent = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RatingComponentText = styled.span`
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  margin-left: 0.8rem;
`;
const Stars = styled(FaStar)`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.yellow[500]};
`;
const RightIconsContainer = styled.div`
  width: 10px;
  flex-grow: 1;
`;

// end of styled-components

function Layout() {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <InnerContainer>
        <LeftIconsContainer></LeftIconsContainer>
        <MiddleContainer>
          <HeadingsContainer>
            <Heading>
              <HeadingBoldPart>Educational growth </HeadingBoldPart>with AKC
              <SpiralArrowContainer>
                <SpiralArrowImageStyled
                  src={SpiralArrowImage}
                  alt="spiral-arrow"
                ></SpiralArrowImageStyled>
              </SpiralArrowContainer>
            </Heading>
            <SubHeading>A platform by and for university students</SubHeading>
          </HeadingsContainer>
          <FormContainer>
            <Form />
          </FormContainer>
          <RatingComponent>
            {new Array(5).fill(0).map((e, index) => (
              <Stars key={index} />
            ))}
            <RatingComponentText>
              Rated with a 4.8 out of 5.0
            </RatingComponentText>
          </RatingComponent>
        </MiddleContainer>
        <RightIconsContainer></RightIconsContainer>
      </InnerContainer>
    </Container>
  );
}

export default Layout;

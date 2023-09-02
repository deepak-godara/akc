import styled from "styled-components";

// styled-components----
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// ---------------------

function LoadingScreen() {
  return <Container>Loading</Container>;
}

export default LoadingScreen;

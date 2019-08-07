import styled from "@emotion/styled";

const LoadingErrorBG = styled.div<any>`
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary || "#05396B"};
  color: ${props => props.theme.white || "white"};
`;

export default LoadingErrorBG;

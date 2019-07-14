import styled from "@emotion/styled";

export const WelcomeTextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & code {
    color: ${props => props.theme.secondary};
  }

  &.welcome-text {
    grid-column: 1;
  }

  &.about-json {
    grid-column: 2;
  }
`;

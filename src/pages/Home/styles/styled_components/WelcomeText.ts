import styled from "@emotion/styled";

export const WelcomeTextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .about-json {
    .json-pretty {
      padding-left: 30px;
      padding-right: 30px;
    }
    .json-selected {
      background-color: rgba(139, 191, 228, 0.19999999999999996);
    }

    .json-string {
      color: ${props => props.theme.secondary};
    }

    .json-key {
      color: ${props => props.theme.light};
    }

    .json-boolean {
      color: ${props => props.theme.secondary};
    }

    .json-number {
      color: ${props => props.theme.secondary};
    }
  }

  &.welcome-text {
    grid-column: 1;
  }

  &.about-json {
    grid-column: 2;
  }
`;

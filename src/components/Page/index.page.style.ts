import styled from '@emotion/styled';

export const IntroductionWrapper = styled.div`
  margin-left: 5em;
  color: white;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 500px) {
    width: 100%;
    grid-template-columns: 1fr;
  }

  /* Nested Columns */
  .firstColumn {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: left;

    button {
      height: 50px;
      width: 50%;
      background-color: transparent;
      border: 2px solid ${(props: any) => props.theme.primary};
      color: ${(props: any) => props.theme.white};
      cursor: pointer;
      transition: all ease-in-out 0.2s;
      border-radius: 5px;

      &:hover {
        background-color: ${(props: any) => props.theme.primary};
        border: 1px solid ${(props: any) => props.theme.white};
      }
    }
  }

  .secondColumn {
    margin-top: -0.5em;
    padding: 0 1rem;

    #json {
      font-size: 0.8em;

      .json-key {
        color: ${(props: any) => props.theme.primary};
      }
    }

    /* Hide Second Column for mobile breakpoints */
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

import styled from '@emotion/styled';

export const IntroductionWrapper = styled.div`
  margin-top: 1em;
  margin-left: 5em;
  color: white;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  /* Nested Columns */
  .firstColumn {
    margin-top: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
  }

  .secondColumn {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
  }
`;

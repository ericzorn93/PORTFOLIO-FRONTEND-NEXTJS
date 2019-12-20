import styled from "@emotion/styled";

export const ResumeInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-family: Ubuntu, sans-serif;
  .date {
    grid-column: 1;
  }
  .info {
    grid-column: 2;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

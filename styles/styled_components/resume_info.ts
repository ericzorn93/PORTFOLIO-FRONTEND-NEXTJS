import styled from "@emotion/styled";

export const ResumeInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-family: Ubuntu, sans-serif;
  line-height: 2;

  .date {
    margin-top: 20px;
    grid-column: 1;
  }

  .info {
    margin-top: 20px;
    grid-column: 2;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

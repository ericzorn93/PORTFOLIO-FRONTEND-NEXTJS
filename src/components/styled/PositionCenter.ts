import styled from '@emotion/styled';

export const PositionCenter = styled.div`
  --transition-text: all 0.2s ease-in-out;
  --transform-text: scale(1.1);

  width: 100vw;
  padding: 100px;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: -1;

  .personName {
    font-size: 60px;
    font-weight: 300;
    transition: var(--transition-text);

    &:hover {
      transform: var(--transform-text);
    }
  }

  .jobTitle {
    font-size: 62px;
    font-weight: 800;
    transition: var(--transition-text);

    &:hover {
      transform: var(--transform-text);
    }
  }

  .description {
    font-weight: 400;
    font-size: 24px;
    transition: var(--transition-text);

    &:hover {
      transform: var(--transform-text);
    }
  }

  @media (max-width: 800px) {
    .personName {
      font-size: 30px;
      font-weight: 300;
    }

    .jobTitle {
      font-size: 32px;
      font-weight: 800;
    }

    .description {
      font-weight: 400;
      font-size: 14px;
    }
  }
`;

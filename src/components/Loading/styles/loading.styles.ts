import styled from '@emotion/styled';

export const LoadingWrapper = styled.div`
  background-color: ${(props: any) => props.theme.primary || '#05396B'};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

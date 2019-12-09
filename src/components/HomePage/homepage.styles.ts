import styled from '@emotion/styled';

export const HomePageWrapper = styled.div<any>`
  width: 100vw;
  height: 100vh;
  background-color: ${(props: any) =>
    props.isDarkModeEnabled ? '#333' : '#fff'};
`;

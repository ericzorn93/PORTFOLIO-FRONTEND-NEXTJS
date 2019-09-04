import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border: 1px solid ${(props: any) => props.theme.primary};
  background-color: ${(props: any) => props.theme.secondary};

  a {
    color: ${(props: any) => props.theme.white};
    text-decoration: none;
    font-family: Roboto, sans-serif;
  }
`;

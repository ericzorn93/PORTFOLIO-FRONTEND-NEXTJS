import styled from '@emotion/styled';

export const HeaderWrapper = styled.nav`
  height: 100vh;
  width: 80px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props: any) => props.theme.secondary};
  background: ${(props: any) => props.theme.primary};
`;

export const HeaderTitle = styled.h1`
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;

  a {
    color: ${(props: any) => props.theme.white};
    text-decoration: none;
  }
`;

export const NavList = styled.ul`
  height: 100%;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 0px;
  margin-top: 2rem;

  li {
    text-align: center;

    a {
      font-size: 1.8rem;
      text-decoration: none;
      color: ${(props: any) => props.theme.white};

      &:hover {
        color: ${(props: any) => props.theme.secondary};
      }
    }

    button {
      border: none;
      outline: none;
      background: none;
      color: ${(props: any) => props.theme.white};
      font-size: 1.8rem;
      cursor: pointer;

      &:hover {
        color: ${(props: any) => props.theme.secondary};
      }
    }
  }
`;

import styled from "@emotion/styled";

// Wraps the entire header component
export const HeaderWrapper = styled.header`
  margin-top: 1em;
  width: 100vw;
  height: 100px;
  background-color: #0000;

  nav {
    display: flex;

    h1 {
      font-size: 1em;
    }
  }
`;

// Wraps the first section of the navigation bar, including the title
export const FirstNavSection = styled.section`
  flex: 4;

  h1 {
    margin-left: 1rem;
  }
`;

// Wraps the second section of the navigation bar
export const SecondNavSection = styled.section`
  display: flex;
  flex: 1;

  h1 {
    margin-left: 1rem;
    a {
      text-decoration: none;
      color: black;
    }
  }
`;

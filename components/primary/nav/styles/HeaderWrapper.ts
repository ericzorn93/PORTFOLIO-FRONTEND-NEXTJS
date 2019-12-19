import styled from "@emotion/styled";

// Wraps the entire header component
export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
`;

// Navigation Component
export const Navigation = styled.nav`
  width: 100%;
  height: 100%;
  display: inline-grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  justify-items: center;
  margin-top: 20px;

  .logo {
    grid-column: 1 / 3;
  }

  .links {
    grid-column: 6 /12;
    justify-content: center;

    a {
      margin-left: 25px;
      text-decoration: none;
      font-family: "Ubuntu", sans-serif;
      /* color: #333; */
    }
  }
`;

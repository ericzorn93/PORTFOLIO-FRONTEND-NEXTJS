import styled from "@emotion/styled";

export const HomePageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomePageSocialMediaIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 10%;

  .icon {
    font-size: 35px;
    color: black;
    cursor: pointer;

    &:hover {
      color: #f9d86a;
    }
  }
`;

import { PropsWithChildren } from "react";
import styled from "styled-components";

const TagMain = styled.main`
  padding: 0 20px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 100px;

    > section {
      margin-top: 10rem;

      &:first-child {
        margin-top: 0;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 0 177px;

    > section {
      margin-top: 10rem;

      &:first-child {
        margin-top: 0;
      }
    }
  }

  @media screen and (min-width: 1920px) {
    padding: 0 400px;

    > section {
      margin-top: 10rem;

      &:first-child {
        margin-top: 0;
      }
    }
  }
`;

function Main({ children }: PropsWithChildren) {
  return <TagMain>{children}</TagMain>;
}

export default Main;

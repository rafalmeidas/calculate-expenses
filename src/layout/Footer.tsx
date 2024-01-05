import styled from "styled-components";

import NavLinks from "../components/NavLinks";

const FooterTag = styled.footer`
  padding: 0 20px;
  margin-bottom: 20px;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    h1 {
      display: none;
    }

    > div {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }

    > nav {
      display: none;
    }

    span {
      font-size: 12px;
    }
  }

  hr {
    margin: 15px 0;
    height: 2px;
    background-color: var(--title-light);
    border: none;
  }

  padding: 0 20px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 100px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 177px;

    > div {
      flex-direction: row;

      h1 {
        display: block;
      }

      > div {
        flex-direction: row;
        gap: 33px;
      }

      > nav {
        display: flex;
      }

      span {
        font-size: 16px;
      }
    }

    hr {
      margin: 40px 0;
      height: 5px;
    }
  }

  @media screen and (min-width: 1920px) {
    padding: 0 400px;
  }
`;

function Footer() {
  return (
    <FooterTag>
      <div>
        <span>LOGO</span>
      </div>
      <hr />
      <div>
        <NavLinks />
        <span>Designed and build by Rafael Silva with ❤️</span>
      </div>
    </FooterTag>
  );
}

export default Footer;

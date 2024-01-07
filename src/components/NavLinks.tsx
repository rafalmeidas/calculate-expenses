import { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

import { routes } from "../routes/routes";
import SignIn from "./SignIn";

interface NavTagProps {
  $isRow: boolean;
}

interface LinkTagProps {
  $isActive: boolean;
}

const NavTag = styled.nav<NavTagProps>`
  ${({ $isRow }) => css`
    display: flex;
    align-items: ${$isRow ? "center" : "start"};
    justify-content: ${$isRow ? "center" : "start"};
    flex-direction: ${$isRow ? "row" : "column"};
    gap: ${$isRow ? "54px" : "24px"};
  `}
`;

const LinkTag = styled(Link)<LinkTagProps>`
  ${({ $isActive }) => css`
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
    color: var(--light-content);

    ${$isActive &&
    css`
      color: var(--subtitle-light);
      font-weight: 700;
    `}

    &:hover {
      ${!$isActive &&
      css`
        color: var(--subtitle-light);
      `}
    }
  `}
`;

interface NavLinksProps extends PropsWithChildren {
  isRow?: boolean;
  displaySignIn?: boolean;
  onTo?: () => void;
}

function NavLinks({
  children,
  isRow = true,
  displaySignIn = false,
  onTo,
}: NavLinksProps) {
  const location = useLocation();

  const isActive = (pathname: string): boolean =>
    location.pathname.replace("/", "") === pathname;

  return (
    <NavTag $isRow={isRow ?? true}>
      {routes
        .filter(({ name }) => name)
        .map(({ path, name }) => (
          <LinkTag
            key={path}
            to={path}
            onClick={onTo ? onTo : undefined}
            $isActive={isActive(path)}
          >
            {name}
          </LinkTag>
        ))}
      <SignIn displaySignIn={displaySignIn} />
      {children}
    </NavTag>
  );
}

export default NavLinks;

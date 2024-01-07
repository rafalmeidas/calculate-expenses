import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { useAuth } from "../hooks/useAuth";

const LinkTag = styled(Link)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 800;
  padding: 0 7px;
  border-radius: 7px;

  border: 1px solid var(--title-light);
  color: var(--title-light);

  transition: all 0.5s ease-in-out;

  &:hover {
    border-color: var(--light-content);
    color: var(--light-content);
  }
`;

const Avatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 3px solid var(--title-light);
  cursor: pointer;

  transition: all 0.5s ease-in-out;

  &:hover {
    border-color: var(--light-content);
  }
`;

interface SignInProps {
  displaySignIn?: boolean;
}

function SignIn({ displaySignIn = false }: SignInProps) {
  const { signed, signOut, user } = useAuth();
  const location = useLocation();

  const isLogin: boolean = location.pathname === "/login";

  if (displaySignIn || (!signed && isLogin)) return null;

  if (!signed) return <LinkTag to="/login">Entrar</LinkTag>;

  return (
    <Avatar
      onClick={signOut}
      alt={user?.displayName ?? "Avatar do usuário"}
      src={user?.photoURL ?? ""}
    />
  );
}

export default SignIn;

import { Navigate } from "react-router-dom";

import GoogleIcon from "../components/icons/GoogleIcon";
import { useAuth } from "../hooks/useAuth";
import styled from "styled-components";

const TagSection = styled.section`
  width: 100%;
  height: calc(100vh - 91px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin: 0 auto;

  h1 {
    text-align: center;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 1rem 10px;
    background-color: var(--bg-card-dark);

    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      background: transparent;
      color: var(--text-dark);
      border: 1px solid var(--text-dark);
      padding: 8px 10px;
      border-radius: inherit;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
  }

  @media screen and (min-width: 1920px) {
    width: 550px;
  }
`;

function Login() {
  const { signInWithGoogle, signed } = useAuth();

  if (signed) return <Navigate to="/dashboard" />;

  return (
    <TagSection>
      <h1>Acessar Gestão de Despesas</h1>
      <div>
        <button onClick={signInWithGoogle}>
          <GoogleIcon /> Entrar com o Google
        </button>
      </div>
    </TagSection>
  );
}

export default Login;

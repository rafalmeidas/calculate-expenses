import { Outlet } from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function Container() {
  return (
    <AuthProvider>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </AuthProvider>
  );
}

export default Container;

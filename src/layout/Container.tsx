import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function Container() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default Container;

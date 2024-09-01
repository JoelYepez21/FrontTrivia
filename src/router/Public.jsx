import { Route, Routes } from "react-router";
import Home from "../pages/home";

import PersisAuth from "../components/PersistAuth";

export const RootPublic = () => {
  return (
    <>
      <Routes>
        <Route element={<PersisAuth />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default RootPublic;

import { Route, Routes } from "react-router";
import PersisAuth from "../components/PersistAuth";

export const RootPrivate = () => {
  return (
    <>
      <Routes>
        <Route element={<PersisAuth />}></Route>
      </Routes>
    </>
  );
};

export default RootPrivate;

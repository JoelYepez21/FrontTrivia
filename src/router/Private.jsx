import { Route, Routes } from "react-router";

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

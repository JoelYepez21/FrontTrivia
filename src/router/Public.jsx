import { Route, Routes } from "react-router";
import Home from "../pages/home";
import PersisAuth from "../components/PersistAuth";
import Player from "../pages/player";
import Creador from "../pages/creador";

export const RootPublic = () => {
  return (
    <>
      <Routes>
        <Route element={<PersisAuth />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/player" element={<Player />} />
        <Route path="/creador" element={<Creador />} />
      </Routes>
    </>
  );
};

export default RootPublic;

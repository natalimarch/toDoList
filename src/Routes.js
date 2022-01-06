import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import CreateToDoForm from "./pages/CreateToDoForm";
import ToDos from "./pages/ToDos";

const NavRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
      <Route exact path="/create-todo" element={<CreateToDoForm />}></Route>
      <Route exact path="/todo" element={<ToDos />}></Route>
    </Routes>
  );
};

export default NavRoutes;

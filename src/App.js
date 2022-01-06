import { BrowserRouter as Router } from "react-router-dom";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import operations from "./redux/list/list-operations";

import Navbar from "./client/Navbar";
import NavRoutes from "./Routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const actionFunc = operations.getList();
    dispatch(actionFunc);
  }, [dispatch]);
  return (
    <Router>
      <Fragment>
        <div className="App">
          <Navbar />
          <NavRoutes />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;

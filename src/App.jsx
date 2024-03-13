import React, { useEffect } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// * api
import { useSnackbar } from "notistack";
import { HttpResponseInterceptor } from "./interceptor/http-response.interceptor";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

// *pages
import Layout from "./layout/Layout";
import Game from "./pages/Game";
import Saved from "pages/Saved";
import OldGame from "pages/OldGame";

function App() {
  <Helmet>
    <title>tic tac tow</title>
    <meta name="description" content="game" />
  </Helmet>;
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    HttpResponseInterceptor(navigate, enqueueSnackbar);
  }, [enqueueSnackbar, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<Game />} />
          <Route path="/Saved" element={<Saved />} />
          <Route path="/Saved/:id" element={<OldGame />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import { darkThemeColors } from "./style/Theme";
import SignupPage from "./pages/SignupPage";
import { useGetUserQuery } from "./store/api/userapi";
import { useEffect, useState } from "react";
import ButtonLoader from "./components/loading/ButtonLoader";
import { LoadingDiv } from "./style/Container";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "./store/store";

function App() {
  const token = useSelector((state) => state.user.token);

  const { data, isFetching, error } = useGetUserQuery(token);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("token"));
    dispatch(setToken(storedToken));

    if (data) {
      dispatch(setUser(data.user));
    }
  }, [data]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        {/* <Route
          path='/login'
          element={<LoginPage />}
        /> */}
        <Route
          path='/signup'
          element={<SignupPage />}
        />
      </Route>
    )
  );
  return (
    <ThemeProvider theme={darkThemeColors}>
      {isFetching ? (
        <LoadingDiv>
          <ButtonLoader />
        </LoadingDiv>
      ) : (
        <RouterProvider router={router} />
      )}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

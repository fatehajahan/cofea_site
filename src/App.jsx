import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './index.css'
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
);

function App() {
  const theme = useSelector((theme) => theme.themeDetails.theme)
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);
  return (
    <RouterProvider router={router} />
  )
}

export default App

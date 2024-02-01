import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import IndexPage from "./pages/index";
import LoginPage from "./pages/login";
import MainPage from "./pages/main";

const routers = createBrowserRouter([
  { path: "", element: <LoginPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/main", element: <MainPage /> },
  { path: "/index", element: <IndexPage /> },
]);
function App() {
  return (
    <>
    <RouterProvider router={routers} />
    </>
  )
}

export default App


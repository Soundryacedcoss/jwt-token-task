import "./App.css";
import { Login } from "./Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Admin } from "./Admin";
let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/Login" element={<Admin />} />
    </>
  )
);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

// import { Home } from "lucide-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Footer from "./components/footer/Footer";
// import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Jobs from "./pages/jobs/Jobs";
import Browse from "./pages/browse/Browse";
// import { routes } from "./routes/routes.js";
const routes = createBrowserRouter([
  {
    // name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    // name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    // name: "Sign Up",
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <div className="mx-5">
      {/* <Header /> */}
      <RouterProvider router={routes} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

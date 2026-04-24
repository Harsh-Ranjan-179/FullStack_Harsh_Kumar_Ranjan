import Layout from "./hoc/Layout"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import JobBoard from "./Components/JobBoard/JobBoard"
import JobCard from "./Components/JobCard/JobCard"
import EmployerDashboard from "./Components/EmployerDashboard/EmployerDashboard"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="jobs" element={<JobBoard />} />
        <Route path="employer" element={<EmployerDashboard />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home';
import { Outlet } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';


function Layout() {
  return (
      <>
 <Header />
        
        <Outlet />
       <Footer />
      </>
  );
}


const router = createBrowserRouter([{
  element: <Layout/>,
  children:[
  {
    path: "/",
    element: <Home />
  },
  // {
  //   path: "/competitions/:name",
  //   element: <CompetitionPage />
  // },
  // {
  //   path: "/competitions/:name",
  //   element: <CompetitionPage />
  // },
]}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

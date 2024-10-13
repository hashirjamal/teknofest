import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home';
import { Outlet } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import CompetitionsPage from './pages/CompetitionsPage';
import CompetitionPage from './pages/CompetitionPage';
import AdminPage from './pages/AdminPage';

import Form from './Components/Form';


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
  {
    path: "/competitions",
    element: <CompetitionsPage />
  },
  {
    path: "/competitions/:id",
    element: <CompetitionPage />
  },
  {
    path: "/admin",
    element: <AdminPage />
  },
  {
    path: "formChecker",
    element: <Form noOfMembers={4}/>
  },
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

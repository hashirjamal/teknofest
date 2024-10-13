import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home';
import { Outlet } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import CompetitionsPage from './pages/CompetitionsPage';
import CompetitionPage from './pages/CompetitionPage';


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
]}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

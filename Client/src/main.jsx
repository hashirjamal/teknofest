import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CompetitionPage from './pages/CompetitionPage'
import CompetitionsPage from './pages/CompetitionsPage'

const router = createBrowserRouter([
  {
    path: "/competitions",
    element: <CompetitionsPage />
  },
  {
    path: "/competitions/:name",
    element: <CompetitionPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

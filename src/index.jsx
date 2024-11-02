import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './global.css';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ErrorPage } from './pages/ErrorPage';
import { CentersPage } from './pages/CentersPage';
import { CenterDetail } from './pages/CenterDetail';
import { DefaultPage  } from './pages/DefaultPage';

const router = createBrowserRouter([{
  path:"/",
  element: <HomePage />,
  errorElement: <ErrorPage />,
  children: [
    {  
      path:"/",
      element: <DefaultPage />
      },
    {  
    path:"/about",
    element: <AboutPage />
    },
    {
      path:"/contact",
      element: <ContactPage />
    },
    {
      path:"/pobocky",
      element: <CentersPage />,
      children: [  
        {
        path:"/pobocky/:id",
        element: <CenterDetail />
        }]
    },
  
  ]
},
])

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);

import React from 'react'
import App from './App.tsx'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Appointments from './Appointments.tsx';
import About from './About.tsx';
import Contact from './Contact';
import TestimoniesAndImages from './TestimoniesAndImages.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Appointments.tsx",
    element: <Appointments />,

  },
  {
    path: "About.tsx",
    element: <About />,

  },
  {
    path: "Contact.tsx",
    element: <Contact />,

  },
  {
    path: "TestimoniesAndImages.tsx",
    element: <TestimoniesAndImages />,

  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

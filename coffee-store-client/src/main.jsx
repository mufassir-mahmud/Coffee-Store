import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layouts/MainLayout';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeDetails from './components/CoffeDetails.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Users from './components/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('http://localhost:3001/coffees')
      },
      {
        path: '/addCoffee',
        element: <AddCoffee/>
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee/>,
        loader: ({params}) => fetch(`http://localhost:3001/coffees/${params.id}`)
      },
      {
        path: '/coffees-details/:id',
        element: <CoffeDetails/>,
        loader: ({params}) => fetch(`http://localhost:3001/coffees/${params.id}`)
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signUp',
        element: <SignUp/>
      },
      {
        path: '/users',
        element: <Users/>,
        loader: () => fetch('http://localhost:3001/users')
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   
  </StrictMode>,
)

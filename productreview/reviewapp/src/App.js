import './App.css';
import Details from './pages/Details';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddReview from './pages/AddReview';

// Fix the router configuration, ensure path and element are properly used.
const routerConfig = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/review", element: <AddReview /> },
  { path: "/login", element: <Login /> },
  { path: "/details", element: <Details /> },
  { path: "/register", element: <Register /> }, // Add the register path
]);

function App() {
  return (

    <div>
      <h1>learn react</h1>
      
      <RouterProvider router={routerConfig}></RouterProvider>
    </div>
  );
}

export default App;
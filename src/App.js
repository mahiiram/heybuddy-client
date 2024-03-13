import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Homepage />
  },
  {
    path:"/signup",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  }
]);

function App() {
  return (
      <RouterProvider  router={router}>

      </RouterProvider>
   
  );
}

export default App;

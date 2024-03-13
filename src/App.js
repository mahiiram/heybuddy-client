import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path:"/",
    element:<div><Homepage /></div>
  },
  {
    path:"/signup",
    element:<div><Register/></div>
  },
  {
    path:"/login",
    element:<div><Login/></div>
  }
]);

function App() {
  return (
    <main>
      <RouterProvider  router={router}>

      </RouterProvider>
    </main>
   
  );
}

export default App;

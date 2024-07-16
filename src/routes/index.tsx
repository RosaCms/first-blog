import {createBrowserRouter} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import App from '../App';

export const router=createBrowserRouter([
  {
    path:"/",
    element:<MainLayout />,
    errorElement:(<h3>صفحه یافت نشد</h3>),
    children:[
      {
        path:"/",
        element:<App />
      }
    ]
  }
]);
import React from 'react';
import { createBrowserRouter, useRoutes  } from "react-router-dom";
import { AuthProvider } from '../Components/Authentication/AuthProvider';
import ProtectedRoute from '../Components/Authentication/ProtectedRoute';
import Home from "../Components/Home/Home";
import Blog, { loaderBlog } from "../Components/Blog/AllBlogs";
import Users, {loaderUsers} from "../Components/Users/Users";
import NotFound from "../Components/NotFound/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import SinglePost, {loaderSinglePost} from "../Components/Blog/Post/SinglePost";
import Post from "../Components/Blog/Post/Post";
import CrearPost from "../Components/Blog/CreatePost/CreatePost";
import Profile, { loaderProfile } from "../Components/Users/Profile/Profile";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";



export const router = createBrowserRouter([
  {
    path:'/',
    element: <LayoutPublic/>,
    errorElement: <NotFound/>,
    children:[
      {
        index: true, element: <Home/>,
        loader: loaderBlog,
      },
      {
        path:"/blog", element: <Blog/>,

        loader: loaderBlog,
      },
      {
        path:"/users", element: <Users/>,

        loader: loaderUsers,
      },
      {
        path:"/blog/:id",
        element:<Post/>,
        loader: loaderSinglePost,
      },
      {
        path:"/create/:id",
        element: <CrearPost/>,
      },
      {
        path:"/perfil",
        element: <Profile/>,
        loader: loaderProfile
      },
      {
        path:"/login",
        element: <Login/>,
      },
      {
        path:"/signup",
        element: <Signup/>,
      }
    ],
  },
  
]);

const Root = () => {
  const route = useRoutes(router);

  return (
    <AuthProvider>
      {route}
    </AuthProvider>
  );
};
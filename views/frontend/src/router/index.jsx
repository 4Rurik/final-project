import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Blog, { loaderBlog } from "../Components/Blog/AllBlogs";
import Users, {loaderUsers} from "../Components/Users/Users";
import NotFound from "../Components/NotFound/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import SinglePost, {loaderSinglePost} from "../Components/Blog/Post/SinglePost";
import Post from "../Components/Blog/Post/Post";
import Comment from "../Components/Comment/Comment";


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
        element: <Post/>,
        loader: loaderSinglePost,
      },
      {
        path:"/comments",
        element: <Comment/>
      }
    ]
  },
  
])


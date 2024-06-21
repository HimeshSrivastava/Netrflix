import Browse from "./components/Browse"
import Login from "./components/Login"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import MovieDetails from "./components/MoviesDetails";
import MoviesSlice from "./Utils/moviesSlice";

const App = () => {
  const appRouter= createBrowserRouter([
    {  
      path:'/',
      element:<Login/>
    },
    {  
      path:'/movie/:id',
      element:<MoviesSlice/>
    },
    {  
      path:'/Browse',
      element:<Browse/>
    }
  ])
  return (
    <div>
     <RouterProvider router={appRouter}/>
</div>
  )
}

export default App

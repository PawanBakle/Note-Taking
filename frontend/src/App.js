import Header from './Components/Header';
import './App.css';
import NotePage from './pages/NotePage'
import NodeListPage from './pages/NodeListPage'
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path:'/',
    element:<NodeListPage/>
  },
  {
    path:'/notes/',
    element:<NodeListPage/>
  },
  {
    path:'/notes/:id',
    element:<NotePage/>
  },



]); 

function App() {
  return (
    <>

    <div className='container dark'>

<div className='app'>
<RouterProvider router={router} />
</div>
    </div>

   
   </>

  );
}

export default App;

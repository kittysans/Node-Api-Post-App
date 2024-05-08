import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// components
import Homepage from './pages/Homepage'
import Createpost from './pages/Createpost'
import Editpost from './pages/Editpost'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage/>,
  },
  {
    path: '/create-post',
    element: <Createpost/>,
  },
  {
    path: '/post/:id',
    element: <Editpost/>,
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App

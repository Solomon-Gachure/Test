import {createBrowserRouter,Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import About from './pages/about';
import Home from './pages/home';
import RootLayout from './Layouts/RootLayout';
import HelpLayout from './Layouts/HelpLayout';
import Faq from './pages/faq';
import Contact from './pages/contact';

const router=createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='help' element={<HelpLayout/>}>
          <Route path='faq' element={<Faq/>} />
          <Route path='Contact' element={<Contact/>}/>

        </Route>

      </Route>
  )
)
function App() {
  return (
    
    
     <RouterProvider router={router}/>
    
  );
}

export default App;

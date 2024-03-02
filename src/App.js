import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// pages

import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Services, { servicesLoader } from './pages/Services'

// layouts

import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import ServicesLayout from './layouts/ServicesLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />

      <Route path="services" element={<ServicesLayout />} />   
      <Route 
        index
        element={<Services />}
        loader={servicesLoader}
      />
     <Route path="*" element={<NotFound />} />
     </Route>
  )
)

function App() {
  return (
    
<RouterProvider router={router}/>
  );
}

export default App
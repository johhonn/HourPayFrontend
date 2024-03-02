import { NavLink, Outlet } from 'react-router-dom'  // this component wrapps all the other routes, home+about are rendered in outlet

export default function RootLayout() {
  return (
    <div className="root-layout">
        <header>
            <nav>
                <h1>Title</h1>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="faq">FAQ</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                    <NavLink to="services">Services</NavLink>
            </nav>
        </header>
        <main>
            <Outlet /> 
        </main>
    </div>
  )
}
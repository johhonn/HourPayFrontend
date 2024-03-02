import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">

        <h2>Website Help</h2>
        <p>Website Help Website Help Website Help Website Help Website Help</p>
    
        <nav>
            <NavLink to="/help">Help</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}
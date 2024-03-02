import { Outlet } from "react-router-dom"

export default function Services() {
  return (
    <div className="services-layout">

      <h2>services</h2>
        <p>Website Hair Cut</p>
      <Outlet />
    </div>
  )
}
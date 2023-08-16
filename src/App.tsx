import { Outlet } from "react-router-dom"

export const App = () => {

  return (
    <div className="app">
      <h1>Github Finder</h1>
      <Outlet />
    </div>
  )
}

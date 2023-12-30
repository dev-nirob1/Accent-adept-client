import { Outlet } from "react-router-dom"
import Navbar from "./Shared/Navbar/Navbar"
import Footer from "./Shared/Footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(10vh-356px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App

import { useContext } from "react"
import { AuthContext } from "./AuthProvider/AuthProvider"

function App() {
const {user} = useContext(AuthContext)
  return (
    <>
      <h3 className="text-center ">ki khobor boss = {user}</h3>
    </>
  )
}

export default App

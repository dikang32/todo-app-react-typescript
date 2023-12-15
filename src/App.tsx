import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route element={<Home></Home>} path="/"></Route>
      <Route element={<Home></Home>} path="/home"></Route>
    </Routes>
  )
}

export default App
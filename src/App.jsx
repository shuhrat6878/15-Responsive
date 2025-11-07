import { Route, Routes } from "react-router"
import { Mainlayout } from "./layout/main-layout"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Mainlayout/>}>
        <Route index element={<sasas/>} />
        <Route path="/about" element={< wewew/>} />
      </Route>
    </Routes>
  )
}

export default App

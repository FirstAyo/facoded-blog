import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";

function App() {

  return (

    <div className="max-w-[1440px] border border-b-red-800 mx-auto">
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </div>
  )
}

export default App

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";

function App() {

  return (

    <div className="max-w-[1440px] border border-b-red-800 mx-auto">
      <Routes>

        <Route path="/" element={<Navbar />} >
          <Route path="signin" element={<UserAuthForm type="sign-in" />} />
          <Route path="signup" element={<UserAuthForm type="sign-up" />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App

// import { Login } from "./components/Login"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Landing, Analytics, Admin, Home, Dashboard } from './pages/index.js'
import { Navigation } from "./components/Navigation.jsx"
import { ProtectedRoute } from "./components/ProtectedRoute.jsx"
import { useState } from "react"

function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    // request done
    setUser({
      id: 1,
      name: "Jhon",
      permissions: [""],
      roles: ["admin"]
    })
  }

  const logout = () => setUser(null);

  return ( 
    <BrowserRouter>
      <Navigation/>

      {
        user ? (
          <button onClick={logout}>Logout</button>
        )
        : (<button onClick={login}>Login</button>)
      }
      

      <Routes>
        <Route index element={<Landing/>} />
        <Route path="/landing" element={<Landing/>}/>
        <Route element={<ProtectedRoute isAllowed={!!user}/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>

        <Route path="/analytics" element={
          <ProtectedRoute isAllowed={!!user && user.permissions.includes("analize")} redirectTo="/home">
            <Analytics/>
          </ProtectedRoute>
          }/>
        <Route path="/admin" element={
          <ProtectedRoute isAllowed={!!user && user.roles.includes("admin")}>
            <Admin/>
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import { Toaster } from 'react-hot-toast';
import SidebarRoutes from "./routes/sidebar";



function App() {
  document.title = "Dashboard | Ecommerce WorldWide"
  return (
    <>
      <Sidebar />
      <Header />
      <div className="max-w-6xl mx-auto px-12">
        <Routes>
          {
            SidebarRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component />} />
            ))
          }
        </Routes>
      </div>
      <Toaster
        position="top-right" />
    </>
  )
}

export default App

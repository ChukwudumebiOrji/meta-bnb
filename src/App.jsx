import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./main.css"
import Home from "./pages/Home"
import PlaceToStay from "./pages/PlaceToStay"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Modal } from "./components/Modal"
import { Sidebar } from "./components/Sidebar"

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  return (
    <>
      {modalIsOpen && <Modal setModalIsOpen={setModalIsOpen} />}
      {sidebarIsOpen && (
        <Sidebar
          setSidebarIsOpen={setSidebarIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      )}

      <Header
        setModalIsOpen={setModalIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/marketplace" element={<PlaceToStay />}></Route>
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  )
}

export default App

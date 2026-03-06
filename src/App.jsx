import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import {
  Home,
  About,
  Contact,
  BookkeepingAccounting,
  NewTaxation,
  NewPayroll,
  Payroll,
  Services,
  NotFound,
  Terms
} from './pages'
import { Footer7 } from './components/footer-7'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='grow'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bookkeeping-accounting-services" element={<BookkeepingAccounting />} />
            <Route path="/new-taxation" element={<NewTaxation />} />
            <Route path="/payroll" element={<NewPayroll />} />
            {/* <Route path="/payroll" element={<Payroll />} /> */}
            <Route path="/services" element={<Services />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/404-v2" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer7 />
      </div>
    </Router>
  )
}

export default App

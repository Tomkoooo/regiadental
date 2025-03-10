
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Dynamic from './pages/dynamic/dynamic'
import EmployeesPage from './pages/employes/page'
import PricesPage from './pages/price/page'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:string" element={<Dynamic />} />
        <Route path="/munkatarsaink" element={<EmployeesPage />} />
        <Route path="/araink" element={<PricesPage />} />
      </Routes>
    </Router>
  )
}

export default App
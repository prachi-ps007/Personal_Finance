import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Budget from './pages/Budget';
import Analytics from './pages/Analytics';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
          <div className="flex gap-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'
              }
            >
              Transactions
            </NavLink>
            <NavLink
              to="/budget"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'
              }
            >
              Budget
            </NavLink>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'
              }
            >
              Analytics
            </NavLink>
          </div>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

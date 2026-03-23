import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Add from './pages/Add';
import Budget from './pages/Budget';
import Analytics from './pages/Analytics';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="theme-shell">
          <nav className="theme-nav border-b border-black/5">
            <div className="flex gap-4">
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
                Dashboard
              </NavLink>
              <NavLink to="/transactions" className={({ isActive }) => (isActive ? 'active' : '')}>
                Transactions
              </NavLink>
              <NavLink to="/add" className={({ isActive }) => (isActive ? 'active' : '')}>
                Add
              </NavLink>
              <NavLink to="/budget" className={({ isActive }) => (isActive ? 'active' : '')}>
                Budget
              </NavLink>
              <NavLink to="/analytics" className={({ isActive }) => (isActive ? 'active' : '')}>
                Analytics
              </NavLink>
            </div>
          </nav>
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/add" element={<Add />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

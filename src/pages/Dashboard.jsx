import { motion } from 'framer-motion';
import { format } from 'date-fns';
import Starfield from '../components/Starfield';
import './Dashboard.css';

const MOCK_TRANSACTIONS = [
  { id: 1, title: 'Salary', amount: 4200, type: 'income', date: new Date(), category: 'Income' },
  { id: 2, title: 'Grocery Store', amount: -78.50, type: 'expense', date: new Date(), category: 'Food' },
  { id: 3, title: 'Netflix', amount: -15.99, type: 'expense', date: new Date(), category: 'Subscription' },
  { id: 4, title: 'Freelance Project', amount: 350, type: 'income', date: new Date(), category: 'Income' },
  { id: 5, title: 'Electric Bill', amount: -92, type: 'expense', date: new Date(), category: 'Utilities' },
];

function Dashboard() {
  const income = MOCK_TRANSACTIONS.filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  const expenses = MOCK_TRANSACTIONS.filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const netBalance = income - expenses;

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const container = {
    animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  return (
    <div className="dashboard">
      <Starfield />
      <motion.div
        className="dashboard__content"
        initial="initial"
        animate="animate"
        variants={container}
      >
        <motion.h1 className="dashboard__title" variants={fadeUp}>
          Dashboard
        </motion.h1>

        <motion.div className="dashboard__balance" variants={fadeUp}>
          <span className="dashboard__balance-label">Net Balance</span>
          <span className="dashboard__balance-value">
            ${netBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </span>
        </motion.div>

        <motion.div className="dashboard__cards" variants={fadeUp}>
          <div className="dashboard__card dashboard__card--income">
            <span className="dashboard__card-label">Income</span>
            <span className="dashboard__card-value">${income.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
          </div>
          <div className="dashboard__card dashboard__card--expense">
            <span className="dashboard__card-label">Expenses</span>
            <span className="dashboard__card-value">${expenses.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
          </div>
        </motion.div>

        <motion.section className="dashboard__recent" variants={fadeUp}>
          <h2 className="dashboard__section-title">Recent Transactions</h2>
          <ul className="dashboard__transactions">
            {MOCK_TRANSACTIONS.slice(0, 5).map((tx) => (
              <motion.li
                key={tx.id}
                className="dashboard__tx"
                variants={fadeUp}
              >
                <div className="dashboard__tx-info">
                  <span className="dashboard__tx-title">{tx.title}</span>
                  <span className="dashboard__tx-meta">
                    {format(tx.date, 'MMM d')} · {tx.category}
                  </span>
                </div>
                <span className={`dashboard__tx-amount ${tx.type}`}>
                  {tx.amount >= 0 ? '+' : ''}{tx.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </motion.div>
    </div>
  );
}

export default Dashboard;

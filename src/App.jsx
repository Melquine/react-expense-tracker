import { useState } from 'react'
import { GlobaProvider } from './context/GlobalState'
import Header from './components/Header'
import './App.css'
import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import IncomeExpenses from './components/IncomeExpenses'
import ExpenseChart from './components/transactions/ExpenseChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobaProvider>
      <div className='bg-zinc-900 h-full text-white flex flex-row
        justify-center items-center'>
        <div className='container mx-auto mt-10 w-6/6'>
          <div className='bg-zinc-800 p-3 rounded-lg flex flex-col gap-x-2 min-w-[240px] max-w-[400px] mx-auto 
            md:max-w-[700px] md:flex-row md:justify-center'>
            <div className='px-3'>
              <h1 className='text-xl font-bold'>Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className='flex flex-col px-3'>
              <TransactionList />
              <ExpenseChart />
            </div>

          </div>
        </div>

      </div>

    </GlobaProvider>
  )
}

export default App

import React from 'react'
import { useGlobalState } from '../../context/GlobalState'
import TransactionItem from './TransactionItem'
function TransactionList({ transaction }) {
    const { transactions } = useGlobalState()
  return (
    <>
        <h3 className='text-slate-300 text-xl font-bold block mb-3 w-full'>History</h3>
        <ul>
            {
                transactions.map(transaction => (
                    <TransactionItem key={transaction.id} transaction={transaction}/>
                ))
            }
        </ul>

    </>
  )
}

export default TransactionList